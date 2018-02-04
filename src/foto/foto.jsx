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
        this.handleRemove = this.handleRemove.bind(this)
        this.handleNotAvailableForSale = this.handleNotAvailableForSale.bind(this)
        this.handleAvailableForSale = this.handleAvailableForSale.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.refresh()
    }

    refresh(description = ''){
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`).then(resp => this.setState({...this.state, description, list: resp.data}))
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    handleSearch(){
        this.refresh(this.state.description)
    }

    handleClear(){
        this.refresh()
    }

    handleAdd() {
            const description = this.state.description
            axios.post(URL, {description})
                .then(resp => this.refresh())
    }

    
    handleRemove(foto) {
            axios.delete(`${URL}/${foto._id}`).then(resp => this.refresh(this.state.description))
    }

    handleNotAvailableForSale(foto){
        axios.put(`${URL}/${foto._id}`, {...foto, availableForSale: false}).then(resp => this.refresh(this.state.description))
    }


    handleAvailableForSale(foto){
        axios.put(`${URL}/${foto._id}`, {...foto, availableForSale: true}).then(resp => this.refresh(this.state.description))
    }

    render(){
        return (
            <div>
                <PageHeader name='Fotos' small='Cadastro'></PageHeader>
                <FotoForm description={this.state.description} 
                handleChange={this.handleChange}
                handleAdd={this.handleAdd}
                handleSearch={this.handleSearch}
                handleClear={this.handleClear}/>
                <FotoList list={this.state.list} 
                    handleRemove={this.handleRemove} 
                    handleNotAvailableForSale={this.handleNotAvailableForSale}
                    handleAvailableForSale={this.handleAvailableForSale}/>
            </div>
        )
    }

}