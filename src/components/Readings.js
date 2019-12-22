import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Toggle from "react-toggle"
import { patchReading } from "../redux/actions/index"
import { filterReadings } from "../redux/actions/index"
require("react-toggle/style.css")


const DisplayReading = (props) => {

    const dispatch = useDispatch()
    const toggleState = (readingName, stateValue) => dispatch(patchReading(readingName, stateValue), [])

    return (
        <div className="readingLayout">
            <h2>{props.reading.name}</h2>
            <h2>{props.reading.value}</h2>
            <h2>{props.reading.unit}</h2>
            <h2>{props.reading.timestamp}</h2>
            {props.type === 'reading' ?
                (<div className="status">
                    <Toggle
                        icons={false}
                        onChange={toggleState.bind(null, props.reading.name, !props.reading.active)}
                        checked={props.reading.active}
                    />
                </div>)

                :
                (<h2 className="status">{props.reading.active}</h2>)
            }

        </div>
    )
}



const Readings = () => {
    const data = useSelector(state => state.data)
    const filter = useSelector(state => state.filter)

    const getVisibleReadings = (data, filter) => {
        if (filter) {
            return data.filter(d =>
                d.name.toUpperCase().includes(filter.toUpperCase()))
        }
        else {
            return data
        }
    }

    const titles = {
        name: 'NAME',
        unit: 'UNIT',
        value: 'VALUE',
        timestamp: 'TIMESTAMP',
        active: 'STATUS'
    }

    return (
        <div className='readingsContainer'>
            <DisplayReading type={'titles'} reading={titles}></DisplayReading>
            {getVisibleReadings(data, filter).map((d) => (
                <DisplayReading type={'reading'} key={d.name} reading={d} ></DisplayReading>
            ))}
        </div>
    )
}

export default Readings