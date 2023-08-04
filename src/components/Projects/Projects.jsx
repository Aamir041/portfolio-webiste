import ProjectCard from "../../lib/ProjectCard/ProjectCard"
import "./Projects.css"
const Projects = () => {
    
    const projects = [
        {
            projectName: "React Expense Tracker",
            img:"src\\assets\\projectsImg\\expense-tracker\\img.png",
            link:"https://github.com/Aamir041/React-Expense-Tracker",
            skills:["JavaScript","HTML","CSS"],
        },
        {
            projectName: "Recipe Site",
            img:"src\\assets\\projectsImg\\add-your-recipe\\img.png",
            link:"https://github.com/Aamir041/add-your-recipe-site",
            skills:["JavaScript","HTML","CSS","json-server"]
        },
        {
            projectName: "Memory Card",
            img:"src\\assets\\projectsImg\\memory-card-game\\img.png",
            link:"https://github.com/Aamir041/memory_game_project_react",
            skills:["JavaScript","HTML","CSS"]
        },
        {
            projectName: "Todo List",
            img:"src\\assets\\projectsImg\\todo\\img.png",
            link:"https://github.com/Aamir041/todo-list",
            skills:["JavaScript","HTML","CSS"]
        },
        {
            projectName: "Restaurant",
            img:"src\\assets\\projectsImg\\restaurant-homepage\\img.png",
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