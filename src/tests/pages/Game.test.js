import { render, screen } from '../utils';
import Game from '../../pages/Game';
import { 
    CHOICE_GAME_PATH,
    SOCIAL_TYPE,
    GAME_NOT_AVAILABLE_TEMP_MESSAGE
} from '../../const';

describe('Game', () => {
    test('renders message if game not available', () => {
        const gamePathNotAvailable = CHOICE_GAME_PATH(SOCIAL_TYPE);
        render(<Game />, { route: gamePathNotAvailable });

        const gameNotAvailableTextElement = screen.getByText(GAME_NOT_AVAILABLE_TEMP_MESSAGE);

        expect(gameNotAvailableTextElement).toBeInTheDocument();
    });
});
