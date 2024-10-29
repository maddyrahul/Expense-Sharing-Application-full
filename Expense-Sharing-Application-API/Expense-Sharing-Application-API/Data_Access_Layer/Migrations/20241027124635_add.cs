using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Data_Access_Layer.Migrations
{
    public partial class add : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Groups",
                columns: table => new
                {
                    GroupId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Groups", x => x.GroupId);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Role = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Balance = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Id = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NormalizedUserName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NormalizedEmail = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    PasswordHash = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SecurityStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "bit", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "bit", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "Expenses",
                columns: table => new
                {
                    ExpenseId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Description = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Amount = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    PaidById = table.Column<int>(type: "int", nullable: false),
                    GroupId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Expenses", x => x.ExpenseId);
                    table.ForeignKey(
                        name: "FK_Expenses_Groups_GroupId",
                        column: x => x.GroupId,
                        principalTable: "Groups",
                        principalColumn: "GroupId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Expenses_Users_PaidById",
                        column: x => x.PaidById,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "GroupMembers",
                columns: table => new
                {
                    GroupMemberId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    GroupId = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    IsSettled = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GroupMembers", x => x.GroupMemberId);
                    table.ForeignKey(
                        name: "FK_GroupMembers_Groups_GroupId",
                        column: x => x.GroupId,
                        principalTable: "Groups",
                        principalColumn: "GroupId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GroupMembers_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "UserId", "AccessFailedCount", "Balance", "ConcurrencyStamp", "Email", "EmailConfirmed", "Id", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "Password", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "Role", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[,]
                {
                    { 1, 0, 0m, "649a0c61-3731-41c3-9410-e1e455f9b129", "admin@gmail.com", false, "4df7a234-5a07-4a6a-b7a2-97147a73ec98", false, null, null, null, "string", null, null, false, "Admin", "", false, null },
                    { 2, 0, 0m, "72ad9605-b5e2-4b37-a039-a07714bc3c80", "rahul1@gmail.com", false, "725daeba-bca3-4e90-821a-7c0df8bbba2c", false, null, null, null, "string", null, null, false, "User", "", false, null },
                    { 3, 0, 0m, "00ef8418-7458-42e2-b15b-a21218a1aa02", "rahul2@gmail.com", false, "7fbce4ab-838d-4f32-8b0c-5fc3927cd229", false, null, null, null, "string", null, null, false, "User", "", false, null },
                    { 4, 0, 0m, "81a3ec22-e3ca-4a15-ab3a-7315d7d04b96", "rahul3@gmail.com", false, "cef3d81a-ac5e-41cc-94cb-bd98bb2ac6b4", false, null, null, null, "string", null, null, false, "User", "", false, null },
                    { 5, 0, 0m, "48753cdc-c780-49b6-a3b1-97c53878a21c", "rahul4@gmail.com", false, "2810393a-afd8-482f-beb6-f8a0cbb5ca0f", false, null, null, null, "string", null, null, false, "User", "", false, null },
                    { 6, 0, 0m, "acf47753-5aed-4abf-b39a-d72d7407a49e", "rahul5@gmail.com", false, "302b528c-c964-4f4c-ba70-4aeeff255df1", false, null, null, null, "string", null, null, false, "User", "", false, null },
                    { 7, 0, 0m, "0236b9f1-3c38-47ae-bc60-20b4dd991070", "rahul6@gmail.com", false, "745de563-8b9f-428f-8ff9-21273a0dbe23", false, null, null, null, "string", null, null, false, "User", "", false, null },
                    { 8, 0, 0m, "eceb51c0-1ddf-45ff-8119-26bc7ccf9ce6", "rahul7@gmail.com", false, "1c53140e-42d6-4e41-87f1-6c65acd28572", false, null, null, null, "string", null, null, false, "User", "", false, null },
                    { 9, 0, 0m, "7cda259f-dcf3-4e16-9049-68ae3c25a11c", "rahul8@gmail.com", false, "9e19d706-fd56-47b3-93f4-2f8d14c03716", false, null, null, null, "string", null, null, false, "User", "", false, null }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Expenses_GroupId",
                table: "Expenses",
                column: "GroupId");

            migrationBuilder.CreateIndex(
                name: "IX_Expenses_PaidById",
                table: "Expenses",
                column: "PaidById");

            migrationBuilder.CreateIndex(
                name: "IX_GroupMembers_GroupId",
                table: "GroupMembers",
                column: "GroupId");

            migrationBuilder.CreateIndex(
                name: "IX_GroupMembers_UserId",
                table: "GroupMembers",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Expenses");

            migrationBuilder.DropTable(
                name: "GroupMembers");

            migrationBuilder.DropTable(
                name: "Groups");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
