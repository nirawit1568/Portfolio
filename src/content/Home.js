import React from 'react'
import Social from '../components/Social'
import profilepic from '../img/profile.JPG'
import ReactTypingEffect from 'react-typing-effect'

const Home = () => {
    return(
        <div className="condiv home">
            <img src={profilepic} alt="profile" className="profilepic"/>
            <ReactTypingEffect text={['I am Nirawit','I am a Web Developer']} speed={80} eraseDelay={200} className="typingeffect"/>
            <Social/>
        </div>
    );
}

export default Home;