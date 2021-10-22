import "./tech.css"

const tech = ({img}) => {
    return (
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href="#!">
                <img src={img} alt="" className="p-img" />
                
            </a>
        </div>
    )
}

export default tech
