import { useState } from 'react'
import classes from './FunctionChild.module.css'

export const FunctionChild = () => {
    const [count, setCount] = useState(0)

    const handleClickCount = () => {
        setCount((count) => count + 1)
    }

    return (
        <div>
            <h2>FunctionChild</h2>
            <div className={classes.count}>
                {count}
                <button onClick={handleClickCount}>ADD</button>
            </div>
        </div>
    )
}
