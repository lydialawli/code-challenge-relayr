import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from "../redux/actions/index"

const Search = () => {
    const dispatch = useDispatch()
    const filter = useSelector(state => state.filter)

    function changeFilter(e){
        dispatch(setFilter(e.target.value), [])
    }

    // filterBeers = (event) => {
    //     let text = event.target.value
    //     let filtered = this.state.beers.filter(e =>
    //         e.name.toUpperCase().includes(text.toUpperCase()))

    //     this.setState({ filtered })
    // }

    return (
        <div >
            <h3>{filter}</h3>
            <input onChange={changeFilter} className='searchBar' type='text' placeholder={'Search...'} />
        </div>
    )
}

export default Search