import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Readings = () => {
    const data = useSelector((state) => state.data)
    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log(data.data)
    // })

    return (
        <div >
            {data.map((d) => (
                <h2 key={d.name}>{d.name}</h2>
            ))}
        </div>
    )
}

export default Readings