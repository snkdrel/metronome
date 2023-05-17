import React from 'react';

function BpmSlider({ bpms, onBpmsChange, onBpmsIncrement, onBpmsDecrement }) {
    return (
        <div>
            <button onClick={onBpmsDecrement}>-</button>
            <input type='range' 
                value={bpms} 
                min="20" max="240" 
                onChange={(e) => onBpmsChange(Number(e.target.value))} />
            <button onClick={onBpmsIncrement}>+</button>
        </div>
    );
}

export default BpmSlider;