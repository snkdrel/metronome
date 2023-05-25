import React from 'react';

function BeatDisplay({beats, currentBeat}) {
    return (
        <div className='beat-display'>
            {
                [...Array(beats)].map((e, index) => {
                    if(index + 1 === currentBeat){
                        if(currentBeat === 1) {
                            return <div className='beat-square current-beat first-beat' key={index}></div>;
                        } else {
                            return <div className='beat-square current-beat' key={index}></div>;
                        }
                    } else {
                        return <div className='beat-square' key={index}></div>;
                    }
                })
            }
        </div>
    );
}

export default BeatDisplay;