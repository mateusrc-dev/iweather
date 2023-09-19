import { render, screen, waitFor } from "@testing-library/react-native";
import { Routes } from ".";
//import { SafeAreaProvider } from "react-native-safe-area-context";

describe("Routes", () => {
  it("should be render Search screen when not city selected", async () => {
    render(<Routes /> /* {wrapper: SafeAreaProvider}*/); // is need say that the component Routes have provider...
    // ...SafeAreaProvider because inside him is used properties of the provider, but is need created a mock, is need we do the integration...
    // with the jest
    const title = await waitFor(() => screen.findByText(/^escolha um local/i));
    // findByText method have a time out, city is a state that have a delay for change

    expect(title).toBeTruthy();
  });
});
