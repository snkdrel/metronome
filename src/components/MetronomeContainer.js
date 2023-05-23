import React, { useState } from 'react';
import BpmDisplay from './BpmDisplay';
import BpmSlider from './BpmSlider';
import BeatDisplay from './BeatDisplay';
import Player from './Player';
import BeatModifier from './BeatModifier';
import strongPulseAudioUrl from '../media/strong-pulse.ogg';
import weakPulseAudioUrl from '../media/weak-pulse.ogg';

function MetronomeContainer() {
    const [bpms, setBpms] = useState(60);
    const [beats, setBeats] = useState(4);
    const [strongClick] = useState(new Audio(strongPulseAudioUrl));
    const [weakClick] = useState(new Audio(weakPulseAudioUrl));
    const [isPlaying, setIsPlaying] = useState(false);
    const [idInterval, setIdInterval] = useState(null);

    // ---- Audio player --------
    async function playAudio() {
        const delayTime = 60 / bpms * 1000;

        // setInterval waits delayTime seconds to run playClick for the first time, 
        // so we run it first to avoid waiting the initial click
        playClick();
        setIdInterval(setInterval(playClick, delayTime));

        setIsPlaying(true);
    }

    function playClick() {
        weakClick.load();
        weakClick.play();
    }

    function stopAudio() {
        clearInterval(idInterval);
        setIsPlaying(false);
        setIdInterval(null);
    }

    // ---- bpm -----
    function increaseBpms() {
        if(bpms < 240) {
            setBpms(bpms + 1);
        }
    }

    function decreaseBpm() {
        if(bpms > 20) {
            setBpms(bpms - 1);
        }
    }

    function handleBpmsChange(newBpm) {
        setBpms(newBpm);
        if(isPlaying) {
            // change bpm dinamically
        }
    }

    // --- beats ----
    function increaseBeats() {
        if(beats < 12) {
            setBeats(beats + 1);
        }
    }

    function decreaseBeats() {
        if(beats > 1) {
            setBeats(beats - 1);
        }
    }

    return(
        <>
            <BpmDisplay bpms={bpms} />
            <BpmSlider bpms={bpms} 
                onBpmsChange={handleBpmsChange} 
                onBpmsIncrement={increaseBpms} 
                onBpmsDecrement={decreaseBpm} />
            <BeatDisplay beats={beats} />
            <Player isPlaying={isPlaying} 
                onClickStart={playAudio} 
                onClickStop={stopAudio}/>
            <BeatModifier beats={beats}
                onBeatsIncrement={increaseBeats} 
                onBeatsDecrement={decreaseBeats} />
        </>
    );
}

export default MetronomeContainer;