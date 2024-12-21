-- DropForeignKey
ALTER TABLE "itemPrice" DROP CONSTRAINT "itemPrice_itemId_fkey";

-- AddForeignKey
ALTER TABLE "itemPrice" ADD CONSTRAINT "itemPrice_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE CASCADE ON UPDATE CASCADE;
