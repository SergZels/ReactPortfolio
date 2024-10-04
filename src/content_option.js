const logotext = "ZelseSoft";
const meta = {
    title: "Portfolio Sergey Zelinskii",
    description: "I am a chatbot developer. I love creating beautiful and functional Telegram bots!",
};

const introdata = {
    title: "Sergey Zelinskii",
    animated: {
        first: "I love coding",
        second: "I code cool bots",
        third: "I develop CRM",
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
        name: "Aiogram",
        value: 90,
    },
    {
        name: "Django",
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
        name: "Postgresql | Sqlite",
        value: 60,
    },
    {
        name: "SQL | aiosqlite | sqlite3",
        value: 70,
    },
   
    {
        name: "SQLAlchemy | Peewee | Django ORM ",
        value: 60,
    },
    {
        name: "HTML | CSS | Bootstrap",
        value: 60,
    },
    {
        name: "Javascript",
        value: 50,
    },
    {
        name: "HTMX | Alpine js",
        value: 50,
    },
    {
        name: "React | MUI",
        value: 40,
    },
 

    {
        name: "GO (Gin)",
        value: 40,
    },
    {
        name: "PHP",
        value: 30,
    },
    {
        name: "Java",
        value: 20,
    },
    {
        name: "VBA (Exel, Access)",
        value: 80,
    },
    {
        name: "Make.com",
        value: 70,
    },
    {
        name: "Docker (Docker-compose) | Nginx | Linux ",
        value: 60,
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
        description: `Telegram bot`,
        link: "/Project1",

    },
    {
        img: "https://zelse.asuscomm.com/PortfolioStatic/Bybit/1.jpg",
        description: "Bybit copy Trading (GOlang)",
        link: "#",
    },
    {
        img: "https://www.upwork.com/att/download/portfolio/persons/uid/1662865922213687296/profile/projects/files/5f026fe2-5af0-47cc-8636-d747bda3189b",
        description: "Large custom CRM for a phone repair shop",
        link: "/Project2",

    },
 
    {
        img: "https://zelse.asuscomm.com/PortfolioStatic/dEditBot/1.png",
        description: "dEdit bot",
        link: "#",
    },
    {
        img: "https://zelse.asuscomm.com/PortfolioStatic/Prokat/1.jpeg",
        description: "Стара кастомна CRM в Exel для с",
        link: "#",
    },
    {
        img: "https://zelse.asuscomm.com/PortfolioStatic/Atele/1.jpeg",
        description: "Old custom CRM for my family biznes",
        link: "#",
    },
    {
        img: "https://www.upwork.com/att/download/portfolio/persons/uid/1662865922213687296/profile/projects/files/3149f402-155f-4f53-a4bb-7c26d562dafd",
        description: "Pet project",
        link: "/CzechBeads",
    },
    {
        img: "https://www.upwork.com/att/download/portfolio/persons/uid/1662865922213687296/profile/projects/files/a003ede0-8e96-4c43-9b31-cda8a1663d45",
        description: "Smart Bot for my family biznes (Viber) ",
        link: "/OrxidBot",
    },
    {
        img: "https://zelse.asuscomm.com/PortfolioStatic/Gingr/1.jpg",
        description: "Data Analist project",
        link: "/OrxidBot",
    },
    {
        img: "https://www.upwork.com/att/download/portfolio/persons/uid/1662865922213687296/profile/projects/files/6d8a6e38-0a86-485d-b334-1901fbd1ebac",
        description: "Bot for my family biznes",
        link: "/OrxidBot",
    },
    {
        img: "https://zelse.asuscomm.com/PortfolioStatic/BiznesStatistic/1.jpg",
        description: `Accounting software for my family business`,
        link: "/OrxidBot",
    },
    {
        img: "https://www.upwork.com/att/download/portfolio/persons/uid/1662865922213687296/profile/projects/files/6a9bde64-f1d8-40eb-899c-1564275b18ef",
        description: `Shop for sale eSim (Make.com)`,
        link: "/OrxidBot",
    },
    {
        img: "https://www.upwork.com/att/download/portfolio/persons/uid/1662865922213687296/profile/projects/files/5b266142-31c5-4288-adf2-709235a520e7",
        description: ` A small project on Flask`,
        link: "/OrxidBot",
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