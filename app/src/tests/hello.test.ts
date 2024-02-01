import axios from "axios";

describe("HelloAPIのテスト", () => {
  test("Helloが返ってくるか", async () => {
    const request = await axios({
      url: "http://127.0.0.1:3000/api/hello",
      method: "GET",
    });

    expect(request.data.message).toEqual("Hello!!");
  });
});
