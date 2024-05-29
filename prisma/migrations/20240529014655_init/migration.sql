/*
  Warnings:

  - You are about to alter the column `OrderDate` on the `order` table. The data in that column could be lost. The data in that column will be cast from `VarChar(50)` to `Date`.
  - A unique constraint covering the columns `[UserID]` on the table `useraddress` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `order` ADD COLUMN `Status` VARCHAR(50) NULL,
    ADD COLUMN `Total` DOUBLE NULL,
    MODIFY `OrderDate` DATE NULL;

-- AlterTable
ALTER TABLE `product` ADD COLUMN `img` VARCHAR(50) NULL;

-- AlterTable
ALTER TABLE `product category` ADD COLUMN `parentId` INTEGER NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `Password` VARCHAR(450) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `useraddress_UserID_key` ON `useraddress`(`UserID`);

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `product_CategoryId_fkey` FOREIGN KEY (`CategoryId`) REFERENCES `product category`(`CategoryId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product category` ADD CONSTRAINT `product category_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `product category`(`CategoryId`) ON DELETE SET NULL ON UPDATE CASCADE;
