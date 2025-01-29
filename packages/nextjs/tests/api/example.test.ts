import { createRequest, createResponse } from "node-mocks-http";
import handler from "../../pages/api/your-endpoint";

describe("/api/your-endpoint", () => {
  it("should return 200 status for GET request", async () => {
    const req = createRequest({
      method: "GET",
      query: { param: "value" },
    });
    const res = createResponse();

    await handler(req, res);

    expect(res.statusCode).toBe(200);
    expect(res._getJSONData()).toEqual({ message: "Success" });
  });

  it("should handle POST requests", async () => {
    const req = createRequest({
      method: "POST",
      body: { data: "test" },
    });
    const res = createResponse();

    await handler(req, res);

    expect(res.statusCode).toBe(201);
  });

  it("should handle errors", async () => {
    const req = createRequest({
      method: "GET",
      query: { invalidParam: "error" },
    });
    const res = createResponse();

    await handler(req, res);

    expect(res.statusCode).toBe(500);
    expect(res._getJSONData()).toHaveProperty("error");
  });
});
