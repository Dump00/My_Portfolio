import "./techList.css"
import {tech} from "../../data/data"
import Tech from "../tech/tech"


const TechList = () => {
    return (
        <div className="tl">
            <div className="tl-texts">
                <h1 className="tl-title">Create & inspire. It's Rushain..</h1>
                <p className="tl-desc">
                Within the text of most pages, there are usually many hypertext links to other pages within the wiki. This form of non-linear navigation is more native.
                </p>
            </div>
            <div className="tl-list">
                {tech.map(item => <Tech
                img={item.img}
                key={item.id}/>)}
            </div>
        </div>
    )
}

export default TechList
