import { useState } from "react"

export function ColorPicker({ red, blue, green }) {
    const [userColor, setUserColor] = useState("")
    return(
        <div>
            <button onClick={() => setUserColor("red")}>Red</button>
            {
                userColor==="red" && <p>{red}</p>
            }
            <button onClick={()=> setUserColor("blue")}>Blue</button>
            {
                userColor === "blue" && <p>{blue}</p>
            }
            <button onClick={()=> setUserColor("green")}>Green</button>
            {
                userColor === "green" && <p>{green}</p>
            }
        </div>
    )
}
