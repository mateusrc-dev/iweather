import { render, screen, waitFor } from "@__tests__/utils/customRender";
import { Routes } from ".";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { CityProvider } from "@contexts/CityContext";
//import { SafeAreaProvider } from "react-native-safe-area-context";

describe("Routes", () => {
  it("should be render Search screen when not city selected.", async () => {
    render(<Routes /> /* {wrapper: SafeAreaProvider}*/); // is need say that the component Routes have provider...
    // ...SafeAreaProvider because inside him is used properties of the provider, but is need created a mock, is need we do the integration...
    // with the jest
    const title = await waitFor(() => screen.findByText(/^escolha um local/i));
    // findByText method have a time out, city is a state that have a delay for change

    expect(title).toBeTruthy();
  });

  it("should be render Dashboard screen when has city selected.", async () => {
    const city = {
      id: "1",
      name: "Teresina",
      latitude: 123,
      longitude: 456,
    };

    await saveStorageCity(city);

    const { debug } = render(<Routes /> /* {wrapper: CityProvider} */);
    // we can use this format for give context to Routes of city state
    // here we let's use the custom render with the  all providers contexts that ever let's use

    console.log(debug);
  });
});
