import { prisma } from "./db";
import type { User, Session } from "./generated/prisma/index.d.ts";
import { createHash } from "crypto";

export function generateSessionToken(): string {
    const bytes = new Uint8Array(20);
    crypto.getRandomValues(bytes);
    // Base32 encoding without padding (simplified implementation)
    return Array.from(bytes)
        .map(b => b.toString(32).padStart(2, '0'))
        .join('')
        .substring(0, 32);
}

export async function createSession(token: string, userId: number): Promise<Session> {
    const sessionId = createHash('sha256').update(token).digest('hex');
    const session: Session = {
        id: sessionId,
        userId,
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)
    };

    await prisma.session.create({
        data: session
    });

    return session;
}

export async function validateSessionToken(token: string): Promise<SessionValidationResult> {
    const sessionId = createHash('sha256').update(token).digest('hex');

    const result = await prisma.session.findUnique({
        where: {
            id: sessionId
        },
        include: {
            user: true
        }
    });

    if (!result) {
        return { session: null, user: null };
    }

    const { user, ...session } = result;

    if (Date.now() >= session.expiresAt.getTime()) {
        await prisma.session.delete({ where: { id: sessionId } });
        return { session: null, user: null };
    }

    // Extend session if less than 15 days remaining
    if (Date.now() >= session.expiresAt.getTime() - 1000 * 60 * 60 * 24 * 15) {
        const newExpiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30);
        await prisma.session.update({
            where: {
                id: session.id
            },
            data: {
                expiresAt: newExpiresAt
            }
        });

        session.expiresAt = newExpiresAt;
    }

    return { session, user };
}

export async function invalidateSession(sessionId: string): Promise<void> {
    await prisma.session.delete({
        where: {
            id: sessionId
        }
    });
}

export async function invalidateAllSessions(userId: number): Promise<void> {
    await prisma.session.deleteMany({
        where: {
            userId
        }
    });
}

export type SessionValidationResult =
    | { session: Session; user: User }
    | { session: null; user: null };