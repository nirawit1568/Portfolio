import React from 'react';
import Widecard from '../components/Widecard';

const Education = () => {
    return(
        <div className="condiv">
            <h1 className="suntopic">MY EDUCATION</h1>
            <Widecard title="Information of Technology" where="KMITL" from="2019" to="Present"/>
            <Widecard title="Science-Math" where="Sriayudhya School" from="2017" to="2018"/>
        </div>
    );
}

export default Education;
