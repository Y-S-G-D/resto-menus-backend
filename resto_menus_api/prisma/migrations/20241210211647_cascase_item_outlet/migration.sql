-- DropForeignKey
ALTER TABLE "itemOutlet" DROP CONSTRAINT "itemOutlet_itemId_fkey";

-- AddForeignKey
ALTER TABLE "itemOutlet" ADD CONSTRAINT "itemOutlet_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE CASCADE ON UPDATE CASCADE;
