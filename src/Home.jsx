import React, { useEffect } from 'react';
import * as Tone from 'tone'


const playsound = () => {
    const synth = new Tone.PolySynth().toDestination();
    // set the attributes across all the voices using 'set'
    synth.set({ detune: -1200 });
    // play a chord
    synth.triggerAttackRelease(["C5", "E5", "A5"], 1);
}

const Home = () => {
    return <>
        <div>Sound Application</div>
        <button onClick={playsound}>Press for sound</button>
    </>
}

export default Home
