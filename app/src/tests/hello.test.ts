import * as appHandler from "@/app/api/hello/route";
import { testApiHandler } from "next-test-api-route-handler";
describe("HelloAPIのテスト", () => {
  test("Helloが返ってくるか", async () => {
    await testApiHandler({
      appHandler,
      async test({ fetch }) {
        const res = await fetch({
          method: "GET",
        });
        expect(await res.json()).toStrictEqual({
          message: "Hello!!"
        });
      },
    });
  });
});
