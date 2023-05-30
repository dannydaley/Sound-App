import React, { useEffect } from "react";
import * as Tone from "tone";
import Keyboard from "./components/keyboard/keyboard";

const playsound = () => {
    const synth = new Tone.PolySynth().toDestination();
    // set the attributes across all the voices using 'set'
    synth.set({ detune: -1200 });
    // play a chord
    synth.triggerAttackRelease(["C5", "E5", "A5"], 1);
};

const Home = () => {
    return (
        <>
            <div
                style={{
                    width: "100%",
                    height: "500px",
                }}
            >
                <div>Sound Application</div>
                <button onClick={playsound}>Press for sound</button>

                <Keyboard />
            </div>
        </>
    );
};

export default Home;
