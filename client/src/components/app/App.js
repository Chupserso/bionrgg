import { RoutesBlock } from "../routes";
import { useState } from "react";

export const App = () => {
    const [isRegistered, setIsRegistered] = useState(false);

    return (
        <div className="app">
            <RoutesBlock isRegistered={isRegistered} setIsRegistered={setIsRegistered} />
        </div>
    );
}