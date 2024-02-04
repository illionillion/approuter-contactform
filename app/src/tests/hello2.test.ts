import { GET } from "@/app/api/hello/route";

describe("hello API Test", () => {
  test("正しくJohn Doeが返されるか", async () => {

    const res = await GET()
    const json = await res.json()
    expect(res.status).toEqual(200);
    expect(json.message).toEqual("Hello!!");

  });
});
