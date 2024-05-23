-- CreateTable
CREATE TABLE `blog` (
    `BlogName` VARCHAR(50) NULL,
    `BlogID` INTEGER NOT NULL AUTO_INCREMENT,
    `Content` VARCHAR(50) NULL,
    `Date` DATE NULL,
    `Img` VARCHAR(50) NULL,
    `UserID` INTEGER NULL,
    `CategoryID` INTEGER NULL,

    INDEX `IXFK_Blog_Blog Category`(`CategoryID`),
    INDEX `IXFK_Blog_User`(`UserID`),
    PRIMARY KEY (`BlogID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `blog category` (
    `CategoryID` INTEGER NOT NULL AUTO_INCREMENT,
    `CategoryName` VARCHAR(50) NULL,

    PRIMARY KEY (`CategoryID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `blog tag` (
    `TagID` INTEGER NOT NULL AUTO_INCREMENT,
    `TagName` VARCHAR(50) NULL,
    `BlogTagBlogID` INTEGER NULL,

    PRIMARY KEY (`TagID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `blogtagblog` (
    `BlogTagBlogID` INTEGER NOT NULL AUTO_INCREMENT,
    `TagID` INTEGER NOT NULL,
    `BlogID` INTEGER NOT NULL,

    INDEX `IXFK_BlogTagBlog_Blog`(`BlogID`),
    PRIMARY KEY (`BlogTagBlogID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order` (
    `OrderId` INTEGER NOT NULL AUTO_INCREMENT,
    `UserID` INTEGER NOT NULL,
    `OrderDate` VARCHAR(50) NULL,

    INDEX `FK_Order_User`(`UserID`),
    PRIMARY KEY (`OrderId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order product` (
    `OrderId` INTEGER NOT NULL,
    `Qunatity` INTEGER NOT NULL,
    `orderProductID` INTEGER NOT NULL AUTO_INCREMENT,
    `ProductId` INTEGER NOT NULL,

    INDEX `IXFK_Order Product_Order`(`OrderId`),
    PRIMARY KEY (`orderProductID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product` (
    `BrandId` INTEGER NOT NULL,
    `CategoryId` INTEGER NOT NULL,
    `ProductId` INTEGER NOT NULL AUTO_INCREMENT,
    `ProductName` VARCHAR(50) NOT NULL,
    `Price` DOUBLE NULL,
    `Short Description` VARCHAR(50) NULL,
    `Long Description` VARCHAR(50) NULL,
    `Discount Amount` VARCHAR(50) NULL,
    `VAT` BOOLEAN NOT NULL,
    `Show price` BOOLEAN NULL,
    `Model` VARCHAR(50) NULL,
    `orderProductID` INTEGER NULL,

    INDEX `IXFK_Product_Order Product`(`orderProductID`),
    INDEX `IXFK_Product_Product Brand`(`BrandId`),
    INDEX `IXFK_Product_Product Category`(`CategoryId`),
    PRIMARY KEY (`ProductId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product brand` (
    `BrandId` INTEGER NOT NULL AUTO_INCREMENT,
    `BrandName` VARCHAR(50) NULL,

    PRIMARY KEY (`BrandId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product category` (
    `CategoryId` INTEGER NOT NULL AUTO_INCREMENT,
    `CategoryName` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`CategoryId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product specification` (
    `Specification Name` VARCHAR(50) NOT NULL,
    `ProductId` INTEGER NOT NULL,
    `Specification Detail` VARCHAR(50) NOT NULL,
    `SpecificationId` INTEGER NOT NULL AUTO_INCREMENT,

    INDEX `IXFK_Product specification_Product`(`ProductId`),
    PRIMARY KEY (`SpecificationId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product tag` (
    `productTagId` INTEGER NOT NULL AUTO_INCREMENT,
    `ProductTagName` VARCHAR(50) NOT NULL,
    `ProductId` INTEGER NOT NULL,

    PRIMARY KEY (`productTagId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `producttagproduct` (
    `productTagId` INTEGER NOT NULL,
    `ProductTagProductID` INTEGER NOT NULL AUTO_INCREMENT,
    `ProductId` INTEGER NOT NULL,

    INDEX `IXFK_ProductTagProduct_Product`(`ProductId`),
    INDEX `IXFK_ProductTagProduct_Product Tag`(`productTagId`),
    PRIMARY KEY (`ProductTagProductID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `review` (
    `reviewId` INTEGER NOT NULL AUTO_INCREMENT,
    `UserID` INTEGER NOT NULL,
    `reviewDate` DATE NOT NULL,
    `ProductId` INTEGER NOT NULL,
    `reviewDescription` VARCHAR(50) NOT NULL,
    `rating` DOUBLE NOT NULL,

    INDEX `FK_Review_User`(`UserID`),
    PRIMARY KEY (`reviewId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `role` (
    `RoleID` INTEGER NOT NULL AUTO_INCREMENT,
    `RoleName` VARCHAR(50) NULL,

    UNIQUE INDEX `UniqueName`(`RoleName`),
    PRIMARY KEY (`RoleID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `RoleID` INTEGER NOT NULL,
    `UserID` INTEGER NOT NULL AUTO_INCREMENT,
    `UserName` VARCHAR(50) NULL,
    `Password` VARCHAR(50) NULL,
    `Email` VARCHAR(50) NULL,
    `PhoneNumber` VARCHAR(50) NULL,
    `Gender` ENUM('Male', 'Female', 'None') NULL DEFAULT 'None',
    `DateOfBirth` DATE NULL,

    UNIQUE INDEX `UniqueUserName`(`UserName`),
    UNIQUE INDEX `UniqueEmail`(`Email`),
    INDEX `FK_User_Role`(`RoleID`),
    PRIMARY KEY (`UserID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `useraddress` (
    `UserAddressId` INTEGER NOT NULL AUTO_INCREMENT,
    `Address` VARCHAR(50) NULL,
    `Road` VARCHAR(50) NULL,
    `UserID` INTEGER NOT NULL,
    `Block` VARCHAR(50) NULL,
    `Area` VARCHAR(50) NULL,

    INDEX `FK_UserAddress_User`(`UserID`),
    PRIMARY KEY (`UserAddressId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
