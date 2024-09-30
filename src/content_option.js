const logotext = "ZelseSoft";
const meta = {
    title: "Portfolio Sergey Zelinskii",
    description: "I am a chatbot developer. I love creating beautiful and functional Telegram bots!",
};

const introdata = {
    title: "Sergey Zelinskii",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop mobile apps",
    },
    description: "I am a chatbot developer. I love creating beautiful and functional Telegram bots!",
    your_img_url: "https://zelse.asuscomm.com/portfolio/img/hero.jpg",
};

const dataabout = {
    title: "Briefly about myself",
    aboutme: `I started programming back in 1997 in Basic.
I had programming experience in languages such as C++, Pascal, Assembler, Prolog, VHDL, Matlab, VBA, Java, PHP.
Now, I'm focused on developing bots in Python using the asynchronous framework aiogram.`,
};
const worktimeline = [
    {
        jobtitle: "Started learning React and GO",
        where: "React and GO",
        date: "2024",
    },
    {
        jobtitle: "2021 - I continue learning and programming in Python language. I use the following frameworks and technologies: aiogram, aiosqlite, aiogram-dialog, peewee, Django, PostgreSQL, Git, docker (docker-compose), Ubuntu 22.04 and others.",
        where: "Python developer",
        date: "2021",
    },
    {
        jobtitle: "In 2020, using PHP, I developed an intelligent chatbot for my own business. I really enjoyed creating bots!",
        where: "The first chat bot",
        date: "2020",
    },
    {
        jobtitle: "In 2016, I spent some time creating apps in Java for Android",
        where: "Mobile apps development",
        date: "2016",
    },
    {
        jobtitle: "In 2012, I developed two large programs for my own business using VBA and SQL languages (under MS Access and Excel)",
        where: "First commercial projects",
        date: "2012",
    },
    {
        jobtitle: "1999 - 2004 while studying at the university - studied the very cool programming language C++, and I wrote some small programs. I also familiarized myself with programming languages such as Assembler, Prolog, VHDL, Matlab at the university",
        where: "Education",
        date: "1999",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Djano",
        value: 70,
    },
    {
        name: "FastAPI",
        value: 60,
    },
    {
        name: "Flask",
        value: 40,
    },
    {
        name: "Javascript",
        value: 60,
    },
    {
        name: "React",
        value: 40,
    },
    {
        name: "Aiogram",
        value: 85,
    },
    {
        name: "SQL",
        value: 60,
    },
    {
        name: "GO",
        value: 40,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
        img: "https://zelse.asuscomm.com/portfolio/img/port1.jpg",
        description: `The bot is written in Python language using microservices architecture and consists of 3 components:
PostgreSQL DB
Backend on Django
Frontend is the bot itself using aiogram`,
link: "/Pr1",
    },
    {
        img: "https://zelse.asuscomm.com/portfolio/img/port2.jpg",
        description: "The bot collects water meter readings and generates an Excel file for the bot operator",
        link: "#",

    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },

    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "sergzels@gmail.com",
    YOUR_FONE: "0961822099",
    description: "Terebovlya, Ternopil Region, 46101, Ukraine",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_af19ua2",
    YOUR_TEMPLATE_ID: "template_4ihr7as",
    YOUR_USER_ID: "YhE6AmdJHiLEcLo3V",
};

const socialprofils = {
  
    github: "https://github.com/SergZels",
    instagram: "https://www.instagram.com/sergzels/",
    linkedin: "https://www.linkedin.com/in/sergzel/",
    youtube: "https://www.youtube.com/channel/UCLmbaTBBpZ5ECVvjOmde7Fg",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};