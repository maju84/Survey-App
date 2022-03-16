import request from "supertest";
import { URL_API } from "../src/api/api";
import { URL_SURVEYS } from "../src/api/surveys/surveys";
import app from "../src/app";



describe(`${URL_API}/`, () => {

  test("GET should respond with a 200 and contain certain string", async () => {
    const response = await request(app).get(`${URL_API}/`);
    expect(response.statusCode).toBe(200);
    expect(response.body.surveys.endsWith(`${URL_API}${URL_SURVEYS}`)).toBeTruthy();
  });

  test("OPTIONS should respond with GET,OPTIONS 'allow'ed in header", async () => {
    const response = await request(app).options(`${URL_API}/`);
    expect(response.statusCode).toBe(200);
    expect(response.headers['allow']).toBe('GET,OPTIONS');
  });

});

describe(`${URL_API}${URL_SURVEYS}/`, () => {

  test("POST should respond with a 201 and return requested data", async () => {
    const surveyData = {
      "question": "w00t?!",
      "answer-0": "first answer",
      "answer-2": "second answer"
    };

    const response = await request(app).post(`${URL_API}${URL_SURVEYS}/`).send(surveyData);
    expect(response.statusCode).toBe(201);
    expect(response.body).toStrictEqual(surveyData);
  });  


});