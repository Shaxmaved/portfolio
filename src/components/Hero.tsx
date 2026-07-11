import profileImage from "../assets/ved.jpg";
import Button from "./Button";
import "../styles/hero.css";

type HeroProps = {
    name: string;
    role: string;
    bio : string;
}

function Hero({ name, role, bio }: HeroProps) {
    return (
        <div className="hero">
            <div className="hero-left">
                <h1>{name}</h1>
                <h2>{role}</h2>
                <p>{bio}</p>
                <p>
                   Passionate AI & Machine Learning Engineer focused on building intelligent applications using Python, FastAPI, React, Computer Vision, and Generative AI.
                </p>
                <div className="cutom-buttons">
                    <Button text="Download Resume"/>
                    <Button text="Contact Me" />
                    <Button text="GitHub" />
                </div>
            </div>
        <div className="hero-right">
            <img
                src={profileImage}
                alt="Ved Sharma"
                className="profile-image"
            />
        </div>
        </div>
        
    );
}

export default Hero;