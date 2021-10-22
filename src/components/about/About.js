import "./about.css"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://images.unsplash.com/photo-1537884944318-390069bb8665?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                To find yourself think for yourself - Socrates. 😉
                </p>
                <p className="a-desc">
                I have graduated from SEUSL as a Mechanical Engineer. But my passion in computer science drove me through the Software Engineering path. So I focused on Software Developing and Architecture and I really enjoy what I have become. My professional life goal is to become a great software architect.
                </p>
            </div>
        </div>
    )
}

export default About
