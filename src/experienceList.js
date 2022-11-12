import gradesaver from './images/gradesaver.webp';
import bloomberg from './images/bloomberg.webp';
import hubspot from './images/hubspot.svg';
import mastercard from './images/mastercard.jpg';
import illinois from './images/illinois.png';
import brex from './images/brex.png'

export const EXPERIENCE_LIST = {
    "brex": {
        id: "brex",
        company: "Brex",
        role: "Software Engineer II",
        team: "Banking Experience",
        location: "New York City, NY",
        time: "October 2021 - Present",
        logo: brex,
        backgroundColor: "rgba( 10, 10, 10, 0.35 )",
        keyPoints: [
            "Led project to migrate all banking customers (~70,000) to new account and routing numbers",
            "Improved customer experience for high-risk customers by enabling incoming ACH and wire transactions.",
            "Coordinated efforts with Operation teams to improve their daily experience by identifying slow database queries and leveraging Partial Indexes to optimize query. Resulted in a reduction of page load times by 50%.",
            "Helped team onboard a new team member being an onboarding buddy, performed on - call duties, and organized team retros"
        ],
        tools: ["postgresql-plain-wordmark colored", "elixir-plain colored", "docker-plain colored", "amazonwebservices-original colored", "kubernetes-plain colored", "kotlin-plain colored"]
    },
    "bloomberg": {
        id: "bloomberg",
        company: "Bloomberg",
        role: "Software Engineer",
        team: "Connectivity Registry",
        location: "New York City, NY",
        time: "August 2020 - October 2021",
        logo: bloomberg,
        backgroundColor: "rgba( 104, 87, 255, 0.35 )",
        keyPoints: [
            "Researched and presented distributable and scalable solution to redesign auditing system; new designed focused on guaranteeing atomic audits",
            "Redesigned permission checking function to more effectively use network bandwidth, resulted in performance increase of function by 50%",
            "Coordinated with teams across the firm to design and implement a new feature using Python and Flask that allows customers to add private line (leased line) IP entries to IP allowlists."
        ],
        tools: ["docker-plain-wordmark colored", "python-plain-wordmark colored", "flask-original-wordmark", "postgresql-plain-wordmark colored", "angularjs-plain-wordmark colored", "jenkins-plain colored", "jira-plain-wordmark colored"]
    },
    "hubspot": {
        id: "hubspot",
        company: "Hubspot",
        role: "Software Engineer Intern",
        team: "Authorization/Authentication Team",
        location: "Remote",
        time: "June 2020 - August 2020",
        logo: hubspot,
        backgroundColor: "rgba( 244, 135, 29, 0.35 )",
        keyPoints: [
            "Primarily on system used to determine whether operations to teams were safe to perform. Increased resiliency of the system and reduced deploy time of system from 15 minutes to 1 minute",
            "Introduced additional checks which looked at S3 Buckets and Kafka Topics owned by teams",
            "Added new feature to move teams that were unused from the main tree hierarchy to a separate tree hierarchy for these vestigial teams, resulted in 20% increase in team related queries",
            "Participated in daily stand-up meetings and contributed to quarterly planning meeting with possible tasks for the upcoming quarter"
        ],
        tools: ["docker-plain-wordmark colored", "apachekafka-original-wordmark", "java-plain-wordmark colored", "amazonwebservices-plain-wordmark colored", "slack-plain-wordmark", "kubernetes-plain-wordmark colored"]
    },
    "mastercard": {
        id: "mastercard",
        company: "Mastercard",
        role: "Software Engineer Intern",
        team: "",
        location: "O'Fallon, MO",
        time: "June 2019 - August 2019",
        logo: mastercard,
        backgroundColor: "rgba( 249, 105, 14, 0.35 )",
        keyPoints: [
            "Constructed scripts to containerize 5 applications to provide seamless testing and development integration",
            "Worked with testing team to debug code and collaborated with architects to meet requirements for project",
            "Developed application that finds and allocates empty desks to employees in search of desks and won Intern Hackathon",
        ],
        tools: ["docker-plain-wordmark colored", "devicon-intellij-plain-wordmark colored", "java-plain-wordmark colored"]
    },
    "ble-research": {
        id: "ble-research",
        company: "BLE Research",
        role: "Undergraduate Researcher",
        team: "Bluetooth Low Energy under Dr. Robin Kravets",
        location: "Urbana, IL",
        time: "Jan 2020 - May 2020",
        logo: illinois,
        backgroundColor: "rgba(31, 58, 147, 0.35)",
        keyPoints: [
            "Developed C++ code to send small packets to a receiver. Processed packets at receiver to log RSSI from multiple senders",
            "Analyzed RSSI signals to determine relation between distance and RSSI. Determined if two different senders at different distances from the receiver could be identified based on their RSSI",
        ],
        extra: {
            title: "A summary of my research",
            contents: "Click <a href='https://drive.google.com/file/d/1omGSKINZqVldTvzgnxviy6B2poMX6rfi/view?usp=sharing' target='_blank'>here</a> to see my conclusions"
        },
        tools: ["arduino-plain-wordmark", "c-line colored"]
    },
    "gradesaver": {
        id: "gradesaver",
        company: "GradeSaver",
        role: "CEO",
        team: "",
        location: "Rosemount, MN",
        time: "May 2018 - May 2020",
        logo: gradesaver,
        backgroundColor: "rgba(36, 37, 42, 0.35)",
        keyPoints: [
            "Extracted key insights regarding assignments from data points to rank each task in order of importance",
            "Exploited Java Object Oriented Principles to develop custom objects, allowing for quick user experience. Stored data in Firebase Realtime Database via asynchronous REST APIs to ensure seamless data retrieval",
            "Leveraged CI/CD pipeline to enable build and deploy of main branch on version control"
        ],
        extra: {
            title: "Check it out!",
            contents: "You can try it out <a href='https://play.google.com/store/apps/details?id=com.omnia.gundeepsingh.gradesaver&hl=en_US&gl=US' target='_blank'>here</a>"
        },
        tools: ["android-plain colored", "intellij-plain-wordmark colored", "java-plain-wordmark colored", "circleci-plain-wordmark colored", "firebase-plain-wordmark colored", "photoshop-line colored", "xd-line colored"]
    }
}