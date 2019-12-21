import React from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {
    const data = useSelector(state => state.data)

    return (
        <div className='counter'>
            <h3>Active: <span>{data.filter(d=> d.active).length}</span></h3>
            <h3>Inactive: <span>{data.filter(d=> !d.active).length}</span></h3>
        </div>
    )
}

export default Counter