import axios from "axios";
import ip from "ip"

describe("Send APIのテスト", () => {
  test("sendで送信されるか", async () => {
    const address = ip.address()
    const request = await axios.post(`http://${address}:3000/api/send`, {
        name: "John Doe",
        email: "sample@email.com",
        content: "Hello",
    });

    expect(request.status).toEqual(200);
    expect(request.data.message).toEqual("送信に成功しました。");
  });
});
