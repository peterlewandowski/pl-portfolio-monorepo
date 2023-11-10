import { render } from "@testing-library/react";
import PrimeReactUi from "./PrimeReactUi";

describe("PrimeReactUi", () => {
    it("should render successfully", () => {
        const { baseElement } = render(<PrimeReactUi />);
        expect(baseElement).toBeTruthy();
    });
});
