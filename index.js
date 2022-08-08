const inquirer = require('inquirer');
const fs = require('fs');

// employee model imports
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// template for generating the html
const generatePage = require('./src/page-template');

// array for team to be added to
const team = [];

// prompt manager for their information
const promptManager = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your employee ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your office number?",
            name: "officeNumber"
        }
    ])
    .then(managerData => {
        // create new manager object from prompt answers and push to array
        const {name, id, email, officeNumber} = managerData;
        const manager = new Manager(name, id, email, officeNumber);
        team.push(manager);
        promptEmployee();
    });
};

// prompt to enter team information
const promptEmployee = () => {

    console.log(`
    =================
    Add a New Employee
    =================
    `);

    // select whether to enter engineer or intern
    inquirer.prompt([
        {
            type: "list",
            message: "Add Engineer or Intern to your team?",
            choices: ["Engineer", "Intern", "Neither"],
            name: "role"
        }
    ])
    .then(employee => {
        if (employee.role === "Engineer") {
            inquirer.prompt([
                {
                    type: "input",
                    message: "What is their name?",
                    name: "name"
                },
                {
                    type: "input",
                    message: "What is their employee ID?",
                    name: "id"
                },
                {
                    type: "input",
                    message: "What is their email?",
                    name: "email"
                },
                {
                    type: "input",
                    message: "What is their github?",
                    name: "github"
                }
            ])
            .then(engineerData => {
                // create engineer with answers from prompt and push to array
                const {name, id, email, github} = engineerData;
                const engineer = new Engineer(name, id, email, github);
                team.push(engineer);

                // prompt to add another employee
                promptEmployee();
            });
        }
        else if (employee.role === "Intern") {
            inquirer.prompt([
                {
                    type: "input",
                    message: "What is their name?",
                    name: "name"
                },
                {
                    type: "input",
                    message: "What is their employee ID?",
                    name: "id"
                },
                {
                    type: "input",
                    message: "What is their email?",
                    name: "email"
                },
                {
                    type: "input",
                    message: "What is their school?",
                    name: "school"
                }
            ])
            .then(internData => {
                // create intern with answers from prompt then push to array
                const {name, id, email, school} = internData
                const intern = new Intern(name, id, email, school);
                team.push(intern);

                // prompt to add another employee
                promptEmployee();
            });
        }
        else {
            // write file to dist folder with answers from prompts in the team array through generatePage
            fs.writeFile('./dist/index.html', generatePage(team), err => {
                if(err) {
                    console.log(err);
                } else {
                    console.log("Your team's profile has been generated! Check out in the dist directory!")
                }
            });
        }
    })
}

// initialize app
promptManager();