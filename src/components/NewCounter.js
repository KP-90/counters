import { useEffect, useState } from "react"
import "./counter.css"

const NewCounter = (props) => {
    const [count, setCount] = useState(props.saveCount)

    useEffect(() => {
    
    }, [count])

    // Handles adding/subtracting and saving the number for re-renders
    const handleclicky = (e) => {
        let temp = props.saves
        if(e.target.value === "plus") {
            setCount(count + 1)
            temp[props.data] += 1
            props.setSaves(temp)
        }
        else {
            setCount(count - 1)
            temp[props.data] -= 1
            props.setSaves(temp)
        }
    }

    return(
        <div className="new-counter">
            <button className="button" onClick={handleclicky} value="plus">+1</button>
            <p className="count">{count}</p>
            <button className="button" onClick={handleclicky} value="minus">-1</button>
        </div>
    )
}

export default NewCounter