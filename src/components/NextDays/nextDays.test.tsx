import { render, screen } from "@testing-library/react-native";
import { NextDays } from "@components/NextDays";
import clearDay from "@assets/clear_day.svg";

describe("Component: NexDays", () => {
  it("should be render day.", () => {
    render(
      <NextDays
        data={[
          {
            day: "18/07",
            min: "30°c",
            max: "34°c",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "19/07",
            min: "31°c",
            max: "32°c",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "20/07",
            min: "35°c",
            max: "36°c",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "21/07",
            min: "20°c",
            max: "22°c",
            icon: clearDay,
            weather: "Nublado",
          },
          {
            day: "22/07",
            min: "23°c",
            max: "44°c",
            icon: clearDay,
            weather: "Chuva fraca",
          },
        ]}
      />
    );

    expect(screen.getByText("22/07")).toBeTruthy();
  });
});
