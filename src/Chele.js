import React, {Component} from 'react'
import img from './Chelelinkcopy.png'
import ReactModal from 'react-modal'

export default class Chele extends Component {
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
        <button type="button" className="appbutton"onClick={this.handleOpenModal}><img src={img} alt="I"width="330px" height="170px"></img></button>
        <ReactModal
            isOpen={this.state.modalOpen}
        >
        <button onClick={this.handleCloseModal}>Back</button>
        <h1>I am an Artist and Poet.</h1>
        <a href="https://opensea.io/collection/she-arcana" target="_blank" rel="noreferrer">She Arcana NFT Collection</a>
        <p>Chele celebrates her love of the tarot, simplistic art, and modern AI technology in this collection. In honor of ancient Egyptian hieroglyphs, She Arcana represents the feminine mystery and its navigation through the modern world.</p>
        <a href="https://www.poetrysoup.com/me/CheleG" target="_blank" rel="noreferrer">Poetry Soup Collection</a>
        <p>Chele's Poetry Collection - Various forms include Free Verse, Sijo, Ballad, Parody, Haiku, and more.</p>
        </ReactModal>
        </>
        )
}
}