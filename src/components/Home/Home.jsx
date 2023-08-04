import "./Home.css"
import hi from "../../assets/hi.webp"
const Home = () => {
    return (
        <div className="home">
            <div className="intro">
                <h3 className="intro1">Hello, my name is aamir</h3>
                <h1 className="intro2">I make Websites.</h1>
            </div>

            <div className="hi">
                <img src={hi}/>
            </div>
            
        </div>
    )
}

export default Home;