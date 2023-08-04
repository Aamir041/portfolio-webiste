import "./ProjectCard.css"
import none from "../../assets/none.jpg"
import { Link } from "react-router-dom";
const ProjectCard = ({projectName,imgAddr,link}) => {
    return(
        <Link exact to={link} target="_blank" className="projectCard">
            <img src={imgAddr ? imgAddr : none} alt="" />
            <h2>{projectName}</h2>
        </Link>
    )
}

export default ProjectCard;