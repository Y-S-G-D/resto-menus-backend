/*
  Warnings:

  - The `outletId` column on the `outlet` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropIndex
DROP INDEX "outlet_outletId_key";

-- AlterTable
ALTER TABLE "outlet" DROP COLUMN "outletId",
ADD COLUMN     "outletId" SERIAL NOT NULL;
