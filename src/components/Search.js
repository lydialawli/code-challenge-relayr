import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
    const data = useSelector(state => state.data)



    // filterBeers = (event) => {
    //     let text = event.target.value
    //     let filtered = this.state.beers.filter(e =>
    //         e.name.toUpperCase().includes(text.toUpperCase()))

    //     this.setState({ filtered })
    // }

    return (
        <div >
            <input className='searchBar' type='text' placeholder={'Search...'} />
        </div>
    )
}

export default Counter