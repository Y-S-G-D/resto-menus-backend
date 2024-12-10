-- DropForeignKey
ALTER TABLE "item" DROP CONSTRAINT "item_outletId_fkey";

-- CreateTable
CREATE TABLE "itemOutlet" (
    "id" SERIAL NOT NULL,
    "itemId" TEXT NOT NULL,
    "outletId" TEXT NOT NULL,

    CONSTRAINT "itemOutlet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "itemOutlet_itemId_outletId_key" ON "itemOutlet"("itemId", "outletId");

-- AddForeignKey
ALTER TABLE "itemOutlet" ADD CONSTRAINT "itemOutlet_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itemOutlet" ADD CONSTRAINT "itemOutlet_outletId_fkey" FOREIGN KEY ("outletId") REFERENCES "outlet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
