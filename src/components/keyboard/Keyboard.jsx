import React, { useEffect } from "react";
import * as Tone from "tone";
import "./keyboard.css";

export default class Keyboard extends React.Component {
    constructor() {
        super();
    }

    keyEffect = (note) => {
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
            let noteColour = [];

            // if incoming tone string contains "Sharp", set noteColour to black, otherwise white
            tone.includes("Sharp")
                ? (noteColour = ["#050505", "#1c1c1c"])
                : (noteColour = ["#f2f1e9", "#696863"]);

            document.getElementById(
                tone + "-Key"
            ).style.backgroundImage = `linear-gradient(to bottom, ${noteColour[0]}, ${noteColour[0]}, ${noteColour[0]},${noteColour[1]})`;
            // change key to grey
            //         document.getElementById(tone + "-Key").style.backgroundColor = "grey";

            // wait 500 miliseconds then change to original colour
            setTimeout(() => {
                document.getElementById(
                    tone + "-Key"
                ).style.backgroundImage = `linear-gradient(to bottom, ${noteColour[0]}, ${noteColour[0]}`;
            }, 500);
        }
    };

    playsound = (event) => {
        let synth;

        if (
            Array.from(document.forms.polymono.tone_type).find((r) => r.checked)
                .value === "POLY"
        ) {
            synth = new Tone.PolySynth().toDestination();
        } else {
            synth = new Tone.MonoSynth().toDestination();
        }

        const octave = document.getElementById("Octave-Selector").value;

        // set the attributes across all the voices using 'set'
        synth.set({ detune: -1200 });

        // if triggered by keypress
        if (event.key) {
            // play note depending on key press
            switch (event.key.toUpperCase()) {
                case "A":
                    synth.triggerAttackRelease(["C" + octave], 1.0);
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
            this.keyEffect(event.key.toUpperCase());
        } else {
            synth.triggerAttackRelease(
                ["C" + octave, "E" + octave, "A" + octave],
                1
            );
        }
    };

    render() {
        return (
            <>
                <div
                    id="Keyboard-Outer"
                    onClick={() => {
                        document.getElementById("Keyboard-Input").focus();
                    }}
                    style={{
                        zIndex: "0",
                        width: "750px",
                        height: "300px",
                        display: "flex",
                        margin: "100px 50px",
                        backgroundColor: "black",
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
                            this.playsound(event);
                        }}
                    />

                    <div
                        id="keyboard"
                        style={{
                            backgroundColor: "grey",

                            border: "2px solid darkslategray",
                            borderWidth: "2px 2px 0px 2px",
                            width: "500px",
                            height: "180px",
                            alignSelf: "flex-end",
                            marginLeft: "100px",

                            //         display: "inline-block",
                            //         margin: "320px 0px 0px 50px",
                        }}
                    >
                        <div
                            id="Major-keys"
                            style={{
                                //             backgroundColor: "gray",
                                width: "378px",
                                //             zIndex: "1",
                                //             zIndex: 9,
                                border: "solid black",
                                borderWidth: "2px 2px 0px",
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
                                    borderRadius: "0px 0px 7px 7px",
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
                                    borderRadius: "0px 0px 7px 7px",
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
                                    borderRadius: "0px 0px 7px 7px",
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
                                    borderRadius: "0px 0px 7px 7px",
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
                                    borderRadius: "0px 0px 7px 7px",
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
                                    borderRadius: "0px 0px 7px 7px",
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
                                    borderRadius: "0px 0px 7px 7px",
                                }}
                            >
                                {"J"}
                            </div>
                        </div>
                        <div
                            id="Sharp-Keys"
                            style={{
                                paddingTop: "2px",

                                display: "flex",
                                flexDirection: "row",
                                width: "378px",
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
                                    backgroundColor: "#050505",
                                    borderRadius: "3px",
                                    marginLeft: "35px",
                                    borderRadius: "0px 0px 5px 5px",
                                    boxShadow: "-5px 3px 15px  black",
                                }}
                            >
                                <div
                                    style={{
                                        padding: "3px",
                                        height: "90%",
                                        border: "solid grey",
                                        borderWidth: "0px 0px 1px 2px",
                                        borderRadius: "0px 0px 0px 7px",
                                    }}
                                >
                                    {"W"}
                                </div>
                            </div>
                            <div
                                id="D-Sharp-Key"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    color: "white",
                                    width: "35px",
                                    height: "150px",
                                    backgroundColor: "#050505",
                                    borderRadius: "3px",
                                    marginLeft: "20px",
                                    borderRadius: "0px 0px 5px 5px",
                                    boxShadow: "-5px 3px 15px  black",
                                }}
                            >
                                <div
                                    style={{
                                        padding: "3px 5px",
                                        height: "90%",
                                        border: "solid grey",
                                        borderWidth: "0px 0px 1px 2px",
                                        borderRadius: "0px 0px 0px 7px",
                                    }}
                                >
                                    {"E"}
                                </div>
                            </div>
                            <div
                                id="F-Sharp-Key"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    color: "white",
                                    width: "35px",
                                    height: "150px",
                                    backgroundColor: "#050505",
                                    borderRadius: "3px",
                                    marginLeft: "70px",
                                    borderRadius: "0px 0px 5px 5px",
                                    boxShadow: "-5px 3px 15px  black",
                                }}
                            >
                                <div
                                    style={{
                                        padding: "3px 5px",
                                        height: "90%",
                                        border: "solid grey",
                                        borderWidth: "0px 0px 1px 2px",
                                        borderRadius: "0px 0px 0px 7px",
                                    }}
                                >
                                    {"T"}
                                </div>
                            </div>
                            <div
                                id="G-Sharp-Key"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    color: "white",
                                    width: "35px",
                                    height: "150px",
                                    backgroundColor: "#050505",
                                    borderRadius: "3px",
                                    marginLeft: "20px",
                                    borderRadius: "0px 0px 5px 5px",
                                    boxShadow: "-5px 3px 15px  black",
                                }}
                            >
                                <div
                                    style={{
                                        padding: "3px 5px",
                                        height: "90%",
                                        border: "solid grey",
                                        borderWidth: "0px 0px 1px 2px",
                                        borderRadius: "0px 0px 0px 7px",
                                    }}
                                >
                                    {" "}
                                    {"Y"}
                                </div>
                            </div>
                            <div
                                id="A-Sharp-Key"
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    color: "white",
                                    width: "35px",
                                    height: "150px",
                                    backgroundColor: "#050505",
                                    borderRadius: "3px",
                                    marginLeft: "20px",
                                    borderRadius: "0px 0px 5px 5px",
                                    boxShadow: "-5px 3px 15px  black",
                                }}
                            >
                                {" "}
                                <div
                                    style={{
                                        padding: "3px 5px",
                                        height: "90%",
                                        border: "solid grey",
                                        borderWidth: "0px 0px 1px 2px",
                                        borderRadius: "0px 0px 0px 7px",
                                    }}
                                >
                                    {"U"}
                                </div>
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
                                backgroundColor: "#1c1c1c",
                            }}
                        >
                            <form name="polymono">
                                <input
                                    type="radio"
                                    id="MONO_RADIO"
                                    name="tone_type"
                                    value="MONO"
                                ></input>
                                <label for="MONO_RADIO">Mono</label>
                                <input
                                    checked
                                    type="radio"
                                    id="POLY_RADIO"
                                    name="tone_type"
                                    value="POLY"
                                />
                                <label for="POLY_RADIO">Poly</label>
                            </form>
                            <div
                                id="Octave-Selector-Outer"
                                style={{
                                    margin: "auto auto 10px",
                                    border: "1px solid grey",
                                    borderRadius: "5px",
                                    width: "40px",
                                    padding: "5px",
                                    backgroundColor: "black",
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
    }
}
