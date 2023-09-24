import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    function handleClick() {
        setCounter((currentCount) => currentCount + 1);
    }

    return <div onClick={handleClick}>{counter}</div>;
};
export default Counter;
