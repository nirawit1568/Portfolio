import React from 'react';

const Widecard = (props) => {
    return(
        <div className="widecard">
            <dic className="wide-con">
                <h3>{props.title}</h3>
                <h4 className="secondtext">{props.where}</h4>
                <h4 className="secondtext">{props.from} - {props.to}</h4>
            </dic>
        </div>
    );
}

export default Widecard;