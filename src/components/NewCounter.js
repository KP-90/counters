import { useEffect, useState } from "react"
import "./counter.css"

const NewCounter = (props) => {
    const [count, setCount] = useState(props.saveCount)

    useEffect(() => {
    
    }, [count])

    return(
        <div className="new-counter">
            <button className="button" onClick={() => {setCount(count + 1)}}>+1</button>
            <p className="count">{count}</p>
            <button className="button" onClick={() => {setCount(count - 1)}}>-1</button>
        </div>
    )
}

export default NewCounter