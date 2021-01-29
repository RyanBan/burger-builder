import React from 'react'
import style from './Modal.module.css'

const modal = (props) =>
{
    return (
        <div className="Modal">
            {props.children}
        </div>
    )
};

export default modal