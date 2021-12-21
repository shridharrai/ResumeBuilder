import React from "react";
import './CustomTimeline.css'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import WorkIcon from '@material-ui/icons/Work'
import {Typography} from '@material-ui/core'

const CustomTimeline = ({title, icon, children}) => {
    return(
        <Timeline className={"timeline"}>
            {/* Item Header */}
        <TimelineItem className={"timeline_firstItem"}>
          <TimelineSeparator>
            <TimelineDot className={"timeline_dot_header"}>{icon}</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
              <Typography variant="h6" className={"timeline_header_title"}>{title}</Typography>
          </TimelineContent>
        </TimelineItem>

        {children}

        {/* Remaining items */}
      </Timeline>
    )
}

export const CustomTimelineSeperator = () => (
    <TimelineSeparator className={"seperator_padding"}>
            <TimelineDot className={"timeline_dot"} />
            <TimelineConnector />
          </TimelineSeparator>
)

export default CustomTimeline