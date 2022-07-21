import React from 'react';

const Emoji = props => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
        style={{width: '100px', height: '100px', paddingTop: '500p'}}
    >
        {props.symbol}
    </span>
);
export default Emoji;