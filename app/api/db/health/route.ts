import { prisma } from "@/lib/db";

export async function GET(req: Request) {
    try {
        await prisma.$executeRaw`SELECT 1`;
        return Response.json({ status: "ok" });
    } catch (error) {
        return Response.json({ status: "error" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        await prisma.$executeRaw`SELECT 1`;
        return Response.json({ status: "ok" });
    } catch (error) {
        return Response.json({ status: "error" }, { status: 500 });
    }
}