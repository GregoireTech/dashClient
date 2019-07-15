import React from 'react';
import './Embed.css';

const Embed = (props) => {
    console.log(props.targetUrl);
    return <embed src={props.targetUrl}/>
}

export default Embed;
