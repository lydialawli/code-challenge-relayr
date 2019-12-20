import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Switch from "react-switch"

const DisplayReading = (props) => {


    return (
        <div className="displayReading">
            <h2>{props.reading.name}</h2>
            <h2>{props.reading.value}</h2>
            <h2>{props.reading.unit}</h2>
            <h2>{props.reading.timestamp}</h2>
            {props.type === 'reading' ?
                (<div className="status"><Switch checked={props.reading.active} /></div>)
                :
                (<h2 className="status">{props.reading.active}</h2>)
            }


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
            <DisplayReading type={'title'} reading={titles}></DisplayReading>
            {data.map((d) => (
                <DisplayReading type={'reading'} key={d.name} reading={d} ></DisplayReading>
            ))}
        </div>
    )
}

export default Readings