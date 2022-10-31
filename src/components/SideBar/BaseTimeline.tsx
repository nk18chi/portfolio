import React from "react";
import "./BaseTimeline.scss";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@material-ui/lab/";
import { HashLink } from "react-router-hash-link";

interface BaseTimelineProps {
  lines: {
    key: number;
    label: string;
    anchor: string;
  }[];
}

const BaseTimeline = ({ lines }: BaseTimelineProps) => {
  if (!lines || lines.length === 0) return null;
  return (
    <Timeline>
      {lines.map((line) => (
        <HashLink className='headline-link' to={line.anchor}>
          <TimelineItem key={line.key}>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>{line.label}</TimelineContent>
          </TimelineItem>
        </HashLink>
      ))}
    </Timeline>
  );
};

export default BaseTimeline;
