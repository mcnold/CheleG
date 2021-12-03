import React, {Component} from 'react';
import img from './5296501_linkedin_network_linkedin logo_icon.png'
import img1 from './5296500_fb_social media_facebook_facebook logo_social network_icon.png'
import img2 from './5296765_camera_instagram_instagram logo_icon.png'
import img3 from './5296514_bird_tweet_twitter_twitter logo_icon.png'
import img4 from './8652748_nft_tag_icon.png'
import img5 from './897241_article_blog_blogging_compose_write_icon.png'


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
            <a href="https://www.linkedin.com/in/michelegodleske/" target="_blank" rel="noreferrer"><img src={img} width='25px' height='25px' margin="2px"alt="Linkedin"></img></a>
            
            <a href="https://www.facebook.com/CygankaFashion/" target="_blank" rel="noreferrer"><img src={img1} width='25px' height='25px'margin="2px"alt="Facebook"></img></a>

            <a href="https://www.instagram.com/cygankafashion/" target="_blank" rel="noreferrer"><img src={img2} width='25px' height='25px'margin="2px"alt="Instagram"></img></a>

            <a href="https://twitter.com/CheleTarot" target="_blank" rel="noreferrer"><img src={img3} width='25px' height='25px'margin="2px"alt="Instagram"></img></a>

            <a href="https://opensea.io/collection/she-arcana" target="_blank" rel="noreferrer"><img src={img4} width='25px' height='25px'margin="2px"alt="Instagram"></img></a>
            
            <a href="https://www.poetrysoup.com/me/CheleG" target="_blank" rel="noreferrer"><img src={img5} width='25px' height='25px'margin="2px"alt="Instagram"></img></a>
            </>
        )
    }
}