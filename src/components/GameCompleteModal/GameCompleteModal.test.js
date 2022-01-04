// import { render } from '../../tests/utils'
// import Confetti from 'react-confetti';

// import GameCompleteModal from './';

// todo: fix canvas error
// describe('GameCompleteModal', () => {
//     let audioMock;
//     let wordsToShow;
//     let wrapper;

//     beforeAll(() => {
//         audioMock = {
//             play: window.HTMLMediaElement.prototype.play = jest.fn(() => {})
//         }
//         wordsToShow = 5;

//         wrapper = (children => (
//             <div>
//                 <Confetti 
//                     tweenDuration={1} 
//                     numberOfPieces={500}
//                     opacity={0.5}
//                 />
//                 {children}
//             </div>
//         ));
//     });

//     it('renders component', () => {
//         const { getByText } = render(wrapper(
//             <GameCompleteModal 
//                 starsEarned={wordsToShow} 
//                 gameCompleteAudio={audioMock}
//             />
//         ));

//         const starsEarnedText = getByText(`${wordsToShow} stars!`);

//         expect(starsEarnedText).toBeInTheDocument();
//     });

    // it('plays audio if more than 1 word existed in rounds', () => {
    //     render(
    //         <GameCompleteModal 
    //             starsEarned={wordsToShow} 
    //             gameCompleteAudio={audioMock}
    //         />
    //     );

    //     expect(audioMock.play).toHaveBeenCalledTimes(2);
    // });

    // it('doesn\'t play audio if no words existed in rounds', () => {
    //     wordsToShow = 0;

    //     render(
    //         <GameCompleteModal 
    //             starsEarned={wordsToShow} 
    //             gameCompleteAudio={audioMock}
    //         />
    //     );

    //     expect(audioMock.play).toHaveBeenCalledTimes(0);
    // });
});