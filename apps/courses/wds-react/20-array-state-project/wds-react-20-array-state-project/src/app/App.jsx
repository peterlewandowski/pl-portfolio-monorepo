import { useState } from "react";

const INITIAL_VALUE = ["A", "B", "C"];

function App() {
    const [array, setArray] = useState(INITIAL_VALUE);
    const [value, setValue] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [indexValue, setIndexValue] = useState();

    function removeFirstElement() {
        setArray((currentArray) => {
            return currentArray.slice(1);
        });
    }

    function removeSpecificLetter(letter) {
        setArray((currentArray) => {
            return currentArray.filter((element) => element !== letter);
        });
    }

    function addLetterToStart(letter) {
        setArray((currentArray) => {
            return [letter, ...currentArray];
        });
    }

    function addLetterToEnd(letter) {
        setArray((currentArray) => {
            return [...currentArray, letter];
        });
    }

    function clear() {
        setArray([]);
    }

    function reset() {
        setArray(INITIAL_VALUE);
    }

    function updateAToH() {
        setArray((currentArray) => {
            return currentArray.map((element) => {
                if (element === "A" || element === "a") return "H";
                return element;
            });
        });
    }

    function addLetterAtIndex(letter, index) {
        setArray((currentArray) => {
            return [...currentArray.slice(0, index), letter, ...currentArray.slice(index)];
        });
    }

    return (
        <div>
            <button onClick={removeFirstElement}>Remove First Element</button>
            <br />
            <br />
            <button onClick={() => removeSpecificLetter("B")}>Remove All B's</button>
            <br />
            <br />
            <button onClick={() => addLetterToStart("B")}>Add To Start</button>
            <br />
            <br />
            <button onClick={() => addLetterToEnd("Z")}>Add To End</button>
            <br />
            <br />
            <button onClick={clear}>Clear</button>
            <br />
            <br />
            <button onClick={reset}>Reset</button>
            <br />
            <br />
            <button onClick={updateAToH}>Update A To H</button>
            <br />
            <br />
            <input
                type="text"
                value={inputValue}
                placeholder="input something here"
                onChange={(e) => setInputValue(e.target.value)}
            />
            <input
                type="number"
                value={indexValue}
                placeholder="input the target index"
                onChange={(e) => setIndexValue(e.target.value)}
            />
            <button onClick={() => addLetterAtIndex(inputValue, indexValue)}>
                Add {inputValue} At {indexValue}
            </button>
            <br />
            {array.join(", ")}
            <br />
            <br />
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <br />
            <button onClick={() => addLetterToStart(value)}>Add Value To Array</button>
            <br />
            {array.join(", ")}
        </div>
    );
}

export default App;
