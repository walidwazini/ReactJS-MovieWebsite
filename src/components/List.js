import React from 'react'

const List = (props) => {
    return (
        <div className='card p-3 my-3 ' >
            <div className='row' >
                <div className='col-4' >
                    <img 
                    src={props.movie.Poster}
                    className='img-fluid'
                    />
                </div>
                <div>
                    <h3>{props.movie.Title}</h3>
                    <p>{props.movie.Year}</p>
                </div>
            </div>
        </div>
    )
}

export default List
