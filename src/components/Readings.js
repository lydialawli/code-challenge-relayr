import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const DisplayReading = (props) => {
    return (
        <div className="displayReading">
            <h2>{props.reading.name}</h2>
            <h2>{props.reading.value}</h2>
            <h2>{props.reading.unit}</h2>
            <h2>{props.reading.timestamp}</h2>
            <h2>{props.reading.acive}</h2>
        </div>
    )
}

const Readings = () => {
    const data = useSelector((state) => state.data)
    const dispatch = useDispatch();

    const titles = {
        name: 'NAME',
        unit: 'UNIT',
        value: 'VALUE',
        timestamp: 'TIMESTAMP',
        active: 'STATUS'
    }
    // useEffect(() => {
    //     console.log(data.data)
    // })

    return (
        <div >
            <DisplayReading reading={titles}></DisplayReading>
            {data.map((d) => (
                <DisplayReading key={d.name} reading={d} ></DisplayReading>
            ))}
        </div>
    )
}

export default Readings