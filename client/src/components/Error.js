import React from 'react';
import {Link} from 'react-router-dom';

const Error = (props) => {
    return(
        <div>
            <p>Error</p>
            <Link to = {"/new"}>Create an Author</Link>
        </div>
    )
}

export default Error; 

