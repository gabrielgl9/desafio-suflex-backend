import request from "supertest";

describe("Auth User", () => {
  it("Should be able to auth a user", async () => {
    const name = "gabriel" + new Date().toDateString();

    await request("http://localhost:4001").post("/user").send({
      name: name,
      password: "senha123",
    });

    const response = await request("http://localhost:4001")
      .post("/login")
      .send({
        name: name,
        password: "senha123",
      });

    expect(response.statusCode).toEqual(201);
    expect(response.body).toHaveProperty("token");
  });

  it("Should not be able to auth a user", async () => {
    const response = await request("http://localhost:4001")
      .post("/login")
      .send({
        name: "gabriel123456" + new Date().toDateString(), // wrong infos
        password: "senha123456",
      });

    expect(response.statusCode).toEqual(400);
  });
});
