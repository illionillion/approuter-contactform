import mysql_connection from "@/lib/db/connection";

export async function GET() {
  let connection
  try {
    connection = await mysql_connection();
    const result = await connection.query("SELECT * from contact_table");
    return new Response(
      JSON.stringify({ message: "取得に成功しました。", contents: result[0] }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "取得に失敗しました。" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  } finally {
    if(connection) connection.end();
  }
}
