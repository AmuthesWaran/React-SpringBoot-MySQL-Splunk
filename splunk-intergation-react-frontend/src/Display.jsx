import React from 'react'

const Display = () => {

    const user = JSON.parse(localStorage.getItem('user'))
    return (
        <div>
            <h1>Hello {user.firstName}</h1>
        </div>
    )
}

export default Display