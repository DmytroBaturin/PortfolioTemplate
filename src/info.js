const linkButton = './assets/images/button/'
const linkSelections = './assets/images/selections/'
const linkPlus = './assets/images/plus/'

const info = {
    mainPageInfo: {
        h1: 'Hello, i’m Dmytro',
        h1span: 'FrontEnd Developer.',
        p: 'I am a young front-end developer who improves my skills every day, both in design and development. Write to me if you need anything',
        footerEmail: 'dbaturin02@gmail.com',
    },
    buttons: {
        github: {
            text: 'Github',
            link: 'https://github.com/DmytroBaturin',
            img: `${linkButton}github.svg`,
        },
        linkedIn: {
            text: 'LinkedIn',
            link: 'https://www.linkedin.com/in/dmytro-baturin/',
            img: `${linkButton}linkedin.svg`,
        },
        mail: {
            text: 'Mail',
            link: 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCHrkWHsnVWKQVnGLJSzmBgGZnNCfqDgZTdHBJpWmsxjXScfDnvsbwwMLvHwvwKZhcmdtzMg',
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
        NextJS: {
            name: 'Next JS',
            img: `${linkSelections}nextjs.svg`,
        },
        React: {
            name: 'React JS',
            img: `${linkSelections}react-native.svg`,
        },
        html: {
            name: 'HTML',
            img: `${linkSelections}html.svg`,
        },
        typescript: {
            name: 'TypeScript',
            img: `${linkSelections}typescript.svg`,
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
            title: 'Organizer',
            description: 'This is a web-based organizer application developed with mockapi for backend simulation. Designed to be responsive, it efficiently works across various devices.',
            link: 'https://github.com/DmytroBaturin/Organizer',
            stack: [
                'Router','Sass', 'ReduxTK', 'React', 'MockApi'
            ]
        },
        TSExample: {
            title: 'TSExample',
            description: 'TS, Tailwind, Zustand practices...',
            link: 'https://github.com/DmytroBaturin/TSExample',
            stack: [
                'Zustand','FSD','TailWind', 'React', 'TypeScript'
            ]
        },
        portfolio: {
            title: 'Portfolio',
            description: 'This repository houses a portfolio website project that features a simple yet sophisticated presentation site with engaging animations and a unique UI/UX design.',
            link: 'https://github.com/DmytroBaturin/Dmytro',
            stack: [
                'Sass','ReduxTK', 'Vite', 'React', 'UI/UX'
            ]
        }
    },
    about:{
        text: 'Hi! My name is Dmytro, and I\'m 18 years old. I from Ukraine. I\'ve been actively improving my programming skills for two years now and have no plans to stop. Mostly, I work as a frontend developer, but I also do backend development. If you\'re here, it means you need something, so don\'t hesitate, just write to me!'
    }
}

export default info