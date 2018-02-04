import React from 'react'
import IconButton from '../template/iconButton'

export default props => {
    
    const renderRows = () => {

        const list = props.list || []
        return list.map(foto => (
                <tr key={foto._id}>
                    <td className={foto.availableForSale ? 'availableForSale': ''}>{foto.description}</td>    
                    <td>
                        <IconButton style='success' icon='check' title='Disponibilizar para venda' hide={foto.availableForSale} onClick={() => props.handleAvailableForSale(foto)}></IconButton>
                        <IconButton style='warning' icon='undo' title='Não disponibilizar para venda' hide={!foto.availableForSale} onClick={() => props.handleNotAvailableForSale(foto)}></IconButton>
                        <IconButton style='danger' icon='trash-o' onClick={() => props.handleRemove(foto)}></IconButton>
                    </td>  
                </tr>    
            )
            
        )

    }

    return (

        <table className='table'>

            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>        

        </table>

    )

}