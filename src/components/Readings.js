import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Toggle from "react-toggle"
import "../styles/toggle.css"
import { patchReading } from "../redux/actions/index"
import ReactTimeAgo from 'react-time-ago'
import JavascriptTimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
JavascriptTimeAgo.locale(en)


const DisplayReading = (props) => {

    const dispatch = useDispatch()
    const toggleState = (readingName, stateValue) => dispatch(patchReading(readingName, stateValue), [])

    function getName(name) {
        const words = name.split("_")

        if (words.length === 2)
            return words[0].slice(0, 3).concat('_', words[1])
        if (words.length === 3)
            return words[0].slice(0, 3).concat('_', words[1], '_', words[2].slice())
        else {
            return name
        }
    }


    let date = new Date(props.reading.timestamp)

    return (
        <div className='readingLayout readings'>
            <h2 className="smallDisplayNone">{props.reading.name}</h2>
            <h2 className="bigDisplayNone">{getName(props.reading.name)}</h2>
            <h2>{props.reading.value.toFixed(2)}</h2>
            <h2 className="smallDisplayNone">{props.reading.unit}</h2>
            <h2 className="smallDisplayNone"><ReactTimeAgo date={date} /></h2>
            <div className="status">
                <Toggle
                    icons={false}
                    onChange={toggleState.bind(null, props.reading.name, !props.reading.active)}
                    checked={props.reading.active}
                />
            </div>
        </div>
    )
}


const DisplayTitle = () => {
    return (
        <div className='readingLayout title'>
            <h2>NAME</h2>
            <h2>VALUE</h2>
            <h2 className="smallDisplayNone">UNIT</h2>
            <h2 className="smallDisplayNone">LAST UPDATED</h2>
            <h2 >STATUS</h2>
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

    return (
        <div className='readingsContainer'>
            <DisplayTitle />
            {getVisibleReadings(data, filter).map((d) => (
                <DisplayReading type={'reading'} key={d.name} reading={d} ></DisplayReading>
            ))}
            {/* <h2 id="bigDisplayNone"><ReactTimeAgo date={new Date(data[0].timestamp)} /></h2> */}
        </div>
    )
}

export default Readings