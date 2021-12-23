import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub'
import WebOutlined from '@material-ui/icons/WebOutlined'
import AssignmentOutlined from '@material-ui/icons/AssignmentOutlined'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

export default {
    name: 'Shridhar Rai',
    title: 'Full Stack Developer',
    birthday: '16th Mar 2000',
    email: 'raishridhar619@gmail.com',
    address: 'New Delhi',
    phone: '9319751819',

    socials: {
        Github: {
            link: "https://github.com/shridharrai",
            text: 'MyGithub',
            icon: <GitHubIcon />
        },
        LinkedIn: {
            link: "https://www.linkedin.com/in/shridhar-rai-091859178/",
            text: 'MyLinkedin',
            icon: <LinkedInIcon />
        },
        Facebook: {
            link: "https://www.facebook.com",
            text: 'MyFacebook',
            icon: <FacebookIcon />
        },
        Twitter: {
            link: "https://www.twitter.com",
            text: 'MyTwitter',
            icon: <TwitterIcon />
        }
    },

    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

    experiences: [
        {
            title: 'Work 1',
            date: '2018 - Present',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            title: 'Work 2',
            date: '2018 - Present',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            title: 'Work 3',
            date: '2018 - Present',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
    ],

    educations: [
        {
            title: 'Education 1',
            date: '2018 - Present',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            title: 'Education 2',
            date: '2018 - Present',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            title: 'Education 3',
            date: '2018 - Present',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ],

    services: [
        {
            title: 'Web Development',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            icon: <WebOutlined />
        },
        {
            title: 'Web Development',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            icon: <AssignmentOutlined />
        },
        {
            title: 'Web Development',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            icon: <WebOutlined />
        }
    ],

    skills: [
        {
            title: 'FRONT-END',
            description: ["Javascript", "ReactJS", "TypeScript", "Angular 2+", "Bootstrap", "Material UI"]
        },
        {
            title: 'BACK-END',
            description: ["Java", "Spring", "Hibernate", "NodeJS"]
        },
        {
            title: 'DATABASES',
            description: ["My SQL", "Postgresql", "Firebase"]
        },
        {
            title: 'SOURCE CONTROL',
            description: ["Git", "Github"]
        }
    ]
}