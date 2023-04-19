import {useState} from "react"

export function MyGadgets({ products }) {
    const [highlightBackgroundColor, setHighlightBackgroundColor] = useState(false)
    return(
        <div>
            {
                products.map(({id, name, description, price}) => 
                <li key={id} 
                style={{backgroundColor: (price > 50000 && highlightBackgroundColor) ? "lightgreen " : "white"}}
                >Name:{name} , Description: {description}, Price: {price}</li>)
            }
            <button onClick={()=> setHighlightBackgroundColor((highlightBackgroundColor) => !highlightBackgroundColor)}>Highlight Expensive Gadget</button>
        </div>
    )
}
