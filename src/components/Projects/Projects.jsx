import ProjectCard from "../../lib/ProjectCard/ProjectCard";
import "./Projects.css";
import exprenseTrackerImg from "../../assets/projectsImg/expense-tracker/img.png";
import blogRecipeSiteImg from "../../assets/projectsImg/add-your-recipe/img.png";
import memoryCardGameImg from "../../assets/projectsImg/memory-card-game/img.png";
import todoImg from "../../assets/projectsImg/todo/img.png";
import restaurantImg from "../../assets/projectsImg/restaurant-homepage/img.png";
import cmsImg from "../../assets/projectsImg/nerd-cms/img.png"

const Projects = () => {
    
    const projects = [
        {
            projectName: "React Expense Tracker",
            img:exprenseTrackerImg,
            link:"https://github.com/Aamir041/React-Expense-Tracker",
            skills:["JavaScript","HTML","CSS"],
        },
        {
            projectName: "Add Your Recipe Site",
            img:blogRecipeSiteImg,
            link:"https://github.com/Aamir041/add-your-recipe-site",
            skills:["JavaScript","HTML","CSS","json-server"]
        },
        {
            projectName: "Memory Card",
            img: memoryCardGameImg,
            link:"https://github.com/Aamir041/memory_game_project_react",
            skills:["JavaScript","HTML","CSS"]
        },
        {
            projectName: "Todo List",
            img:todoImg,
            link:"https://github.com/Aamir041/todo-list",
            skills:["JavaScript","HTML","CSS"]
        },
        {
            projectName: "Restaurant",
            img:restaurantImg,
            link:"https://github.com/Aamir041/cool-restaurent-site",
            skills:["HTML","CSS"]
        },
        {
            projectName: "Hosted A Php Website On Docker",
            img:null,
            link:"https://github.com/Aamir041/DevOps-BootCamp",
            skills:["Linux","Docker","YAML"]
        },
        {
            projectName: "Nerd CMS",
            img:cmsImg,
            link:"https://github.com/Aamir041/Nerd-CMS",
            skills:["Linux","Docker","YAML"]
        },
    ]

    return (
        <div className="projects">
            <h1>My Projects</h1>
            
            <div className="projects-all">
                {
                    projects.map(
                        (e) => {
                            return(
                                <ProjectCard
                                projectName={e.projectName}
                                imgAddr={e.img}
                                link={e.link}
                                />
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}

export default Projects; 