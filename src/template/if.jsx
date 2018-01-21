import React from 'react'
import props from './../main/routes';

export default props => {
    if(props.test){
        return props.children
    }else{
        return false
    }
}