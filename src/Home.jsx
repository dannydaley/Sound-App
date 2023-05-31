import React, { useEffect } from "react";
import * as Tone from "tone";
import Keyboard from "./components/keyboard/Keyboard";

export default class Home extends React.Component {
    constructor() {
        super();
    }

    playsound = () => {
        const synth = new Tone.PolySynth().toDestination();
        // set the attributes across all the voices using 'set'
        synth.set({ detune: -1200 });
        // play a chord
        synth.triggerAttackRelease(["C5", "E5", "A5"], 1);
    };

    render() {
        return (
            <>
                <div
                    style={{
                        width: "100%",
                        height: "500px",
                    }}
                >
                    <div>Sound Application</div>
                    <button onClick={this.playsound}>Press for sound</button>

                    <Keyboard />
                </div>
            </>
        );
    }
}
