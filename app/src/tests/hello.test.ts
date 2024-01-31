import axios from "axios";

describe("HelloAPIのテスト", () => {
  test("Helloが返ってくるか", async () => {
    const request = await axios({
      url: "http://localhost:3000/api/hello",
      method: "GET",
    });

    expect(request.data.message).toEqual("Hello!!");
  });
});
