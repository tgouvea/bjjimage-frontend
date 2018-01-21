import React, {Component} from 'react'
import PageHeader from '../template/pageHeader'
import FotoForm from './fotoForm'
import FotoList from './fotoList'

export default class Foto extends Component {

    render(){
        return (
            <div>
                <PageHeader name='Fotos' small='Cadastro'></PageHeader>
                <FotoForm />
                <FotoList />
            </div>
        )
    }

}