import ProfileCard from "./ProfileCard";
import Oppie from "../assets/Oppenheimer.jpeg"
import Homie from "../assets/Bhabha.jpeg"
import Turing from "../assets/Turing.jpeg"

function Team() {
    return (
        <section id="team" className="bg-stone-950 text-white raleway text-center flex flex-col justify-center items-center pb-[10vh]">
            <h1 className="text-5xl pt-[10vh] pb-[5vh]">Team.</h1>
            <div className="flex flex-wrap justify-center items-center gap-[5vw] px-[5vw]">
                <ProfileCard name="Julius Robert Oppenheimer" position="the scientific director of the Manhattan Project" desc="Now I am become Death, the destroyer of worlds." photo={Oppie} linkedinUrl="https://www.linkedin.com/in/souharda-roy3301/"/>
                <ProfileCard name="Alan Mathison Turing" position="a British mathematician" desc="A computer would deserve to be called intelligent if it could deceive a human into believing that it was human." photo={Turing} linkedinUrl="https://www.linkedin.com/in/souharda-roy3301/"/>
                <ProfileCard name="Homi Jehangir Bhabha" position="an Indian nuclear physicist" desc="The future belongs to science and those who make friends with science." photo={Homie} linkedinUrl="https://www.linkedin.com/in/souharda-roy3301/"/>
            </div>
        </section>
    )
}

export default Team;