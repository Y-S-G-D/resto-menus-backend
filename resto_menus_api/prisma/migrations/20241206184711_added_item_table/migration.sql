/*
  Warnings:

  - You are about to drop the column `price` on the `item` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "item" DROP COLUMN "price";

-- CreateTable
CREATE TABLE "itemPrice" (
    "id" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "itemPrice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "itemPrice" ADD CONSTRAINT "itemPrice_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
