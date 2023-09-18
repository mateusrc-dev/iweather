import { CityProps } from "@services/getCityByNameService";
import { getStorageCity, removeStorageCity, saveStorageCity } from "./cityStorage";

const newCity: CityProps = {id: "1", latitude: 123, longitude: 456, name: "Teresina"};

describe("Storage: CityStorage", () => {
    it("should be return null when don't have a city storage", async () => {
        // asyncStorage is a native module and storage returns need to be simulated.. 
        // ...as it is not possible to access the device's storage with an application that is not running
        const response = await getStorageCity(); 
        expect(response).toBeNull();
    });

    it("should be return city storage", async () => {
        await saveStorageCity(newCity);

        const response = await getStorageCity();
        expect(response).toEqual(newCity);
    });

    it("should be remove city storage", async () => {
        await saveStorageCity(newCity);
        await removeStorageCity();
        const response = await getStorageCity();
        expect(response).toBeNull();
    });
});