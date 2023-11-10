import * as ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import AppClass from "./app/AppClass";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <AppClass />
    </StrictMode>,
);
