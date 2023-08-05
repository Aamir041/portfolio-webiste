import "./SkillCard.css"

import {BiLogoJava,BiLogoJavascript,BiLogoMongodb,BiLogoHtml5,BiLogoPhp,BiLogoCss3,BiLogoReact,BiLogoNodejs} from "react-icons/bi"

import dslogo from "../../assets/datastructure.svg"

import algo from "../../assets/algorithm.svg"

import {SiMysql,SiExpress} from "react-icons/si"

const SkillCard = () => {
    return(
        <div className="skillcard">

            <div className="skillcard--logos">

            <span className="skillcard--card">
                <BiLogoJava className="skillcard--icon"/>
                <span className="skillcard--name">Java</span>
            </span>

            <span className="skillcard--card">
                <BiLogoPhp className="skillcard--icon"/>
                <span className="skillcard--name">PHP</span>
            </span>

            <span className="skillcard--card">
                <BiLogoJavascript className="skillcard--icon"/>
                <span className="skillcard--name">Javascript</span>
            </span>

            <span className="skillcard--card">
                <BiLogoMongodb className="skillcard--icon"/>
                <span className="skillcard--name">MongoDB</span>
            </span>

            <span className="skillcard--card">
                <BiLogoHtml5 className="skillcard--icon"/>
                <span className="skillcard--name">HTML</span>

            </span>

            <span className="skillcard--card">
                <BiLogoCss3 className="skillcard--icon"/>
                <span className="skillcard--name">CSS</span>

            </span>

            <span className="skillcard--card">
                <BiLogoReact className="skillcard--icon"/>
                <span className="skillcard--name">React</span>

            </span>

            <span className="skillcard--card">
                <BiLogoNodejs className="skillcard--icon"/>
                <span className="skillcard--name">NodeJS</span>

            </span>

            <span className="skillcard--card">
                <SiExpress className="skillcard--icon"/>
                <span className="skillcard--name">ExpressJS</span>

            </span>

            <span className="skillcard--card">
                <SiMysql className="skillcard--icon"/>
                <span className="skillcard--name">MySQL</span>

            </span>

            <span className="skillcard--card">
                <img src={dslogo} alt="" />
                <span className="skillcard--name">Data Structures</span>
            </span>

            <span className="skillcard--card">
                <img src={algo} alt="" />
                <span className="skillcard--name">Algorithms</span>
            </span>

            </div>

        </div>
    )
}

export default SkillCard;