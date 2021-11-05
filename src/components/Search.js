import React, {useState} from 'react'

const Search = (props) => {
    const [userSearch, setUserSearch] = useState('')
    const searchPressed = () => {
        props.handleClick(userSearch)
    }

    return (
        <div>
            <div className='row' >
                <div className='col-8' >
                    <input 
                    type='text' placeholder='Enter film name' 
                    className='form-control' 
                    value={userSearch} onChange={(e) => setUserSearch(e.target.value)}
                    />
                </div>
                <div className='col-4' >
                    <button className='btn btn-primary' onClick={() => searchPressed()} >
                        Search
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Search
