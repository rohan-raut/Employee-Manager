import React from 'react'

import loading from '../loading.gif'

const Spinner = () => {
    return (
    
        <div style={{margin: "18%"}}>
            <div className="d-flex justify-content-center align-items-center text-center">
            <img src={loading} alt="loading" />
            </div>
        </div>

        
    )

}

export default Spinner
