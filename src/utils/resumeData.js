import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub'
import WebOutlined from '@material-ui/icons/WebOutlined'
import AssignmentOutlined from '@material-ui/icons/AssignmentOutlined'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import YouTube from '@material-ui/icons/YouTube'
import LiveTv from '@material-ui/icons/LiveTv'

export default {
    name: 'Shridhar Rai',
    title: 'Full Stack Developer',
    birthday: '16th Mar 2000',
    email: 'raishridhar619@gmail.com',
    address: 'New Delhi',
    phone: '9319751819',
    cvLink:'',

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

    about: 'Looking for a full time role as a Full Stack Developer. Enthusiastic to coding and skilled in JavaScript, ReactJs, NodeJS, Angular2+, Spring, Hibernate. Having 1.5 years of professional work experience in Software Development. Knee to learn new technologies.',

    experiences: [
        {
            title: 'Software Developer',
            date: 'Mar 2021 - Dec 2021',
            description: 'Worked with Newgen Software ltd. on a banking based product for a singapore based firm.'
        },
        {
            title: 'FreeLancer Developer',
            date: '2019 - 2020',
            description: 'Build a Expense Management System for a Grocery store. Worked on Frontend of the App using Angular 2+ and also learn to collaborate on Git.'
        },
        {
            title: 'Software Developer Intern',
            date: 'Jan 2020 - Jul 2020',
            description: 'Worked for BrainMentors pvt ltd on a Test Engine App. Got chance to work with ReactJs, Spring and Hibernate technologies.'
        }
    ],

    educations: [
        {
            title: 'BTech CSE',
            date: '2017 - 2021',
            description: 'Guru Gobind Singh Indraprastha University'
        },
        {
            title: 'Schooling',
            date: '2005 - 2017',
            description: 'Kendriya Vidyalaya Tagore Garden.'
        }
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
            title: 'DEVELOPER TOOLS',
            description: ["Git", "Github", 'VS Code', "Eclipse", "STS"]
        }
    ],

    projects: [
        {
            tag: "React",
            images: [
                "https://user-images.githubusercontent.com/50835817/147384275-eb0da01a-f8e9-4105-9ee8-3bcc644fe08b.png",
                "https://user-images.githubusercontent.com/50835817/147384293-cb3a2656-5dbf-4d20-9214-158e4230708e.png",
                "https://user-images.githubusercontent.com/50835817/147384599-659488f7-b85a-4303-ade1-2e98409930af.png",
                "https://user-images.githubusercontent.com/50835817/147384607-f5a97a3f-5b9c-4359-a31a-7410d1b84c63.png",
                "https://user-images.githubusercontent.com/50835817/147384618-dd8e990a-92e5-4f28-b2b4-deea8f6934a4.png",
                "https://user-images.githubusercontent.com/50835817/147384620-d05667ba-2fec-4dd3-a170-b3b2a22680e1.png"
            ],
            title: "Crwn Clothing",
            caption: "A moblie responsive E-commerce app for buying different categories of clothes",
            description: "Major Features :- Sign-in/Sign-up, Firebase Auth, Home, Shop, Checkout Pages, Cart Features, Mobile Responsive. \nTechnologies Used :- ReactJs, Redux, Firebase, SCSS.",
            links: [
                {
                    link: "https://www.linkedin.com/in/shridhar-rai-091859178/",
                    icon: <LinkedInIcon />
                },
                {
                    link: "https://github.com/shridharrai/crwn-clothing",
                    icon: <GitHubIcon />
                },
                {
                    link: "https://crwn619-live.herokuapp.com/",
                    icon: <LiveTv />
                }
            ]
        },

        {
            tag: "Angular",
            images: [
                "https://raw.githubusercontent.com/shridharrai/Accessories-store/main/pics/Landing.PNG",
                "https://raw.githubusercontent.com/shridharrai/Accessories-store/main/pics/Pagination.PNG",
                "https://raw.githubusercontent.com/shridharrai/Accessories-store/main/pics/cartDetails.PNG",
                "https://raw.githubusercontent.com/shridharrai/Accessories-store/main/pics/Checkout.PNG"
            ],
            title: "Accessories-store",
            caption: "A online E-commerce store for buying accessories of different categories",
            description: "Major Features :- Login, Search, Sort, Category-Wise products, Shopping Cart(CRUD), Checkout Page, Order Details, Pagination, Master View, Validations, and many more. \nTechnologies Used :- Angular 5+, Spring-Boot, SpringData-JPA, Hibernate, Bootstrap",
            links: [
                {
                    link: "https://www.linkedin.com/in/shridhar-rai-091859178/",
                    icon: <LinkedInIcon />
                },
                {
                    link: "https://github.com/shridharrai/Accessories-store",
                    icon: <GitHubIcon />
                },
                {
                    link: "https://github.com/shridharrai/Accessories-store",
                    icon: <LiveTv />
                }
            ]
        },

        {
            tag: "Javascript",
            images: [
                "https://user-images.githubusercontent.com/50835817/147388609-82d7f0cc-6bee-4e48-9840-68bf91083e2a.png",
                "https://user-images.githubusercontent.com/50835817/147388624-d87d9db3-08ae-4214-992d-195d0ee51810.png",
                "https://user-images.githubusercontent.com/50835817/147388637-1d93b079-95e1-4233-84f2-50b17ef04295.png",
                "https://user-images.githubusercontent.com/50835817/147388643-917413d1-b39e-4c6e-945f-f5d901bc223c.png"
            ],
            title: "Excel Clone",
            caption: "A Excel Clone App with major features",
            description: "A Excel Clone App with different formatting styles for text, multiple sheets, two way data binding, formula implementation, new and save features for excel sheets. \nTechnologies Used :- Javascript, CSS3",
            links: [
                {
                    link: "https://www.linkedin.com/in/shridhar-rai-091859178/",
                    icon: <LinkedInIcon />
                },
                {
                    link: "https://github.com/shridharrai/Excel-App",
                    icon: <GitHubIcon />
                },
                {
                    link: "https://mystifying-meitner-dba06f.netlify.app/",
                    icon: <LiveTv />
                }
            ]
        },

        {
            tag: "React",
            images: [
                "https://user-images.githubusercontent.com/50835817/147387573-3bfeb18d-1027-420c-9725-7186c0c90dbf.png",
                "https://user-images.githubusercontent.com/50835817/147387590-34e7bfb3-5e5f-4b6a-9013-ccbf7dfacb3b.png",
                "https://user-images.githubusercontent.com/50835817/147387593-178ced2f-124d-4271-8219-75e6ad7a5fd4.png"
            ],
            title: "CoronaTracker",
            caption: "A progressive web app to track the status of COVID cases word wide.",
            description: "Filter the data based on different countries and shows the recovered, death and currently active cases. Shows the data in chart form also and completely responsive web app. \nTechnologies Used :- ReactJs, Material-ui, react-chart",
            links: [
                {
                    link: "https://www.linkedin.com/in/shridhar-rai-091859178/",
                    icon: <LinkedInIcon />
                },
                {
                    link: "https://github.com/shridharrai/coronaTrackerApp/tree/gh-pages",
                    icon: <GitHubIcon />
                },
                {
                    link: "https://shridharrai.github.io/coronaTrackerApp/",
                    icon: <LiveTv />
                }
            ]
        },

        {
            tag: "React",
            images: [
                "https://user-images.githubusercontent.com/50835817/147386170-2e78c23f-b724-4505-82f9-6fd8e9653c76.png",
                "https://user-images.githubusercontent.com/50835817/147386179-93a7712d-3fa5-4142-9fbc-ffe67017101e.png"
            ],
            title: "Github Finder",
            caption: "A Finder Application for searching Github Users.",
            description: "You can search the Github users by their username. You can see the basic details of the user on detailed page with the recent five repositories also. \nTechnologies Used :- ReactJs, Context-Api, Axios",
            links: [
                {
                    link: "https://www.linkedin.com/in/shridhar-rai-091859178/",
                    icon: <LinkedInIcon />
                },
                {
                    link: "https://github.com/shridharrai/github-finder",
                    icon: <GitHubIcon />
                },
                {
                    link: "https://boring-hoover-2e2f4a.netlify.app/",
                    icon: <LiveTv />
                }
            ]
        },

        {
            tag: "React",
            images: [
                "https://user-images.githubusercontent.com/50835817/147387066-9a72492b-e863-4a62-8773-ebd0589dc072.png"
            ],
            title: "Monster Rolodex",
            caption: "A Real time Search Engine Application for Monsters.",
            description: "A Real time Search Engine Application for Monsters with the help of JSONPlaceholder Api. \nTechnologies Used :- ReactJs, CSS3, JSONPlaceholder",
            links: [
                {
                    link: "https://www.linkedin.com/in/shridhar-rai-091859178/",
                    icon: <LinkedInIcon />
                },
                {
                    link: "https://github.com/shridharrai/monsters-rolodex",
                    icon: <GitHubIcon />
                },
                {
                    link: "https://sleepy-ardinghelli-67a1d9.netlify.app/",
                    icon: <LiveTv />
                }
            ]
        },

        {
            tag: "React",
            images: [
                "https://user-images.githubusercontent.com/50835817/147559916-19573257-a2db-4217-846f-1c0bd797b6b2.PNG",
                "https://user-images.githubusercontent.com/50835817/147559929-054b6ed5-fd69-4407-86dd-0d6fa66fde43.PNG"
            ],
            title: "Project Board",
            caption: "A Project Management tool to manage the different project tasks of a project.",
            description: "You can Add, Delete and Update the tasks.The project tasks are displayed on Project board based on categories i.e. ToDo, In Progress, Done. \nTechnologies Used :- ReactJs, Redux, Redux-thunk, Bootstrap, Spring-Boot, Hibernate, MySql",
            links: [
                {
                    link: "https://www.linkedin.com/in/shridhar-rai-091859178/",
                    icon: <LinkedInIcon />
                },
                {
                    link: "https://github.com/shridharrai/ProjectBoard",
                    icon: <GitHubIcon />
                },
                {
                    link: "https://github.com/shridharrai/ProjectBoard",
                    icon: <LiveTv />
                }
            ]
        },

        {
            tag: "React",
            images: [
                "https://user-images.githubusercontent.com/50835817/147560819-bd22837d-4677-4b51-a527-43ecb5595f57.PNG",
                "https://user-images.githubusercontent.com/50835817/147560828-43c0eb1f-8dd1-4179-9eee-227f8bdf567a.PNG",
                "https://user-images.githubusercontent.com/50835817/147560835-6204f469-7ff0-47d5-a5c2-76152a80f064.PNG",
                "https://user-images.githubusercontent.com/50835817/147560850-83a98b75-a04f-4465-a955-cab4066d4c35.PNG",
                "https://user-images.githubusercontent.com/50835817/147560868-888bdd9b-1800-4ebf-91c6-749c2f6c047c.PNG",
                "https://user-images.githubusercontent.com/50835817/147560888-6f05cc81-11ec-4368-987c-1f48c7ce29f0.PNG"
            ],
            title: "IT Logger",
            caption: "An Internal Logging Application for IT Department.",
            description: "Add logs, View logs, Delete logs, Add and View technician list, Search by log message. \nTechnologies Used :- ReactJs, Redux, Materialize-css, Json-server",
            links: [
                {
                    link: "https://www.linkedin.com/in/shridhar-rai-091859178/",
                    icon: <LinkedInIcon />
                },
                {
                    link: "https://github.com/shridharrai/IT-Logger",
                    icon: <GitHubIcon />
                },
                {
                    link: "https://github.com/shridharrai/IT-Logger",
                    icon: <LiveTv />
                }
            ]
        },

        {
            tag: "Javascript",
            images: [
                "https://user-images.githubusercontent.com/50835817/147397074-47b1a312-1896-4a5d-8ccb-9071947d7bc5.png",
                "https://user-images.githubusercontent.com/50835817/147397080-22c84f05-acf5-438d-8d3d-3eaf408c512f.png",
                "https://user-images.githubusercontent.com/50835817/147397084-6a8cebae-c62b-4b7b-90f2-097ffa912a50.png",
                "https://user-images.githubusercontent.com/50835817/147397089-fd6674bf-d4ee-48ee-8063-b1bbe86d911d.png"
            ],
            title: "Ticket Manager",
            caption: "A mini version of JIRA ticket manager application.",
            description: "The major features are adding the tickets with different colors, then filtering of tickets based on colors, localstorage feature, responsive in nature. \nTechnologies Used :- Javascript, CSS3",
            links: [
                {
                    link: "https://www.linkedin.com/in/shridhar-rai-091859178/",
                    icon: <LinkedInIcon />
                },
                {
                    link: "https://github.com/shridharrai/TicketManager/tree/master",
                    icon: <GitHubIcon />
                },
                {
                    link: "https://festive-colden-e2af9b.netlify.app/",
                    icon: <LiveTv />
                }
            ]
        },

        {
            tag: "Javascript",
            images: [
                "https://user-images.githubusercontent.com/50835817/62414383-151a9c00-b638-11e9-8a4e-6ac33ed6ec9f.PNG",
                "https://user-images.githubusercontent.com/50835817/62414452-24e6b000-b639-11e9-97f4-249cfdc42fd8.PNG",
                "https://user-images.githubusercontent.com/50835817/62414366-ea304800-b637-11e9-9b69-71508a84d087.PNG",
                "https://user-images.githubusercontent.com/50835817/62414371-f916fa80-b637-11e9-9db2-aac9e4185709.PNG",
                "https://user-images.githubusercontent.com/50835817/62414454-316b0880-b639-11e9-8cd3-11d463f7f750.PNG",
                "https://user-images.githubusercontent.com/50835817/62414457-3af47080-b639-11e9-931a-e650cac9abba.PNG"
            ],
            title: "Online Shop",
            caption: "A Online shop app with both admin and user panel",
            description: "Having Admin panel to add, delete, update, save, search, sort, load the products for selling. Then on user panel users can see the products uploaded by admin for buying purpose. Add to Cart feature.\nTechnologies Used :- Javascript, Bootstrap, Firebase",
            links: [
                {
                    link: "https://www.linkedin.com/in/shridhar-rai-091859178/",
                    icon: <LinkedInIcon />
                },
                {
                    link: "https://github.com/shridharrai/OnlineShop",
                    icon: <GitHubIcon />
                },
                {
                    link: "https://shridharrai.github.io/OnlineShop/",
                    icon: <LiveTv />
                }
            ]
        },

        {
            tag: "Java",
            images: [
                "https://user-images.githubusercontent.com/50835817/71300678-1a953a80-23bd-11ea-957f-ac29fe3d6a70.PNG",
                "https://user-images.githubusercontent.com/50835817/71300737-ad35d980-23bd-11ea-9932-a26cc9999801.PNG",
                "https://user-images.githubusercontent.com/50835817/71300766-f554fc00-23bd-11ea-9614-23a13f802b8d.PNG",
                "https://user-images.githubusercontent.com/50835817/71300782-246b6d80-23be-11ea-96cb-4e3c28750b66.PNG",
                "https://user-images.githubusercontent.com/50835817/71300811-62689180-23be-11ea-958d-67322918c717.PNG",
                "https://user-images.githubusercontent.com/50835817/71300826-8deb7c00-23be-11ea-94a1-aa30462eaa4a.PNG",
                "https://user-images.githubusercontent.com/50835817/71300850-cb500980-23be-11ea-98cf-4c1be1a67cf3.PNG",
                "https://user-images.githubusercontent.com/50835817/71300865-0fdba500-23bf-11ea-93ba-468f6f3c3e1e.PNG",
                "https://user-images.githubusercontent.com/50835817/71300882-40bbda00-23bf-11ea-84e6-f05e7a95dd5a.PNG",
                "https://user-images.githubusercontent.com/50835817/71300901-76f95980-23bf-11ea-9af6-a299e6a5ac9b.PNG",
                "https://user-images.githubusercontent.com/50835817/71300939-b1fb8d00-23bf-11ea-87b4-50b0f6339fc5.PNG",
                "https://user-images.githubusercontent.com/50835817/71300969-e8d1a300-23bf-11ea-98d4-e7e5678310fd.PNG"
            ],
            title: "ClassMarker",
            caption: "A Test Engine App",
            description: "There are three users admin, teacher and student. Teacher can create test and assign it to students and students can attempt the test and then result is calculated.\nTechnologies Used :- Struts, JSP, MySQL",
            links: [
                {
                    link: "https://www.linkedin.com/in/shridhar-rai-091859178/",
                    icon: <LinkedInIcon />
                },
                {
                    link: "https://github.com/shridharrai/ClassMarker-Application/tree/initial",
                    icon: <GitHubIcon />
                },
                {
                    link: "https://user-images.githubusercontent.com/32667635/73238022-796c8180-41bd-11ea-8c21-34927e017d08.gif",
                    icon: <LiveTv />
                }
            ]
        },

        {
            tag: "Java",
            images: [
                "https://user-images.githubusercontent.com/50835817/62516194-03a4e000-b842-11e9-8423-b8d010d6616c.PNG",
                "https://user-images.githubusercontent.com/50835817/62516281-436bc780-b842-11e9-9398-2ad2e1a5bad0.PNG"
            ],
            title: "ToDoList",
            caption: "A App to maintain the daily todo's of users.",
            description: "Users can add, delete, search, update, sort, finish the tasks.\nTechnologies Used :- Servlet, JSP, Mysql",
            links: [
                {
                    link: "https://www.linkedin.com/in/shridhar-rai-091859178/",
                    icon: <LinkedInIcon />
                },
                {
                    link: "https://github.com/shridharrai/ToDoList",
                    icon: <GitHubIcon />
                },
                {
                    link: "https://github.com/shridharrai/ToDoList",
                    icon: <LiveTv />
                }
            ]
        },

        {
            tag: "Java",
            images: [
                "https://raw.githubusercontent.com/shridharrai/FightingGame/master/src/com/shridhar/Game1.PNG",
                "https://raw.githubusercontent.com/shridharrai/FightingGame/master/src/com/shridhar/Game2.PNG",
                "https://raw.githubusercontent.com/shridharrai/FightingGame/master/src/com/shridhar/Game3.PNG",
                "https://raw.githubusercontent.com/shridharrai/FightingGame/master/src/com/shridhar/Game5.PNG",
                "https://raw.githubusercontent.com/shridharrai/FightingGame/master/src/com/shridhar/Game4.PNG"
            ],
            title: "Street Fighter",
            caption: "A 2D fighting game",
            description: "There is a splash screen and use sprite effects for kick and punch also there is feature for background move and collision effect and also use jacomp3 jar for background music.\nTechnologies Used :- Java, Swing GUI",
            links: [
                {
                    link: "https://www.linkedin.com/in/shridhar-rai-091859178/",
                    icon: <LinkedInIcon />
                },
                {
                    link: "https://github.com/shridharrai/FightingGame",
                    icon: <GitHubIcon />
                },
                {
                    link: "https://github.com/shridharrai/FightingGame",
                    icon: <LiveTv />
                }
            ]
        },

        {
            tag: "Static Websites",
            images: [
                "https://user-images.githubusercontent.com/50835817/147398388-a6b0bf47-d51e-4b81-8259-202c96874d9c.png",
                "https://user-images.githubusercontent.com/50835817/147398390-58f83808-bdb2-4dff-80b3-86084b72fb59.png",
                "https://user-images.githubusercontent.com/50835817/147398393-d56e29b6-3280-4b7c-9c15-e761705a95b7.png",
                "https://user-images.githubusercontent.com/50835817/147398396-d2128205-a488-4d7b-9d2b-2f832d2c49b3.png",
                "https://user-images.githubusercontent.com/50835817/147398397-e5dc2c7b-c1c4-43e7-9a3a-a3db27265e75.png"
            ],
            title: "Netflix",
            caption: "Clone the Netflix landing page.",
            description: "Re-create the Netflix landing page.Use modern CSS3 techniques like Grid, Flex, overlays, shadows, etc.\nTechnologies Used :- Javascript, Html, CSS3",
            links: [
                {
                    link: "https://www.linkedin.com/in/shridhar-rai-091859178/",
                    icon: <LinkedInIcon />
                },
                {
                    link: "https://github.com/shridharrai/NetflixLandingPage",
                    icon: <GitHubIcon />
                },
                {
                    link: "https://quizzical-saha-449f2d.netlify.app/",
                    icon: <LiveTv />
                }
            ]
        },

        {
            tag: "Static Websites",
            images: [
                "https://user-images.githubusercontent.com/50835817/147398591-4d24fde9-e6a1-4ad8-baa1-ed3a77a7dade.png",
                "https://user-images.githubusercontent.com/50835817/147398623-854ee0f5-6800-444f-ab4e-29fcaeba36df.png",
                "https://user-images.githubusercontent.com/50835817/147398626-6bf02285-f488-4003-92dc-89acac80fc73.png",
                "https://user-images.githubusercontent.com/50835817/147398634-3554fac9-324f-43bc-b080-4b8de34cda6e.png",
                "https://user-images.githubusercontent.com/50835817/147398640-c98c4e11-a59a-4959-a2d1-467cc6d7cbd0.png"
            ],
            title: "LoopLap",
            caption: "LoopLap theme using bootstrap utilities classes.",
            description: "LoopLap theme using bootstrap utilities classes ie. grid, flexbox, modals, cards, forms, navbar, buttons.\nTechnologies Used :- Html, CSS3, Bootstrap",
            links: [
                {
                    link: "https://www.linkedin.com/in/shridhar-rai-091859178/",
                    icon: <LinkedInIcon />
                },
                {
                    link: "https://github.com/shridharrai/LoopLap",
                    icon: <GitHubIcon />
                },
                {
                    link: "https://amazing-hawking-54515f.netlify.app/index.html",
                    icon: <LiveTv />
                }
            ]
        },

        {
            tag: "Static Websites",
            images: [
                "https://user-images.githubusercontent.com/50835817/147400302-cea77461-0576-4f6d-9cc7-beaabdf5bb0f.png",
                "https://user-images.githubusercontent.com/50835817/147400308-e2cdf95d-8097-41f7-95dd-50b677f04a8a.png",
                "https://user-images.githubusercontent.com/50835817/147400312-93f991de-a613-493e-9d7b-0254f302a1d5.png",
                "https://user-images.githubusercontent.com/50835817/147400320-324811e1-cf14-4aef-b1bc-84cc689a186e.png",
                "https://user-images.githubusercontent.com/50835817/147400327-9d5fa886-8c66-4173-a0b2-be376d90251a.png",
                "https://user-images.githubusercontent.com/50835817/147400333-2b969397-9aa1-43e1-b01c-097f35016a94.png",
                "https://user-images.githubusercontent.com/50835817/147400336-3c2a4731-92ca-49d2-8c38-8bf6fa44ef9d.png",
                "https://user-images.githubusercontent.com/50835817/147400340-352ba38a-99ab-4ee7-bf8a-abb970d10c8c.png"
            ],
            title: "Loruki-website",
            caption: "Fake Cloud hosting Website.",
            description: "Static clone of cloud hosting website.\nTechnologies Used :- Html, CSS3, Animations",
            links: [
                {
                    link: "https://www.linkedin.com/in/shridhar-rai-091859178/",
                    icon: <LinkedInIcon />
                },
                {
                    link: "https://github.com/shridharrai/loruki-website",
                    icon: <GitHubIcon />
                },
                {
                    link: "https://nervous-panini-4835b9.netlify.app/index.html",
                    icon: <LiveTv />
                }
            ]
        },

        {
            tag: "Static Websites",
            images: [
                "https://user-images.githubusercontent.com/50835817/147406054-4499435f-6e97-4d58-97cf-9c3de9c4f1dc.png",
                "https://user-images.githubusercontent.com/50835817/147406074-b7412d79-4dd6-4189-9ce6-f79bc82890ae.png"
            ],
            title: "Portfolio",
            caption: "A Book Portfolio Website.",
            description: "A Book Portfolio.\nTechnologies Used :- Html, CSS3, Animations",
            links: [
                {
                    link: "https://www.linkedin.com/in/shridhar-rai-091859178/",
                    icon: <LinkedInIcon />
                },
                {
                    link: "https://github.com/shridharrai/shridharrai.github.io",
                    icon: <GitHubIcon />
                },
                {
                    link: "https://shridharrai.github.io/",
                    icon: <LiveTv />
                }
            ]
        },

        
    ]
}
