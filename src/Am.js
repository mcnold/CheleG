import React, {Component} from 'react'
import ReactModal from 'react-modal'
import img from './Amlinkcopy.png'
import Projects from './Projects'

export default class Am extends Component {
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
        <button type="button" className="appbutton"onClick={this.handleOpenModal}><img src={img} alt="I"width="220px" height="170px"></img></button>
        <ReactModal
            isOpen={this.state.modalOpen}
        >
        <button onClick={this.handleCloseModal}>Back</button>
        <h1>I am a Software Engineer.</h1> 
            <p>As a successful software engineer, Chele's goal is to offer complete transparency in the story she tells through design and application interaction. She leverages her passion for business, technology, and leadership, to build applications and consult others with this in mind. Her goal is to inspire innovation, self-empowerment, and passion for entrepreneurial creativity.</p>
            <Projects/>
        </ReactModal>
        </>
        )
}
}
