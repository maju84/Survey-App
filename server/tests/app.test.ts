import request from "supertest";
import app from "../src/app";

describe("/test", () => {

  test("should respond with a 200 status code", async () => {
    const response = await request(app).get("/test");
    expect(response.statusCode).toBe(200);
    expect(response.body.smile).toContain(":-)");
  })

});
