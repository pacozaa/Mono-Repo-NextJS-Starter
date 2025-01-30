import { NextRequest } from "next/server";
import { GET } from "../route";

describe("/api/helloworld", () => {
  it("should return hello message", async () => {
    const req = new NextRequest("http://localhost:3000/api/helloworld", {
      method: "GET",
    });

    const response = await GET(req);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual({ message: "Hello from the API!" });
  });

  // Test error scenarios
  //   it("should handle internal server errors", async () => {
  //     // Mock implementation to simulate error
  //     jest
  //       .spyOn(global, "fetch")
  //       .mockImplementationOnce(() =>
  //         Promise.reject(new Error("Internal Server Error"))
  //       );

  //     const req = new NextRequest("http://localhost:3000/api/helloworld", {
  //       method: "GET",
  //     });

  //     const response = await GET(req);
  //     expect(response.status).toBe(500);
  //   });

  // Test with different query parameters
  it("should handle query parameters", async () => {
    const url = new URL("http://localhost:3000/api/helloworld");
    url.searchParams.set("name", "Test");

    const req = new NextRequest(url, {
      method: "GET",
    });

    const response = await GET(req);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual({ message: "Hello from the API!" });
  });
});
