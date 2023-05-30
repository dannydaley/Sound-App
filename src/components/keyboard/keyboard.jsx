import React, { useEffect } from "react";
import * as Tone from "tone";
import "./keyboard.css";

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
        // set empty variable to receive note colour to switch back to
        let noteColour;

        // if incoming tone string contains "Sharp", set noteColour to black, otherwise white
        tone.includes("Sharp")
            ? (noteColour = "black")
            : (noteColour = "white");

        // change key to grey
        document.getElementById(tone + "-Key").style.backgroundColor = "grey";

        // wait 500 miliseconds then change to original colour
        setTimeout(() => {
            document.getElementById(tone + "-Key").style.backgroundColor =
                noteColour;
        }, 500);
    }
};

const playsound = (event) => {
    const synth = new Tone.PolySynth().toDestination();

    const octave = document.getElementById("Octave-Selector").value;

    // set the attributes across all the voices using 'set'
    synth.set({ detune: -1200 });

    // if triggered by keypress
    if (event.key) {
        // play note depending on key press
        switch (event.key.toUpperCase()) {
            case "A":
                synth.triggerAttackRelease(["C" + octave], 1);
                break;
            case "W":
                synth.triggerAttackRelease(["C#" + octave], 1);
                break;
            case "S":
                synth.triggerAttackRelease(["D" + octave], 1);
                break;
            case "E":
                synth.triggerAttackRelease(["D#" + octave], 1);
                break;
            case "D":
                synth.triggerAttackRelease(["E" + octave], 1);
                break;
            case "F":
                synth.triggerAttackRelease(["F" + octave], 1);
                break;
            case "T":
                synth.triggerAttackRelease(["F#" + octave], 1);
                break;
            case "G":
                synth.triggerAttackRelease(["G" + octave], 1);
                break;
            case "Y":
                synth.triggerAttackRelease(["G#" + octave], 1);
                break;
            case "H":
                synth.triggerAttackRelease(["A" + octave], 1);
                break;
            case "U":
                synth.triggerAttackRelease(["A#" + octave], 1);
                break;
            case "J":
                synth.triggerAttackRelease(["B" + octave], 1);
                break;
            case "ARROWDOWN":
                document.getElementById("Octave-Selector").value--;
                break;
            case "ARROWUP":
                document.getElementById("Octave-Selector").value++;
                break;
            default:
                return;
        }
        // change key colour
        keyEffect(event.key.toUpperCase());
    } else {
        synth.triggerAttackRelease(
            ["C" + octave, "E" + octave, "A" + octave],
            1
        );
    }
};

const Keyboard = () => {
    return (
        <>
            <div
                id="Keyboard-Outer"
                onClick={() => {
                    document.getElementById("Keyboard-Input").focus();
                }}
                style={{
                    width: "100%",
                    height: "500px",
                    margin: "100px 100px",
                }}
            >
                <input
                    style={{
                        zIndex: -1,
                        position: "absolute",
                        margin: "50px 150px",
                    }}
                    autoFocus="true"
                    type="text"
                    id="Keyboard-Input"
                    onKeyDown={(event) => {
                        event.preventDefault();
                        playsound(event);
                    }}
                />

                <div
                    id="keyboard"
                    style={{
                        zIndex: 1,
                        border: "2px solid black",
                        width: "500px",
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
                            zIndex: 10,
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

                        <div
                            id="Octave-Selector-Outer"
                            style={{
                                margin: "auto auto 0",
                                border: "1px solid grey",
                                borderRadius: "5px",
                                width: "40px",
                                padding: "5px",
                            }}
                        >
                            <input
                                style={{
                                    fontSize: "20px",
                                    width: "30px",
                                    opacity: 1,
                                }}
                                id="Octave-Selector"
                                type="number"
                                min="1"
                                max="8"
                                defaultValue={5}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Keyboard;
