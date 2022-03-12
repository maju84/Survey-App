import request from "supertest";
import app from "../src/app";

const URL_API = "/api";

describe(`${URL_API}/`, () => {

  test("should respond with a 200 and contain certain string", async () => {
    const response = await request(app).get(`${URL_API}/`);
    expect(response.statusCode).toBe(200);
    expect(response.body.surveys).toContain("http");
  });

  test("should respond with GET,OPTIONS 'allow'ed in header", async () => {
    const response = await request(app).options(`${URL_API}/`);
    expect(response.statusCode).toBe(200);
    expect(response.headers['allow']).toBe('GET,OPTIONS');
  });


});
