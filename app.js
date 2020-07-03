// This is the actual program. First, there must be a manager,
// then the user may add as many interns and engineers as they want.
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// The two lines below explain the need for the output folder, and the team.html file.
// team.html is where the answers to the questions are displayed.
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
//The line below connects this to the htmlRenderer.js file.
const render = require("./lib/htmlRenderer");


// Function prompts the user to ask what type of employee you are.
// (Manager is seperate, it is assumed there is one manager.)
function getEmployeeType(){
    return inquirer.prompt([
        {
            type:'list',
            message:`Enter the Employee's role : `,
            choices:['Engineer','Intern'],
            name:'role'
        }

    ]);
}

// each employee type (manager, engineer, or intern) has slightly different information
function getStandardQuestions(role){
    //standard questions to ask all employees. See Employee.js/Employee.test.js
    const standardQuestions = [
        {
            type:'input',
            message:`Name of ${role}: `,
            name:'name'
        },
        {
            type:'input',
            message:`ID# of ${role}: `,
            name:'id'
        },
        {
            type:'input',
            message:`Email for ${role}: `,
            name:'email'
        },
    ];

    let questions;
// Specialized questions for each of the three positions.
// See 10-OOP activities 20 and 21 for examples of subclasses.

    if (role=="Engineer"){
        questions = [...standardQuestions,
        {
            type:'input',
            message:`GitHub for ${role}: `,
            name:'github'
        }]
    }
    else if (role=="Intern"){
        questions = [...standardQuestions,
        {
            type:'input',
            message:`School for ${role}: `,
            name:'school'
        }]
    }
    else if (role=="Manager"){
        questions = [...standardQuestions,
        {
            type:'input',
            message:`Office Number for ${role}: `,
            name:'officeNumber'
        }]
    }

    return inquirer.prompt(questions);
}

// Prompt provides "yes or No" question to restart questions to add another employee.
function addMorePrompt(){
    return inquirer.prompt([
        {
            type:'list',
            message:`Add more users? : `,
            choices:['Yes',"No"],
            name:'confirm'
        }
    ]);
}


async function run(){
    const employees = [];
    let firstRun = true;
    // loop through the employee creation untill the user says do not add more
    do{
        // Write code to use inquirer to gather information about the development team members,
        // The first run must be the Manager, and there can only be one Manager.
        if(!firstRun){
            type = await getEmployeeType();
        }
        else{
            firstRun = false;
            type = {role:"Manager"}
        }

        let data = await getStandardQuestions(type.role);

    // and to create objects for each team member (using the correct classes as blueprints!)
        switch(type.role){
            case 'Engineer':
                employees.push( new Engineer(data.name, data.id, data.email, data.github));
                break;
            case 'Intern':
                employees.push( new Intern(data.name, data.id, data.email, data.school));
                break;
            case 'Manager':
                employees.push( new Manager(data.name, data.id, data.email, data.officeNumber));
                break;
        }

    // If the addMorePrompt function is answered "no", the loop ends.
        var getMore = await addMorePrompt();
    } while (getMore.confirm!= "No");

    //console.log( employees );

    // After the user has input all employees desired, call the `render` function (required
    // above) and pass in an array containing all employee objects; the `render` function will
    // generate and return a block of HTML including templated divs for each employee!

    const html = render(employees);
    //console.log(html);

    // After you have your html, you're now ready to create an HTML file using the HTML
    // returned from the `render` function. Now write it to a file named `team.html` in the
    // `output` folder. You can use the variable `outputPath` above target this location.

    // try and catch serve to report errors. See 09-NodeJS activities 38 and 40 for examples.
    try{
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR);
        }
    }
    catch(err){
        return console.log(err);
    }
    fs.writeFile(outputPath, html, function(err){
        if (err){return console.log(err)}
        console.log("Successfully wrote team.html.");
    })

}

// Line below causes code to actually run, by triggering the above async function. (IMPORTANT)
run();


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
