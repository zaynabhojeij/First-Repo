import React from "react"
import Item from "./Item"
import xy from "./Api"
import Table from './Table';

class App extends React.Component {
    constructor(){
        super()
        this.state={
            tasks: []
        }
        
        this.handleDeleteRow= this.handleDeleteRow.bind(this)
    }

    handleDeleteRow() {

    }

    render() {
    const article= xy.map( final => <Item key={final.id} dee={final} />)
    // const article= xy.map( final => <Item key={final.id} id={final.id} title={final.title} />)
    return(
        <div>
        <h1>hello</h1>
        <Table />
        {article}

        </div>
    )

    }

    
}

export default App 