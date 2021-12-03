import React, {Component} from 'react'
import ReactModal from 'react-modal'
import img from './Cyganka.png'
import img2 from './Gcopy.png'

export default class G extends Component {
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
        <button className="appbutton"onClick={this.handleOpenModal}><img src={img2} alt="I"width="120px" height="120px"></img></button>
        <ReactModal
            isOpen={this.state.modalOpen}
        >
        <button onClick={this.handleCloseModal}>Back</button>
        <h1>I am a Designer.</h1>
        <p>Chele is the designer of the footwear brand, Cyganka. She believes the feminine mystery is a special journey. <br/>Inspired by sharp, neutral, elegant elements of design, she hopes to connect women to their raw sexuality and grace through fashion.</p>
        <br/>
        <p>Click on the Cyganka logo below to see her designs.</p>
        <a href="http://www.cygankafashion.com" target="_blank" rel="noreferrer"><img src={img} alt="Cyganka fashion logo" height="200px" width="200px"></img></a>
        
        </ReactModal>
        </>
        )
}
}