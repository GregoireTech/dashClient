import React from 'react';

const input = (props) => {
    switch (props.inputType){
        case ('input'): {
            return(
                <input id={props.name} value={props.value} placeholder={props.name} onChange={props.changed} required className="form-control"/>
            );
        }
        case ('select'): {
            const options = props.options.map(option => {
                return(<option key={option}>{option}</option>);
            })
            return( <select id={props.name} value={props.value} defaultValue={props.default} onChange={props.changed} className='select' required>
            {options} 
            </select>);
        }
        case ('textarea'): {
           return( <textarea id={props.name} value={props.value} onChange={props.changed} rows={props.rows} required className="form-control">
            {props.placeholder} 
            </textarea>);
        }
        default: return null;
    }
};

export default input;