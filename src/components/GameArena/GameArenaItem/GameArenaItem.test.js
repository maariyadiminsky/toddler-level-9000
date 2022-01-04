import { render } from '../../../tests/utils';

import { gameArenaData } from '../../../pages/GameArena/data';
import GameArenaItem, { customDivClassTry, customImgClassTry } from './';

describe('GameArenaItem', () => {
    it('renders component', () => {
        const { id, imageUrl, altText, customDivClass, customImgClass, link } = gameArenaData[0];

        const { container, getByRole } = render(
            <GameArenaItem 
                key={id}
                imageUrl={imageUrl}
                altText={altText}
                customDivClass={customDivClass}
                customImgClass={customImgClass}
                link={link}
            />
        );

        // const imageAltText = getByAltText(altText);
        const wrapperDiv = container.firstChild;
        const linkEl = getByRole('link');
        const image = getByRole('img');
        
        expect(wrapperDiv).toBeInTheDocument();
        expect(wrapperDiv).toHaveClass(customDivClassTry(customDivClass));
        expect(linkEl).toBeInTheDocument();
        expect(linkEl).toHaveAttribute('href', link);
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', imageUrl);
        expect(image).toHaveAttribute('alt', altText);
        expect(image).toHaveClass(customImgClassTry(customImgClass));
    });
});
