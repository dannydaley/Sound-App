import React, { useEffect } from "react";
import * as Tone from "tone";

// const playsound = () => {
//     const synth = new Tone.PolySynth().toDestination();
//     // set the attributes across all the voices using 'set'
//     synth.set({ detune: -1200 });
//     // play a chord
//     synth.triggerAttackRelease(["C5", "E5", "A5"], 1);
// }

// function that changes the background colour of the keys (divs) to represent a press
const keyEffect = (note) => {
    if (
        document.getElementById(note + "-Key") !== null &&
        document.getElementById(note + "-Key") !== undefined
    ) {
        // change key to grey
        document.getElementById(note + "-Key").style.backgroundColor = "grey";

        // wait 500 miliseconds then change to white
        setTimeout(() => {
            document.getElementById(note + "-Key").style.backgroundColor =
                "white";
        }, 500);
    }
};

const playsound = (event) => {
    const synth = new Tone.PolySynth().toDestination();

    // set the attributes across all the voices using 'set'
    synth.set({ detune: -1200 });

    // console log (key for reference)
    console.log(event.key);

    // if triggered by keypress
    if (event.key) {
        // play note depending on key press
        switch (event.key.toUpperCase()) {
            case "C":
                synth.triggerAttackRelease(["C5"], 1);
                break;
            case "D":
                synth.triggerAttackRelease(["D5"], 1);
                break;
            case "E":
                synth.triggerAttackRelease(["E5"], 1);
                break;
            case "F":
                synth.triggerAttackRelease(["F5"], 1);
                break;
            case "G":
                synth.triggerAttackRelease(["G5"], 1);
                break;
            case "A":
                synth.triggerAttackRelease(["A5"], 1);
                break;
            case "B":
                synth.triggerAttackRelease(["B5"], 1);
                break;
            default:
                synth.triggerAttackRelease(["C5", "E5", "A5"], 1);
        }
        // change key colour
        keyEffect(event.key.toUpperCase());
    } else {
        synth.triggerAttackRelease(["C5", "E5", "A5"], 1);
    }
};

const Home = () => {
    return (
        <>
            <div
                style={{
                    width: "100%",
                    height: "500px",
                    // backgroundColor: "gray",
                }}
            >
                <input
                    autoFocus="true"
                    type="text"
                    onKeyDown={(event) => {
                        event.preventDefault();
                        playsound(event);
                    }}
                />
                <div>Sound Application</div>
                <button onClick={playsound}>Press for sound</button>

                <div
                    id="keyboard"
                    style={{ display: "flex", margin: "50px 100px" }}
                >
                    <div
                        id="C-Key"
                        style={{
                            width: "50px",
                            height: "175px",
                            backgroundColor: "white",
                            border: "2px solid black",
                            borderRadius: "2px",
                        }}
                    ></div>
                    <div
                        id="D-Key"
                        style={{
                            width: "50px",
                            height: "175px",
                            backgroundColor: "white",
                            border: "2px solid black",
                            borderRadius: "2px",
                        }}
                    ></div>
                    <div
                        id="E-Key"
                        style={{
                            width: "50px",
                            height: "175px",
                            backgroundColor: "white",
                            border: "2px solid black",
                            borderRadius: "2px",
                        }}
                    ></div>
                    <div
                        id="F-Key"
                        style={{
                            width: "50px",
                            height: "175px",
                            backgroundColor: "white",
                            border: "2px solid black",
                            borderRadius: "2px",
                        }}
                    ></div>
                    <div
                        id="G-Key"
                        style={{
                            width: "50px",
                            height: "175px",
                            backgroundColor: "white",
                            border: "2px solid black",
                            borderRadius: "2px",
                        }}
                    ></div>
                    <div
                        id="A-Key"
                        style={{
                            width: "50px",
                            height: "175px",
                            backgroundColor: "white",
                            border: "2px solid black",
                            borderRadius: "2px",
                        }}
                    ></div>
                    <div
                        id="B-Key"
                        style={{
                            width: "50px",
                            height: "175px",
                            backgroundColor: "white",
                            border: "2px solid black",
                            borderRadius: "2px",
                        }}
                    ></div>
                </div>
            </div>
        </>
    );
};

export default Home;
