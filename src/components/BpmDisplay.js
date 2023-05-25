import React from 'react';

function BpmDisplay({bpms}) {
    return (
        <div className='bpm-display'>
            <div className='current-bpm'>{bpms}</div>
            <div className='bpm-title'>BPM</div>
        </div>
    );
}

export default BpmDisplay;