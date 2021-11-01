import { render, screen } from "../utils";
import GameArena from "../../pages/GameArena/GameArena";
import { gameArenaData } from "../../pages/GameArena/data";

describe("GameArena", () => {
    test("renders GameArena component", () => {
        render(<GameArena />);

        // if games render its safe to assume GameArena component is rendered
        const gameTypeFood = screen.getByAltText(gameArenaData[0].altText);
        const gameTypeColors = screen.getByAltText(gameArenaData[1].altText);

        expect(gameTypeFood).toBeInTheDocument();
        expect(gameTypeColors).toBeInTheDocument();
    });
});
