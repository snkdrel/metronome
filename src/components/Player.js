import React, {useState} from 'react';
import strongPulseAudioUrl from '../media/strong-pulse.ogg';
import weakPulseAudioUrl from '../media/weak-pulse.ogg';

function Player({bpms, beats}) {
    const [strongClick] = useState(new Audio(strongPulseAudioUrl));
    const [weakClick] = useState(new Audio(weakPulseAudioUrl));
    
    // function delay (ms) {
    //     return new Promise(resolve => {
    //         setTimeout(resolve, ms);
    //     });
    // }

    async function playAudio() {
        const delayTime = 60 / bpms * 1000;

        setInterval(() => {
            weakClick.load();
            weakClick.play();
        }, delayTime);
    }

    return (
        <>
            <button onClick={playAudio}>Start</button>
        </>
    );
}

export default Player;