import React from 'react'
import props from './../main/app';
import If from './if'

export default props => (

    <If test={!props.hide}>
        <button className={'btn btn-' + props.style} onClick={props.onClick}>
            <i className={'fa fa-' + props.icon} title={props.title}></i>
        </button>
    </If>    
)