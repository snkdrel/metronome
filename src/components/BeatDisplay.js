import React from 'react';

function BeatDisplay({beats}) {
    return (
        <div className='beat-display'>
            {[...Array(beats)].map(() => <div className='beat-square'></div>)}
        </div>
    );
}

export default BeatDisplay;