import request from "supertest";
import app from "../src/app";

const API = "/api";
describe(`${API}/`, () => {

  test("should respond with a 200 and contain certain string", async () => {
    const response = await request(app).get(`${API}/`);
    expect(response.statusCode).toBe(200);
    expect(response.body.surveys).toContain("http");
  });

});
