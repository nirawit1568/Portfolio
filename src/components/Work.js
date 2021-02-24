import React from "react";

function Work (props) {
    return(
        <a href={props.link}>
            <div className="work">
                <h4>{props.name}</h4>
                <p>{props.description}</p>
            </div> 
        </a>
        
    );
}

export default Work;