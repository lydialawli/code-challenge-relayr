import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Switch from "react-switch"
import Toggle from "react-toggle"
import { patchReading } from "../redux/actions/index"

const DisplayReading = (props) => {

    const dispatch = useDispatch()
    const toggleState = (readingName, stateValue) => dispatch(patchReading(readingName, stateValue), [])

    return (
        <div className="displayReading">
            <h2>{props.reading.name}</h2>
            <h2>{props.reading.value}</h2>
            <h2>{props.reading.unit}</h2>
            <h2>{props.reading.timestamp}</h2>
            {props.type === 'reading' ?
                (<Toggle onChange={toggleState.bind(null, props.reading.name, !props.reading.active)} checked={props.reading.active}/>)
                // (<div className="status">
                //     <Switch onChange={toggleState.bind(null, props.reading.name, !props.reading.active)}
                //         checked={props.reading.active} />
                // </div>)
                :
                (<h2 className="status">{props.reading.active}</h2>)
            }

        </div>
    )
}

const Readings = () => {
    const data = useSelector(state => state.data)
    const error = useSelector(state => state.error)

    const titles = {
        name: 'NAME',
        unit: 'UNIT',
        value: 'VALUE',
        timestamp: 'TIMESTAMP',
        active: 'STATUS'
    }

    return (
        <div >
            <DisplayReading type={'titles'} reading={titles}></DisplayReading>
            {data.map((d) => (
                <DisplayReading type={'reading'} key={d.name} reading={d} ></DisplayReading>
            ))}
        </div>
    )
}

export default Readings