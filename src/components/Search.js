import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
    const data = useSelector(state => state.data)

    return (
        <div >
            <input className='searchBar' type='text' placeholder={'Search...'} />
        </div>
    )
}

export default Counter