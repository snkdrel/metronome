import React from 'react';

function MetronomeContainer() {
    return(
        <>
            <BpmDisplay />
            <BpmSlider />
            <BeatDisplay />
            <Player />
            <BeatModifier />
        </>
    );
}

export default MetronomeContainer;