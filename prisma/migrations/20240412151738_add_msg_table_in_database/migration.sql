-- CreateTable
CREATE TABLE "msg" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "msg" TEXT NOT NULL,
    "date" DATETIME
);

-- CreateIndex
CREATE UNIQUE INDEX "msg_id_key" ON "msg"("id");
