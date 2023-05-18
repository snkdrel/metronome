import React from 'react';

function BeatDisplay({beats}) {
    return (
        <div className='beat-display'>
            {[...Array(beats)].map((e, index) => <div className='beat-square' key={index}></div>)}
        </div>
    );
}

export default BeatDisplay;