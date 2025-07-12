/*
  Warnings:

  - You are about to drop the column `passoword` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "passoword",
ADD COLUMN     "password" TEXT;
