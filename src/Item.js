import React from 'react'

function Item(props){
    return(
        <div>
            <tr>
                <td> {props.dee.id} </td>
                <td> {props.dee.title} </td>
                <button onClick={i => this.handleDeleteRow(i)}>Delete</button>
            </tr>

        </div>

        //<div>
            //<p>id: {props.dee.id}</p>
            //<p>title: {props.dee.title}</p>
            //<br/>
         //</div>
    )
}

export default Item 