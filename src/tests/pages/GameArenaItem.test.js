import { render, screen } from "../utils";
import GameArenaItem from "../../pages//GameArena/GameArenaItem";
import { gameArenaData } from "../../pages/GameArena/data";

describe("GameArenaItem", () => {
    test("renders GameArenaItem component", () => {
        const gameArenaSampleItem = gameArenaData[0];

        render(
            <GameArenaItem 
                key={gameArenaSampleItem.id}
                imageUrl={gameArenaSampleItem.imageUrl}
                altText={gameArenaSampleItem.altText}
                customDivClass={gameArenaSampleItem.customDivClass}
                customImgClass={gameArenaSampleItem.customImgClass}
                link={gameArenaSampleItem.link}
            />
        );

        // if image alt text for passed data exists it safe to assume GameArenaItem component is rendered
        const imageAltText = screen.getByAltText(`${gameArenaSampleItem.altText}`);

        expect(imageAltText).toBeInTheDocument();
    });
});
