import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse";
import { api } from "./api";
import { getCityByNameService } from "./getCityByNameService"

describe("Service: getCityByNameService", () => {
    it("should return city details", async () => {
        jest.spyOn(api, "get").mockResolvedValue({ data: mockCityAPIResponse }); 
        // we let's listen the requests to the api with method 'get' - let's created a mock of return this api
        const response = await getCityByNameService("São Paulo");
        expect(response.length).toBeGreaterThan(0);
    });
});