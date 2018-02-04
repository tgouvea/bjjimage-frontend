import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import FotoForm from './fotoForm'
import FotoList from './fotoList'

export default class Foto extends Component {

    constructor(props){
        super(props)
        this.state = {description: '', list: []}
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd() {
            console.log(this.state.description)
    }

    render(){
        return (
            <div>
                <PageHeader name='Fotos' small='Cadastro'></PageHeader>
                <FotoForm description={this.state.description} 
                handleChange={this.handleChange}
                handleAdd={this.handleAdd}/>
                <FotoList />
            </div>
        )
    }

}