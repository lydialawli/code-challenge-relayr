import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Toggle from "react-toggle"
import { patchReading } from "../redux/actions/index"
import ReactTimeAgo from 'react-time-ago'
import JavascriptTimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
JavascriptTimeAgo.locale(en)

require("react-toggle/style.css")


const DisplayReading = (props) => {

    const dispatch = useDispatch()
    const toggleState = (readingName, stateValue) => dispatch(patchReading(readingName, stateValue), [])

    let date = new Date(props.reading.timestamp)

    return (
        <div className={`readingLayout ${props.type === 'titles' ? 'title' : 'readings'}`}>
            <h2>{props.reading.name}</h2>
            <h2>{props.reading.value}</h2>
            <h2>{props.reading.unit}</h2>
            <h2>{props.type === 'reading' ? <ReactTimeAgo date={date} /> : 'LAST UPDATED'}</h2>
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
        timestamp: 'LAST UPDATED',
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