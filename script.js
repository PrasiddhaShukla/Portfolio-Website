const projects = [
    {
        title: "Data-Driven-Football-Scouting-System using Tkinter and MySQL",
        description: "Developed a football scouting system that analyzes 100+ player statistics for 2000+ players to match them with specific managerial playstyles.\n"+
        "Designed and implemented a MySQL database for efficient storage and retrieval of player data.\n"+
        "Integrated Python (Pandas, NumPy, SQLAlchemy) for data processing and Tkinter for an interactive GUI.\n"+
        "Enabled seamless CSV data import and query execution through MySQL Workbench.\n"+
        "Built advanced filtering and search functionalities to help scouts identify optimal players.\n"+
        "Built advanced filtering and search functionalities to help scouts identify optimal players.",
        link: "https://github.com/PrasiddhaShukla/Data-Driven-Football-Scouting-System"
    },
    { 
        title: "Login-Credentials-JS", 
        description: "Implemented a secure login system with user authentication and validation.\n"+
        "Developed an interactive ordering system with consumption method selection and cost calculation.\n"+
        "Integrated tax and delivery fee computation for accurate billing.\n"+
        "Designed a balance management system with deposit options and constraints.\n"+
        "Ensured error handling and user-friendly interactions with input validation and prompts.",
        link: "https://github.com/PrasiddhaShukla/Login-Credentials-JS"
    },
    { 
        title: "Bill-Generator-Py", 
        description: "Developed a Python-based billing system using Pandas to streamline invoice generation for customers.\n"+
        "Designed an interactive CLI-based interface to process orders across multiple product categories (Dairy, Frozen Food, Stationery, Sports).\n"+
        "Implemented CSV-based product database management, enabling efficient data retrieval and processing.\n"+
        "Integrated dynamic tax calculation based on location (interzonal, interstate, international) to ensure accurate billing.\n"+
        "Automated invoice generation with a structured tax invoice format, including product details, quantities, prices, and applicable taxes.\n"+
        "Ensured user-friendly experience with error handling and validation checks for input accuracy.",
        link: "https://github.com/PrasiddhaShukla/Bill-Generator-Py"
    },
    { 
        title: "Working Calculator using Tkinter", 
        description: "Developed a fully functional calculator with error handling for accurate arithmetic operations.\n"+
        "Implemented input validation to prevent invalid operations and enhance user experience.\n"+
        "Designed an interactive menu-driven interface for seamless usability.",
    }
];



let currentIndex = 0;
const projectsPerPage = 3;

function loadProjects() {
    const projectList = document.getElementById('project-list');
    for (let i = 0; i < projectsPerPage; i++) {
        if (currentIndex >= projects.length) {
            document.getElementById('load-more').style.display = 'none';
            break;
        }
        const project = projects[currentIndex];
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';
        projectDiv.innerHTML = `
            <h3><a href="${project.link}" target="_blank">${project.title}</a></h3>
            <p>${project.description}</p>
        `;
        projectList.appendChild(projectDiv);
        currentIndex++;
    }
}


document.getElementById('load-more').addEventListener('click', loadProjects);
loadProjects();

// Contact Form Validation
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let status = document.getElementById('form-status');

    if (name === '' || email === '' || message === '') {
        status.innerText = "Please fill in all fields!";
        status.style.color = "red";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        status.innerText = "Please enter a valid email!";
        status.style.color = "red";
    } else {
        status.innerText = "Message sent successfully!";
        status.style.color = "green";
        document.getElementById('contact-form').reset();
    }
});

// Theme Toggle
document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    this.innerText = document.body.classList.contains('dark-mode') ? 'light mode' : 'dark mode';
});

// Responsive Navbar
document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('nav-links').classList.toggle('show');
});
