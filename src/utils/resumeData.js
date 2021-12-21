import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

export default {
    name: 'Shridhar Rai',
    title: 'Full Stack Developer',
    birthday: '16th Mar 2000',
    email: 'raishridhar619@gmail.com',
    address: 'New Delhi',
    phone: '9319751819',

    socials: {
        Github : {
            link: "https://github.com/shridharrai",
            text: 'MyGithub',
            icon: <GitHubIcon />
        },
        LinkedIn : {
            link: "https://www.linkedin.com/in/shridhar-rai-091859178/",
            text: 'MyLinkedin',
            icon: <LinkedInIcon />
        },
        Facebook : {
            link: "https://www.facebook.com",
            text: 'MyFacebook',
            icon: <FacebookIcon />
        },
        Twitter : {
            link: "https://www.twitter.com",
            text: 'MyTwitter',
            icon: <TwitterIcon />
        }
    }
}