import "./techList.css"
import {tech} from "../../data/data"
import Tech from "../tech/tech"


const TechList = () => {
    return (
        <div className="tl">
            <div className="tl-texts">
                <h1 className="tl-title">Building New Things. Finding Soultions.</h1>
                <p className="tl-desc">
                Usually I love to work with any new technology. And here are my primary technologies which I love to work with. 
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
