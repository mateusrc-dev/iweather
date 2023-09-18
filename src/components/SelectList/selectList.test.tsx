import { SelectList } from "@components/SelectList";
import { fireEvent, render, screen } from "@testing-library/react-native";

describe("Component: SelectList", () => {
  it("should be return city details searching.", () => {
    const data = [
      // creating data fictitious
      { id: "1", name: "Campinas", latitude: 123, longitude: 456 },
      { id: "2", name: "Campo Grande", latitude: 789, longitude: 987 },
    ];

    const onPress = jest.fn(); // the variable will be a function of jest - this is a mock

    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />);

    const selectedCity = screen.getByText(/campinas/i); // finds a text equal to that written in the method in the component
    // we can use regex to make word search more flexible
    fireEvent.press(selectedCity); // with method fireEvent we let's see if the button clicked

    expect(onPress).toBeCalledWith(data[0]); // let's see which parameter was placed in function/mock
  });

  it("not should be show options when data props is empty", () => {
    render(<SelectList data={[]} onChange={() => {}} onPress={() => {}} />);

    const options = screen.getByTestId("options");
    expect(options.children).toHaveLength(0); // we can check if there are child components inside the parent component
  });
});
