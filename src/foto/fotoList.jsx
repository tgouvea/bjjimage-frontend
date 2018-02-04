import React from 'react'
import IconButton from '../template/iconButton'

export default props => {
    
    const renderRows = () => {

        const list = props.list || []
        return list.map(foto => (
                <tr key={foto._id}>
                    <td>{foto.description}</td>    
                </tr>    
            )
            
        )

    }

    return (

        <table className='table'>

            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>        

        </table>

    )

}