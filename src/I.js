import React, {Component} from 'react'
import ReactModal from 'react-modal'
import Nav from './Nav'
import img from "./Ilinkcopy.png"
import portrait from "./165405016_726621478214443_2495301137080590212_n.jpg"

export default class I extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: false
        }
    }
    handleOpenModal = () => {
        this.setState({modalOpen:true})
    }
    handleCloseModal = () => {
        this.setState({modalOpen:false})
    }

    render () {
        return(
        <>
        <button type="button" className="appbutton"onClick={this.handleOpenModal}><img src={img} alt="I"width="120px" height="140px"></img></button>
        <ReactModal
            isOpen={this.state.modalOpen}
        >
        <button onClick={this.handleCloseModal}>Back</button>
        <h1>I am Chele. <br/>It's a pleasure to meet you.</h1>
        <p>Chele lives in sunny Bradenton, FL. She loves tarot, the beach, travel, karaoke, chocolate, cryptocurrency, and spending time with her friends, family, and two kitties.</p>
        <img src={portrait} alt="Chele Portrait" width='250px' height="250px"></img> 
        <p>Connect with me below:</p>
        <Nav></Nav>
        </ReactModal>
        </>
        )
}
}