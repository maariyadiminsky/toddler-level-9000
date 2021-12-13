import { render, screen } from '../utils';
import NavBar from '../../components/NavBar/NavBar';
import {
    CHOICE_GAME_PATH,
    COLOR_TYPE
} from '../../const';

describe('NavBar', () => {
    test('renders NavBar component', () => {
        render(<NavBar />);

        const parentsLink = screen.getByText(/Parents/i);

        expect(parentsLink).toBeInTheDocument();
    });

    test('doesn\'t render StarsEarned if on a game page', () => {
        const gamePathExample = CHOICE_GAME_PATH(COLOR_TYPE);
        render(<NavBar />, { route: gamePathExample});

        const starsEarnedPartialText = screen.queryByText(/x /i);

        expect(starsEarnedPartialText).not.toBeInTheDocument();
    });
});