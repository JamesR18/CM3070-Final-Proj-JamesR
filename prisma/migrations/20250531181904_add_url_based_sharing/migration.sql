-- CreateTable
CREATE TABLE "SharedLink" (
    "id" TEXT NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "identityId" INTEGER NOT NULL,
    "context" TEXT NOT NULL,
    "name" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "expiresAt" TIMESTAMP(3),
    "accessLimit" INTEGER,
    "accessCount" INTEGER NOT NULL DEFAULT 0,
    "requireAuth" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SharedLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SharedLinkAccess" (
    "id" SERIAL NOT NULL,
    "sharedLinkId" TEXT NOT NULL,
    "viewerIp" TEXT,
    "viewerAgent" TEXT,
    "accessedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SharedLinkAccess_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "SharedLink_ownerId_idx" ON "SharedLink"("ownerId");

-- CreateIndex
CREATE INDEX "SharedLink_identityId_idx" ON "SharedLink"("identityId");

-- CreateIndex
CREATE INDEX "SharedLinkAccess_sharedLinkId_idx" ON "SharedLinkAccess"("sharedLinkId");

-- AddForeignKey
ALTER TABLE "SharedLink" ADD CONSTRAINT "SharedLink_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SharedLink" ADD CONSTRAINT "SharedLink_identityId_fkey" FOREIGN KEY ("identityId") REFERENCES "Identity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SharedLinkAccess" ADD CONSTRAINT "SharedLinkAccess_sharedLinkId_fkey" FOREIGN KEY ("sharedLinkId") REFERENCES "SharedLink"("id") ON DELETE CASCADE ON UPDATE CASCADE;
