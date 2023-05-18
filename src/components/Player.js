import React from 'react';
import strongPulseAudio from '../media/strong-pulse.ogg';

function Player() {
    return (
        <>
            <button>Start</button>
            <audio controls src={strongPulseAudio}></audio>
        </>
    );
}

export default Player;