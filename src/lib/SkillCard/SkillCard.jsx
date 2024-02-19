import "./SkillCard.css"

import {BiLogoJava,BiLogoJavascript,BiLogoMongodb,BiLogoHtml5,BiLogoPhp,BiLogoCss3,BiLogoReact,BiLogoNodejs} from "react-icons/bi"
import { SiSpringboot,SiJunit5,SiPostgresql   } from "react-icons/si";

import dslogo from "../../assets/datastructure.svg"

import algo from "../../assets/algorithm.svg"

import {SiMysql,SiExpress} from "react-icons/si"

const SkillCard = () => {
    return(
        <div className="skillcard">

            <div className="skillcard--logos">

            <span className="skillcard--card">
                <BiLogoJava className="skillcard--icon"/>
            </span>

            <span className="skillcard--card">
                <BiLogoJavascript className="skillcard--icon"/>
            </span>

            <span className="skillcard--card">
                <BiLogoMongodb className="skillcard--icon"/>
            </span>

            <span className="skillcard--card">
                <BiLogoHtml5 className="skillcard--icon"/>
            </span>

            <span className="skillcard--card">
                <BiLogoCss3 className="skillcard--icon"/>
            </span>

            <span className="skillcard--card">
                <BiLogoReact className="skillcard--icon"/>
            </span>

            <span className="skillcard--card">
                <BiLogoNodejs className="skillcard--icon"/>
            </span>

            <span className="skillcard--card">
                <SiExpress className="skillcard--icon"/>
            </span>

            <span className="skillcard--card">
                <SiMysql className="skillcard--icon"/>
            </span>

            <span className="skillcard--card">
                <img src={dslogo} alt="" />
            </span>

            <span className="skillcard--card">
                <SiSpringboot className="skillcard--icon"/>
            </span>

            <span className="skillcard--card">
                <SiJunit5 className="skillcard--icon"/>
            </span>

            <span className="skillcard--card">
                <SiPostgresql className="skillcard--icon"/>
            </span>

            </div>

        </div>
    )
}

export default SkillCard;