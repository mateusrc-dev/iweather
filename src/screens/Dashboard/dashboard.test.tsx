import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@__tests__/utils/customRender";
import { api } from "@services/api";
import { Dashboard } from "@screens/Dashboard";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse";

describe("Screen: Dashboard", () => {
  beforeAll(async () => {
    const city = {
      id: "1",
      name: "Rio do Sul, BR",
      latitude: 123,
      longitude: 456,
    };

    await saveStorageCity(city); // this component need of city state for do the request for the api
  });

  it("should be show city weather.", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });

    render(<Dashboard />);

    await waitFor(() =>
      expect(
        screen.findByText(/rio do sul/i, {}, { timeout: 3000 })
      ).toBeTruthy()
    ); // we let's await because will be search the word
  });

  it("should be show search of another weather city.", async () => {
    jest
      .spyOn(api, "get")
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse }) // find the information's of weather of selected city
      .mockResolvedValueOnce({ data: mockCityAPIResponse }); // find the information's of city when change the selected city in storage

    render(<Dashboard />);

    await waitForElementToBeRemoved(() => screen.queryByTestId("loading")); // await this element to be remove os screen

    const cityName = "São Paulo";

    await waitFor(() =>
      act(() => {
        const search = screen.getByTestId("search-input");
        fireEvent.changeText(search, cityName);
      })
    );

    expect(screen.getByText(cityName, { exact: false })).toBeTruthy();
  });
});
