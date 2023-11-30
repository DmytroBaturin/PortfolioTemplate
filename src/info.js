const linkButton = './assets/images/button/'
const linkSelections = './assets/images/selections/'
const linkPlus = './assets/images/plus/'

const info = {
    buttons: {
        github: {
            text: 'Github',
            link: 'https://github.com/DmytroBaturin',
            img: `${linkButton}github.svg`,
        },
        linkedIn: {
            text: 'LinkedIn',
            link: 'https://github.com/DmytroBaturin',
            img: `${linkButton}linkedin.svg`,
        },
        mail: {
            text: 'Mail',
            link: 'https://github.com/DmytroBaturin',
            img: `${linkButton}mail.svg`,
        },
    },
    plus: {
        figma: {
            title: 'Figma',
            img: `${linkPlus}figma.svg`,
            description: 'I make all website designs here'
        },
        photoshop: {
            title: 'Photoshop',
            img: `${linkPlus}photoshop.svg`,
            description: 'I do all bitmap graphics here'
        },
        illustrator: {
            title: 'Illustrator',
            img: `${linkPlus}illustrator.svg`,
            description: 'I make logos right here'
        },
    },
    skills: {
        React: {
            name: 'React JS',
            img: `${linkSelections}react-native.svg`,
        },
        html: {
            name: 'HTML',
            img: `${linkSelections}html.svg`,
        },
        sass: {
            name: 'SASS',
            img: `${linkSelections}sass.svg`,
        },
        css: {
            name: 'CSS',
            img: `${linkSelections}css.svg`,
        },
        express: {
            name: 'Express',
            img: `${linkSelections}express.svg`,
        },
        figma: {
            name: 'Figma',
            img: `${linkSelections}figma.svg`,
        },
        git: {
            name: 'Git',
            img: `${linkSelections}github.svg`,
        },
        js: {
            name: 'JavaScript',
            img: `${linkSelections}javascript.svg`,
        },
        docker: {
            name: 'Docker',
            img: `${linkSelections}docker.svg`,
        },
        mongo: {
            name: 'MongoDB',
            img: `${linkSelections}database.svg`,
        },
    },
    myprojects: {
        forum: {
            title: 'Forum',
            description: 'My Forum project using a [SASS, JS, MongoDB, React, ReduxTK, Express, Node JS, NPM, Docker], with session auth 👀',
            link: 'https://github.com/DmytroBaturin/Forum',
            stack: [
                'Router', 'Sass', 'MongoDB', 'Docker', 'ReduxTK', 'React', 'Express'
            ]
        },
        oranizer: {
            title: 'Oranizer',
            description: 'This is a web-based organizer application developed with mockapi for backend simulation. Designed to be responsive, it efficiently works across various devices.',
            link: 'https://github.com/DmytroBaturin/Organizer',
            stack: [
                'Router','Sass', 'ReduxTK', 'React', 'MockApi'
            ]
        },
        ukland: {
            title: 'UKLAND',
            description: 'Site for minecraft server, first e-commerce project, with my design',
            link: 'https://ukland.net/',
            stack: [
                'Router','Sass','ReduxTK', 'React', 'UI/UX'
            ]
        }
    },
    about:{
        text: 'I\'m Dmytro, I\'m 18, I live in Poland, although I was born in Ukraine. Every day, I\'ve been improving my programming skills for like 2 years now and I\'m not stopping. For the most part, I am a frontend developer, but I also develop in the backend. If you\'re here, it means you need something, so don\'t worry, write me!'
    }
}

export default info