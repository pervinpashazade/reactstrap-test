import React from 'react'
import { Spinner } from 'reactstrap'

//style
import './style.css'

function Loader() {
    return (
        <div className="loader-wrap">
            <Spinner color="primary" size="xl" />
        </div>
    )
}

export default Loader