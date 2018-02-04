import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import FotoForm from './fotoForm'
import FotoList from './fotoList'

const URL = 'http://localhost:3003/api/fotos'

export default class Foto extends Component {

    constructor(props){
        super(props)
        this.state = {description: '', list: []}
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)

        this.refresh()
    }

    refresh(){
        axios.get(`${URL}?sort=-createdAt`).then(resp => this.setState({...this.state, description: '', list: resp.data}))
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd() {
            const description = this.state.description
            axios.post(URL, {description})
                .then(resp => this.refresh())
    }

    render(){
        return (
            <div>
                <PageHeader name='Fotos' small='Cadastro'></PageHeader>
                <FotoForm description={this.state.description} 
                handleChange={this.handleChange}
                handleAdd={this.handleAdd}/>
                <FotoList list={this.state.list} />
            </div>
        )
    }

}