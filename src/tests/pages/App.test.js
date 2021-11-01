import { render, screen } from "../utils";
import App from "../../pages/App";
import { gameArenaData } from "../../pages/GameArena/data";

describe("App", () => {
    test("renders App component", () => {
        render(<App />);

        // if navbar renders its safe to assume App component is rendered
        const parentsLinkInNavbar = screen.getByText(/Parents/i);

        expect(parentsLinkInNavbar).toBeInTheDocument();
    });

    test("renders games to choose on initial load", () => {
        render(<App />);

        // game arena should render game choices on initial load
        const gameTypeFood = screen.getByAltText(`${gameArenaData[0].altText}`);
        const gameTypeColors = screen.getByAltText(`${gameArenaData[1].altText}`);

        expect(gameTypeFood).toBeInTheDocument();
        expect(gameTypeColors).toBeInTheDocument();
    });
});
