import axios from "axios";

describe("Send APIのテスト", () => {
  test("sendで送信されるか", async () => {
    const request = await axios.post("http://127.0.0.1:3000/api/send", {
        name: "John Doe",
        email: "sample@email.com",
        content: "Hello",
    });

    expect(request.status).toEqual(200);
    expect(request.data.message).toEqual("送信に成功しました。");
  });
});
