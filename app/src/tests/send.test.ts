import * as appHandler from "@/app/api/send/route";
import { testApiHandler } from 'next-test-api-route-handler'; 

describe("Send APIのテスト", () => {
  test("sendで送信されるか", async () => {
    await testApiHandler({
      appHandler,
      async test({ fetch }) {
        const res = await fetch({ method: 'POST', body: JSON.stringify({
          name: "John Doe", email: "sample@email.com", content: "Hello World."
        }) });
        expect(await res.json()).toStrictEqual({ message: "送信に成功しました。" });
      }
    });
  });
});
