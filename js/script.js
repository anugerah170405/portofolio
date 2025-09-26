document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector("nav button");
    const menuList = document.querySelector("nav .menu-list");
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".nav-bar");
    const overlay = document.querySelector(".overlay");
    const menuLinks = document.querySelectorAll("nav .menu-list a");

    const closeMenu = () => {
        navbar.classList.remove("borderless");
        menuList.classList.remove("show");
        overlay.classList.remove("show");
    };

    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("borderless");
        menuList.classList.toggle("show");
        overlay.classList.toggle("show");
        menuIcon.src = menuList.classList.contains("show") ? "./assets/images/icons/close.svg" : "./assets/images/icons/menu.svg";
    });

    overlay.addEventListener("click", closeMenu);

    menuLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    createProjectCard();
    skillsFilter();
});

const projects_data = [
    {
        title: "Kospedia",
        description: "Kospedia is a platform designed to simplify the process of searching for and renting boarding houses. The prototype was created using Figma, with a strong focus on a user-friendly interface (UI) and an intuitive user experience (UX).",
        image: "./assets/images/kospedia.png",
        tags: ["Figma", "UI", "UX"],
        demoLink: "https://www.figma.com/proto/Z9qv2ckIUZ44itqINvru6s/KosPedia?node-id=0-1&t=mrmuUOBM9kvGP1lm-1",
        codeLink: "https://www.figma.com/proto/Z9qv2ckIUZ44itqINvru6s/KosPedia?node-id=0-1&t=mrmuUOBM9kvGP1lm-1"
    },
    {
        title: "ChessBug",
        description: "ChessBug is a terminal-based chess game developed using the Python programming language. The project uses an Object-Oriented Programming approach and incorporates the Minimax algorithm to create a simple, yet effective, artificial intelligence for the game.",
        image: "./assets/images/chessbug.png",
        tags: ["python", "terminal", "OOP", "minimax"],
        demoLink: "https://colab.research.google.com/drive/18NtDfUMkFKO1PtUVkoDbTPOuidv37yqQ?usp=sharing",
        codeLink: "https://github.com/anugerah170405/Chess"
    },
    {
        title: "Scheduler",
        description: "Scheduler is a mobile application built with Flutter and Dart. Like a standard to-do list app, its primary function is to help users manage their tasks. However, Scheduler offers a unique feature: a 'spin the wheel of fortune' game to help you decide your fate.",
        image: "./assets/images/scheduler.png",
        tags: ["flutter", "dart", "firebase", "mobile"],
        demoLink: "https://github.com/anugerah170405/scheduler.git",
        codeLink: "https://github.com/anugerah170405/scheduler.git"
    },
    
    
];

function createProjectCard() {
    const projectsContainer = document.getElementById("project-cards"); 

    projects_data.forEach(items => {
        const card = document.createElement("div");
        card.className = "card";
        const tags = items.tags.map(tag => `<span>${tag}</span>`).join('');
        card.innerHTML = `
        <img src="${items.image}" alt="${items.title}" class="projects-card-img" />
            <div class="projects-card-ctx pt24">
                <div>
                    <h4 class="pb16">${items.title}</h4>
                    <p class="pb16">${items.description}</p>
                </div>
                <div>
                    <div class="projects-card-tags pb16">
                        ${tags}
                    </div>
                    <div class="projects-card-btn">
                        <a href="${items.demoLink}" class="btn-secondary btn-icon btn-demo" target="_blank" rel="noopener noreferrer">Demo</a>
                        <a href="${items.codeLink}" class="btn-secondary btn-icon btn-code" target="_blank" rel="noopener noreferrer">Code</a>
                    </div>
                </div>
            </div>`;
        projectsContainer.appendChild(card);
    });
}

const skills_data = [
    {
        title: "Front End",
        skills: [
            { name: "CSS", level: 85 },
            { name: "Bootstrap", level: 78 },
            { name: "Figma", level: 92 },
            { name: "UI", level: 88 },
            { name: "UX", level: 80 }
        ]
    },
    {
        title: "Back End",
        skills: [
            { name: "Python", level: 95 },
            { name: "C#", level: 77 },
            { name: "JavaScript", level: 80 },
            { name: "Dart", level: 75 },
            { name: "SQL", level: 84 }
        ]
    },
    {
        title: "Other Tools",
        skills: [
            { name: "Customer Support", level: 90 },
            { name: "Microsoft Word", level: 93 },
            { name: "Microsoft PowerPoint", level: 91 },
            { name: "Spreadsheet", level: 87 },
            { name: "Trello", level: 79 }
        ]
    }
];

function skillsFilter() {
    const skillsContainer = document.getElementById("skills-cards");

    skills_data.forEach(item => {
        const card = document.createElement("div");
        card.className = "card py20 px20";

        let skillsHtml = `
            <b class="mb16">${item.title}</b>
        `;
        
        item.skills.forEach(skill => {
            skillsHtml += `
                <div class="text-bar">
                    <p>${skill.name}</p>
                    <p>${skill.level}%</p>
                </div>
                <div class="bar">
                    <div class="percent-bar" style="width: ${skill.level}%;"></div>
                </div>
            `;
        });
        
        card.innerHTML = skillsHtml;

        skillsContainer.appendChild(card);
    });
}

function scrollToTarget(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.log("Elemen dengan ID '" + targetId + "' tidak ditemukan.");
    }
}