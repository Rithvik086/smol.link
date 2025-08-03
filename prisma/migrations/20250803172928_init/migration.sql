-- CreateTable
CREATE TABLE "public"."Linkmap" (
    "id" SERIAL NOT NULL,
    "ogLink" TEXT NOT NULL,
    "newLink" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Linkmap_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Linkmap_newLink_key" ON "public"."Linkmap"("newLink");
