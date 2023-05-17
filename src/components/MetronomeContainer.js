import React, { useState } from 'react';
import BpmDisplay from './BpmDisplay';
import BpmSlider from './BpmSlider';
import BeatDisplay from './BeatDisplay';
import Player from './Player';
import BeatModifier from './BeatModifier';

function MetronomeContainer() {
    const [bpms, setBpms] = useState(60);
    const [beats, setBeats] = useState(4);

    function increaseBpms(){
        if(bpms < 240) {
            setBpms(bpms + 1);
        }
    }

    function decreaseBpm(){
        if(bpms > 20) {
            setBpms(bpms - 1);
        }
    }

    return(
        <>
            <BpmDisplay bpms={bpms} />
            <BpmSlider bpms={bpms} 
                onBpmsChange={setBpms} 
                onBpmsIncrement={increaseBpms} 
                onBpmsDecrement={decreaseBpm} />
            <BeatDisplay beats={beats} />
            <Player />
            <BeatModifier />
        </>
    );
}

export default MetronomeContainer;