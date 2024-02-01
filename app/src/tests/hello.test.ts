import axios from "axios";
import ip from "ip";
describe("HelloAPIのテスト", () => {
  test("Helloが返ってくるか", async () => {
    const address = ip.address()
    console.log(address);
    
    const request = await axios({
      url: `http://${address}:3000/api/hello`,
      method: "GET",
    });    
    expect(request.data.message).toEqual("Hello!!");
  });
});
