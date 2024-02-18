const request = require("supertest");
const app = require("../server");

describe("Server", () => {
    it("should generate quiz questions", async () => {
        const response = await request(app)
            .post("/generate-quiz-questions")
            .send({ /* Add your request body here */ });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty(/* Add your expected property here */);
    });

    it("should get generated questions", async () => {
        const response = await request(app).get("/generated-questions");

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty(/* Add your expected property here */);
    });
});
