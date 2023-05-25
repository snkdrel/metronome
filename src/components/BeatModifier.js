import React from 'react';

function BeatModifier({beats, onBeatsDecrement, onBeatsIncrement}) {
    return (
        <div className='beat-modifier'>
            <div>Beats: </div>
            <button onClick={onBeatsDecrement}>-</button>
            <div className='number-of-current-beats'>{beats}</div>
            <button onClick={onBeatsIncrement}>+</button>
        </div>
    );
}

export default BeatModifier;