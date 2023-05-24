import React from 'react';

function Player({isPlaying, onClickStart, onClickStop}) {

    return (
        <>
            <button onClick={isPlaying ? onClickStop : onClickStart} className='start-button'>
                {isPlaying ? 'Stop' : 'Start'}
            </button>
        </>
    );
}

export default Player;