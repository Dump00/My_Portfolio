import "./about.css"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://cdn.pixabay.com/photo/2018/08/21/23/29/forest-3622519_960_720.jpg" alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                Within the text of most pages, there are usually many hypertext links to other pages within the wiki.
                </p>
                <p className="a-desc">
                Within the text of most pages, there are usually many hypertext links to other pages within the wiki. This form of non-linear navigation is more "native" to a wiki than structured/formalized navigation schemes. Users can also create any number of index or table-of-contents pages.
                </p>
            </div>
        </div>
    )
}

export default About
