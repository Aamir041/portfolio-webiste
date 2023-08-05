import ProjectCard from "../../lib/ProjectCard/ProjectCard"
import "./Projects.css"
const Projects = () => {
    
    const projects = [
        {
            projectName: "React Expense Tracker",
            img:"https://github.com/Aamir041/portfolio-webiste/blob/main/src/assets/projectsImg/expense-tracker/img.png?raw=true",
            link:"https://github.com/Aamir041/portfolio-webiste/blob/main/src/assets/projectsImg/expense-tracker/img.png?raw=true",
            skills:["JavaScript","HTML","CSS"],
        },
        {
            projectName: "Add Your Recipe Site",
            img:"https://github.com/Aamir041/portfolio-webiste/blob/main/src/assets/projectsImg/add-your-recipe/img.png?raw=true",
            link:"https://github.com/Aamir041/add-your-recipe-site",
            skills:["JavaScript","HTML","CSS","json-server"]
        },
        {
            projectName: "Memory Card",
            img:"https://github.com/Aamir041/portfolio-webiste/blob/main/src/assets/projectsImg/memory-card-game/img.png?raw=true",
            link:"https://github.com/Aamir041/memory_game_project_react",
            skills:["JavaScript","HTML","CSS"]
        },
        {
            projectName: "Todo List",
            img:"https://github.com/Aamir041/portfolio-webiste/blob/main/src/assets/projectsImg/todo/img.png?raw=true",
            link:"https://github.com/Aamir041/todo-list",
            skills:["JavaScript","HTML","CSS"]
        },
        {
            projectName: "Restaurant",
            img:"https://github.com/Aamir041/portfolio-webiste/blob/main/src/assets/projectsImg/restaurant-homepage/img.png?raw=true",
            link:"https://github.com/Aamir041/cool-restaurent-site",
            skills:["HTML","CSS"]
        },
        {
            projectName: "Hosted A Php Website On Docker",
            img:null,
            link:"https://github.com/Aamir041/DevOps-BootCamp",
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