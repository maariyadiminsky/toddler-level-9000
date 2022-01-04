import React, { Fragment, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';

import { useAudio } from '../../../hooks/audio';
import { useWhatIsThisGameReducer } from '../../../hooks/games/WhatIsThisGame/useWhatIsThisGameReducer';
import { useGetLocalStorageData } from '../../../hooks/localStorage';
import { useFetchWordData } from '../../../hooks/words';
import { RESPONSE_SUCCESS } from '../../../redux/actions/types';
import { getWordAmountToShowAtOneTime } from '../../../utils/words';
import { isArrayExistAndNotEmpty } from '../../../utils';
import {
    SET_AUDIO,
    SET_CURRENT_WORD_AUDIO,
} from '../types';

import { DEFAULT } from '../../../const';
import RandomImageGenerator from '../../Images/RandomImageGenerator';
import ChoiceItems from '../ChoiceItems/ChoiceItems';
import StarsToEarn from '../../Stars/StarsToEarn';
import StartGameButton from '../../StartGameButton/StartGameButton';
import GameCompleteModal from '../../GameCompleteModal';
import Loader from '../../Loader/Loader';

const fetchWordDataOptions = (status = DEFAULT.STRING) => ({
    isLocalStorageUpdatedWithData: (status === RESPONSE_SUCCESS)
});
const WhatIsThisGame = ({ wordType = DEFAULT.STRING }) => {
    // ===================================> data fetching

    const wordAmountToShowAtOneTime = useRef(getWordAmountToShowAtOneTime(wordType));

    // local reducer since this data doesn't need to be in global state
    // but too complicated for simple useState
    const [{ 
        gameStarted, gameEnded,
        roundsLeft, currentWord, wordsToChooseFrom,
        welcomeAudio, gameCompleteAudio
    }, dispatch, handleStartNewGame, handleCompleteRound] = useWhatIsThisGameReducer(wordType, wordAmountToShowAtOneTime);

    // fetch data from local storage
    const { status } = useGetLocalStorageData();

    // checks if data is in local storage, otherwise fetch from API
    const { loading, errors, wordData } = useFetchWordData(wordType, currentWord, fetchWordDataOptions(status));

    const hasWordAudio = useCallback(() => wordData && isArrayExistAndNotEmpty(wordData.audio), [wordData]);

    // ==========> audio 

    useAudio(hasWordAudio(), wordData?.audio, wordType, SET_CURRENT_WORD_AUDIO, dispatch);
    useAudio(!welcomeAudio, wordData?.audio, wordType, SET_AUDIO, dispatch);

    // ==========>  UI

    const randomImages = useRef([]);

    if (gameEnded) {
        return (
            <GameCompleteModal 
                starsEarned={wordAmountToShowAtOneTime.current} 
                gameCompleteAudio={gameCompleteAudio}
            />
        );
    } else if ((loading && roundsLeft) || randomImages.length === 0) {
        return <Loader />
    } else if (!gameStarted) {
        return <StartGameButton handleButtonClick={handleStartNewGame}/>
    } else if (errors) {
        return <div>{errors}</div>;
    }

    return (
        <Fragment>
            <StarsToEarn starsTotal={wordAmountToShowAtOneTime.current} emptyStars={roundsLeft + 1} />
                <RandomImageGenerator 
                    data={wordData} 
                    randomImagesRef={randomImages} 
                    wordType={wordType} 
                />
            <div className="container">
                <ChoiceItems 
                    data={wordData}
                    type={wordType}
                    wordsToChooseFrom={wordsToChooseFrom}
                    amountToShowAtOneTimeRef={wordAmountToShowAtOneTime}
                    handleCompleteRoundCallback={handleCompleteRound}
                />
            </div>
        </Fragment>
    );
}

WhatIsThisGame.propTypes = {
    wordType: PropTypes.string.isRequired,
};

export default WhatIsThisGame;