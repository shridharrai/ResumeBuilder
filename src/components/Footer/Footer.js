import React from "react";
import {Typography} from '@material-ui/core'
import './Footer.css'
import resumeData from "../../utils/resumeData";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_left">
                <Typography className="footer_name">{resumeData.name}</Typography>
            </div>
            <div className="footer_right">
                <Typography className="footer_copyright">
                    Developed by{" "}
                    <a href={resumeData.socials.Github.link} target="_blank">{resumeData.name}</a>
                </Typography>
            </div>
        </div>
    )
}

export default Footer