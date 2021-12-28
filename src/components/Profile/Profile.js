import React from "react";
import {Typography} from '@material-ui/core'
import './Profile.css'
import CustomTimeline, { CustomTimelineSeperator } from "../Timeline/CustomTimeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined"
import GetAppIcon from '@material-ui/icons/GetApp'
import resumeData from "../../utils/resumeData";
import CustomButton from "../Button/Button";

const CustomTimelineItem = ({title, text, link}) => (
    <TimelineItem>
        <CustomTimelineSeperator />
        <TimelineContent className="timeline_content">
            {
                link ? (<Typography className="timelineItem_text">
                    <span>{title}:</span>{" "}
                    <a href={link} target="_blank">{text}</a>
                </Typography>) : (<Typography className="timelineItem_text">
                    <span>{title}:</span>{text}
                </Typography>)
            }
        </TimelineContent>
    </TimelineItem>
)

const Profile = () => {
    return (
        <div className="profile container_shadow">
            <div className="profile_name">
                <Typography className="name">{resumeData.name}</Typography>
                <Typography className="title">{resumeData.title}</Typography>
            </div>
            <figure className="profile_image">
                <img src={require('../../assets/images/displayImage.jpg').default} alt=""></img>
            </figure>
            <div className="profile_info">
                <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
                <CustomTimelineItem title="Name" text={resumeData.name} />
                <CustomTimelineItem title="Title" text={resumeData.title} />
                <CustomTimelineItem title="Email" text={resumeData.email} />
                {Object.keys(resumeData.socials).map((key) => (
                    <CustomTimelineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link}/>
                ))}
                </CustomTimeline>
                <br/>
                <div className="btn_container">
                <CustomButton text={"Download CV"} icon={<GetAppIcon />} cvLink={resumeData.cvLink} />
                </div>
            </div>
        </div>
    )
}

export default Profile