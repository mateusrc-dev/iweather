import { useCity } from "@hooks/useCity";
import { act, renderHook, waitFor } from "@testing-library/react-native";
import { CityProvider } from "./CityContext";

describe("Context: CityContent", () => {
  it("should be change selected city.", async () => {
    const { result } = renderHook(() => useCity(), { wrapper: CityProvider });
    // useHook is for get the values send in context, but for be possible get this information's...
    // ...is need her to share with app through of provider

    await waitFor(() =>
      act(() =>
        result.current.handleChanceCity({
          id: "1",
          name: "Teresina",
          latitude: 123,
          longitude: 456,
        })
      )
    ); // the change of city state is async, then we await to this action

    expect(result.current.city?.name).toBe("Teresina");
  });
});
