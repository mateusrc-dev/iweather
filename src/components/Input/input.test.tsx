import { render, screen } from "@testing-library/react-native"; // for render the component
import { Input } from "@components/Input";

describe("Component: Input", () => {
  // we follow this testing pattern so that the tests are shown in order in terminal
  it("should be render without activity indicator if isLoading prop is equal the false", () => {
    render(<Input />); // here we will ask the component to be rendered
    // debug(); // here will be show the content of component

    const activityIndicator = screen.queryByTestId("activity-indicator");
    // the method queryByTestId don't returns exception - case don't find returns null
    expect(activityIndicator).toBeNull(); // this component will not be found because the isLoading property is false
  });
});
