import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Foto from '../foto/foto'
import Sobre from '../sobre/sobre'

export default props => (

    <Router history={hashHistory}>
        <Route path='/fotos' component={Foto} />
        <Route path='/sobre' component={Sobre} />
        <Redirect from='*' to='/fotos' />
    </Router>

)