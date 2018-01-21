import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import Foto from '../foto/foto'
import Sobre from '../sobre/sobre'
import Menu from '../template/menu'

export default props => (
    <div className='container'>
        <Menu />
        <Foto />
        <Sobre />
    </div>    
)