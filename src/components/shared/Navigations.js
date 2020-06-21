import React from 'react'
import {Link} from 'react-router-dom'

import {Paths} from '../../config/config'

function Navigation(props) {
    return(
        <ul>
            {Paths.map((path, index) => {
                return (<p key={'path'+index}>
                <Link  to={path.l}>{path.t}</Link>
                </p>)
            })}
        </ul>
    )
}

export default Navigation