import { useState } from "react";

export function About({ heading, name, learning }) {

    const [showLearning, setShowLearning] = useState(false)
    return(
        <div>
            <h1>{heading}</h1>
            <h2>{name}</h2>
            <button onClick={() => setShowLearning((prev) => !prev)}>Know {showLearning ? "Less" : "More"}</button>
            {
                showLearning && <p>{learning}</p>
            }
        </div>
    )
}
