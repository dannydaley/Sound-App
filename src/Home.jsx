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
    // set up empty tone variable to switch from key input to note played
    let tone;

    // the switch..
    switch (note) {
        case "A":
            tone = "C";
            break;
        case "W":
            tone = "C-Sharp";
            break;
        case "S":
            tone = "D";
            break;
        case "E":
            tone = "D-Sharp";
            break;
        case "D":
            tone = "E";
            break;
        case "F":
            tone = "F";
            break;
        case "T":
            tone = "F-Sharp";
            break;
        case "G":
            tone = "G";
            break;
        case "Y":
            tone = "G-Sharp";
            break;
        case "H":
            tone = "A";
            break;
        case "U":
            tone = "A-Sharp";
            break;
        case "J":
            tone = "B";
            break;
        case "A":
            tone = "C";
            break;
        case "A":
            tone = "C";
            break;
    }
    // if a dom element with the tone as the ID exists, change the dom element colour
    if (
        document.getElementById(tone + "-Key") !== null &&
        document.getElementById(tone + "-Key") !== undefined
    ) {
        // make note of what the original coloue was..
        let noteColour = document.getElementById(tone + "-Key").style
            .backgroundColor;

        // change key to grey
        document.getElementById(tone + "-Key").style.backgroundColor = "grey";

        // wait 500 miliseconds then change to white
        setTimeout(() => {
            document.getElementById(tone + "-Key").style.backgroundColor =
                noteColour;
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
            case "A":
                synth.triggerAttackRelease(["C5"], 1);
                break;
            case "W":
                synth.triggerAttackRelease(["C#5"], 1);
                break;
            case "S":
                synth.triggerAttackRelease(["D5"], 1);
                break;
            case "E":
                synth.triggerAttackRelease(["D#5"], 1);
                break;
            case "D":
                synth.triggerAttackRelease(["E5"], 1);
                break;
            case "F":
                synth.triggerAttackRelease(["F5"], 1);
                break;
            case "T":
                synth.triggerAttackRelease(["F#5"], 1);
                break;
            case "G":
                synth.triggerAttackRelease(["G5"], 1);
                break;
            case "Y":
                synth.triggerAttackRelease(["G#5"], 1);
                break;
            case "H":
                synth.triggerAttackRelease(["A5"], 1);
                break;
            case "U":
                synth.triggerAttackRelease(["A#5"], 1);
                break;
            case "J":
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
                    style={{
                        border: "2px solid black",
                        width: "500px",
                        margin: "100px 100px",
                    }}
                >
                    <div
                        id="Major-keys"
                        style={{
                            width: "380px",
                            zIndex: "1",
                            zIndex: 9,
                            border: "2px solid black",
                            display: "flex",
                        }}
                    >
                        <div
                            id="C-Key"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                color: "black",
                                width: "50px",
                                height: "175px",
                                backgroundColor: "white",
                                border: "2px solid black",
                                borderRadius: "2px",
                            }}
                        >
                            {"A"}
                        </div>
                        <div
                            id="D-Key"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                color: "black",
                                width: "50px",
                                height: "175px",
                                backgroundColor: "white",
                                border: "2px solid black",
                                borderRadius: "2px",
                            }}
                        >
                            {"S"}
                        </div>
                        <div
                            id="E-Key"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                color: "black",
                                width: "50px",
                                height: "175px",
                                backgroundColor: "white",
                                border: "2px solid black",
                                borderRadius: "2px",
                            }}
                        >
                            {"D"}
                        </div>
                        <div
                            id="F-Key"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                color: "black",
                                width: "50px",
                                height: "175px",
                                backgroundColor: "white",
                                border: "2px solid black",
                                borderRadius: "2px",
                            }}
                        >
                            {"F"}
                        </div>
                        <div
                            id="G-Key"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                color: "black",
                                width: "50px",
                                height: "175px",
                                backgroundColor: "white",
                                border: "2px solid black",
                                borderRadius: "2px",
                            }}
                        >
                            {"G"}
                        </div>
                        <div
                            id="A-Key"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                color: "black",
                                width: "50px",
                                height: "175px",
                                backgroundColor: "white",
                                border: "2px solid black",
                                borderRadius: "2px",
                            }}
                        >
                            {"H"}
                        </div>
                        <div
                            id="B-Key"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                color: "black",
                                width: "50px",
                                height: "175px",
                                backgroundColor: "white",
                                border: "2px solid black",
                                borderRadius: "2px",
                            }}
                        >
                            {"J"}
                        </div>
                    </div>
                    <div
                        id="Sharp-Keys"
                        style={{
                            border: "2px solid black",
                            display: "flex",
                            flexDirection: "row",
                            width: "350px",
                            zIndex: "0",
                            zIndex: 3,
                            marginTop: "-185px",
                        }}
                    >
                        <div
                            id="C-Sharp-Key"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                color: "white",
                                width: "35px",
                                height: "150px",
                                backgroundColor: "black",
                                borderRadius: "3px",
                                marginLeft: "35px",
                            }}
                        >
                            {"W"}
                        </div>
                        <div
                            id="D-Sharp-Key"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                color: "white",
                                width: "35px",
                                height: "150px",
                                backgroundColor: "black",
                                borderRadius: "3px",
                                marginLeft: "20px",
                            }}
                        >
                            {"E"}
                        </div>
                        <div
                            id="F-Sharp-Key"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                color: "white",
                                width: "35px",
                                height: "150px",
                                backgroundColor: "black",
                                borderRadius: "3px",
                                marginLeft: "70px",
                            }}
                        >
                            {"T"}
                        </div>
                        <div
                            id="G-Sharp-Key"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                color: "white",
                                width: "35px",
                                height: "150px",
                                backgroundColor: "black",
                                borderRadius: "3px",
                                marginLeft: "20px",
                            }}
                        >
                            {"Y"}
                        </div>
                        <div
                            id="A-Sharp-Key"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                color: "white",
                                width: "35px",
                                height: "150px",
                                backgroundColor: "black",
                                borderRadius: "3px",
                                marginLeft: "20px",
                            }}
                        >
                            {"U"}
                        </div>
                    </div>
                    <div
                        style={{
                            width: "110px",
                            marginLeft: "auto",
                            marginTop: "-150px",
                            border: "2px solid black",
                            height: "175px",
                            alignSelf: "right",
                            display: "flex",
                            flexDirection: "column",
                            backgroundColor: "black",
                        }}
                    >
                        <input type="range"></input>
                        <input type="range"></input>
                        <input type="range"></input>
                        <input type="radio"></input>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
