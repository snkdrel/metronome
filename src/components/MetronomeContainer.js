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
    const [currentBeat, setCurrentBeat] = useState(1);

    // ---- Audio player --------
    async function playAudio(actualBpm, actualBeats) {
        const delayTime = 60 / actualBpm * 1000;
        let beat = 1;

        // setInterval waits delayTime seconds to run playClick for the first time, 
        // so we run it first to avoid waiting the initial click
        playClick(beat);
        setIdInterval(setInterval(() => {
            if(beat >= actualBeats) {
                beat = 1;
            } else {
                beat++;
            }
            playClick(beat);
            setCurrentBeat(beat);
        }, delayTime));
        setIsPlaying(true);
    }

    function playClick(beat) {
        console.log(beat);
        if(beat === 1) {
            weakClick.currentTime = 0;
            strongClick.currentTime = 0;
            strongClick.play();
        } else {
            strongClick.currentTime = 0;
            weakClick.currentTime = 0;
            weakClick.play();
        }
    }

    function stopAudio() {
        clearInterval(idInterval);
        setIsPlaying(false);
        setIdInterval(null);
        setCurrentBeat(1);
    }

    function updateClickInterval(newBpm, newBeats){
        if(isPlaying) {
            stopAudio();
            playAudio(newBpm, newBeats);
        }
    }

    // ---- bpm -----
    function increaseBpms() {
        if(bpms < 240) {
            setBpms(bpms + 1);
            updateClickInterval(bpms + 1, beats);
        }
    }

    function decreaseBpm() {
        if(bpms > 20) {
            setBpms(bpms - 1);
            updateClickInterval(bpms - 1, beats);
        }
    }

    function handleBpmsChange(newBpm) {
        setBpms(newBpm);
        updateClickInterval(newBpm, beats);
    }

    // --- beats ----
    function increaseBeats() {
        if(beats < 12) {
            setBeats(beats + 1);
            updateClickInterval(bpms, beats + 1);
        }
    }

    function decreaseBeats() {
        if(beats > 1) {
            setBeats(beats - 1);
            updateClickInterval(bpms, beats - 1);
        }
    }

    return(
        <>
            <BpmDisplay bpms={bpms} />
            <BpmSlider bpms={bpms} 
                onBpmsChange={handleBpmsChange} 
                onBpmsIncrement={increaseBpms} 
                onBpmsDecrement={decreaseBpm} />
            <BeatDisplay beats={beats} currentBeat={currentBeat}/>
            <Player isPlaying={isPlaying} 
                onClickStart={() => playAudio(bpms, beats)} 
                onClickStop={stopAudio}/>
            <BeatModifier beats={beats}
                onBeatsIncrement={increaseBeats} 
                onBeatsDecrement={decreaseBeats} />
        </>
    );
}

export default MetronomeContainer;