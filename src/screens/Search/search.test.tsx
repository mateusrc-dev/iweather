import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse";
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@__tests__/utils/customRender";
import { Search } from "@screens/Search";
import { api } from "@services/api";

describe("Screen: Search", () => {
  it("should be show city option.", async () => {
    render(<Search />);

    const searchInput = screen.getByTestId("search-input");
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityAPIResponse });
    fireEvent.changeText(searchInput, "São Paulo"); // here we let's interact with the input - with fireEvent we can do interaction...
    // with something component - the search will be in api, we let's create a mock

    const option = await waitFor(() => screen.findByText(/são paulo/i));
    expect(option).toBeTruthy();
  });
});
