import supertest from "supertest";
import { URL_API } from "../src/api/api";
import { URL_SURVEYS } from "../src/api/surveys/surveys";
import { app } from "../src/app";

const request = supertest(app);

describe(`${URL_API}/`, () => {

  test("GET should respond with a 200 and contain certain string", async () => {
    const response = await request.get(`${URL_API}/`);
    expect(response.statusCode).toBe(200);
    expect(response.body.surveys.endsWith(`${URL_API}${URL_SURVEYS}`)).toBeTruthy();
  });

  test("OPTIONS should respond with GET,POST,OPTIONS 'allow'ed in header", async () => {
    const response = await request.options(`${URL_API}/`);
    expect(response.statusCode).toBe(200);
    expect(response.headers['allow']).toBe('GET,POST,OPTIONS');
  });

});
