import React, {useEffect, useState} from 'react';

function Player({isPlaying, onClickStart, onClickStop}) {

    return (
        <>
            <button onClick={isPlaying ? onClickStop : onClickStart}>{isPlaying ? 'Stop' : 'Start'}</button>
        </>
    );
}

export default Player;