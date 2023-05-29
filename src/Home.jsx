import React, { useEffect } from "react";
import * as Tone from "tone";

// const playsound = () => {
//     const synth = new Tone.PolySynth().toDestination();
//     // set the attributes across all the voices using 'set'
//     synth.set({ detune: -1200 });
//     // play a chord
//     synth.triggerAttackRelease(["C5", "E5", "A5"], 1);
// }

const playsound = (event) => {
    const synth = new Tone.PolySynth().toDestination();
    // set the attributes across all the voices using 'set'
    synth.set({ detune: -1200 });
    // play a chord
    console.log(event.key);
    switch (event.key.toUpperCase()) {
        case "C":
            synth.triggerAttackRelease(["C5"], 1);

            // code block
            break;
        case "E":
            synth.triggerAttackRelease(["E5"], 1);
            // code block
            break;
        case "A":
            synth.triggerAttackRelease(["A5"], 1);
            // code block
            break;
        default:
            synth.triggerAttackRelease(["C5", "E5", "A5"], 1);
    }
};
// document.onKeyDown(playsound());
const Home = () => {
    return (
        <>
            <div
                style={{
                    width: "100%",
                    height: "500px",
                    backgroundColor: "gray",
                }}
            >
                <input
                    autoFocus="true"
                    type="text"
                    onKeyDown={(event) => {
                        event.preventDefault();
                        playsound(event);
                    }}
                ></input>

                <div>Sound Application</div>
                <button onClick={playsound}>Press for sound</button>
            </div>
        </>
    );
};

export default Home;
