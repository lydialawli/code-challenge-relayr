import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from "../redux/actions/index"

const Search = () => {
    const dispatch = useDispatch()
    const filter = useSelector(state => state.filter)

    function changeFilter(e){
        dispatch(setFilter(e.target.value), [])
    }

    return (
        <div >
            <input onChange={changeFilter} className='searchBar' type='text' placeholder={'Search...'} />
        </div>
    )
}

export default Search