-- CreateEnum
CREATE TYPE "AccountState" AS ENUM ('CREATED', 'STARTER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "accountState" "AccountState" NOT NULL DEFAULT 'CREATED';
