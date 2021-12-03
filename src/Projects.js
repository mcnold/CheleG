import React, {Component} from 'react';
import gitlogo from "./GitHub-Mark-32px.png"

export default class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: true
        }
    }
    render() {
        return (
            <>
            <p>Projects Completed:</p>
            <a href="https://tarottutor.herokuapp.com/" target="_blank" rel="noreferrer">Tarot Tutor</a>
            <p>Tarot Tutor is a server-side application built with Node.js, Express.js, JavaScript, MongoDB, HTML, and Skeleton CSS Framework.</p>
            <a href="https://front-mycointracker.herokuapp.com/" target="_blank" rel="noreferrer">My Coin Tracker</a>
            <p>My Coin Tracker is a full stack application built with Node.js, Express.js, JavaScript, MongoDB, HTML, CoinGecko API, and React Front End Library. Team Project.</p>
            <a href="https://mcnold.github.io/GA-Unit-1-Game-Project/" target="_blank" rel="noreferrer">Paparazzi Frenzy</a>
            <p>Paparazzi Frenzy is a Front End Web Game built with HTML5 Canvas, CSS, and Vanilla JavaScript. Modeled after Atari Asteroids.</p>
            <a href="https://github.com/mcnold" target="_blank" rel="noreferrer"><img src={gitlogo} width='50px' height='50px'margin="2px"alt="GitHub"></img></a>
            </>
        )
    }
}