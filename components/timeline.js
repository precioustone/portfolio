import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Timeline(){
    const workIcon = <FontAwesomeIcon icon="briefcase" color="#ffffff" size="lg"/>
    return (
        <div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="work-experience"
                    date="April - May (2020)"
                    icon={workIcon}
                    iconStyle={{backgroundColor: "#089de3"}}
                >
                    <div>
                        <h3 className="vertical-timeline-element-title">Art Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                        <p className="timeline-content">
                        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                        </p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="work-experience"
                    date="April - May (2020)"
                    icon={workIcon}
                    iconStyle={{backgroundColor: "#089de3"}}
                >
                    <div>
                        <h3 className="vertical-timeline-element-title">Art Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                        <p className="timeline-content">
                        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                        </p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="work-experience"
                    date="April - May (2020)"
                    icon={workIcon}
                    iconStyle={{backgroundColor: "#089de3"}}
                >
                    <div>
                        <h3 className="vertical-timeline-element-title">Art Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                        <p className="timeline-content">
                        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                        </p>
                    </div>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}