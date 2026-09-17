const readline = require('readline');

// Interface for reading input from the terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Array to store the tasks
const tasks = [];

// Function to display the main menu options
function showMenu() {
    console.log('\n--- TO-DO LIST MENU ---');
    console.log('1. View All Tasks');
    console.log('2. Add a Task');
    console.log('3. Exit');

    rl.question('\nChoose an option (1-3): ', handleMenuInput);
}

// Function to process user menu choices
function handleMenuInput(choice) {
    switch (choice.trim()) {
        case '1':
            viewTasks();
            showMenu();
            break;
        case '2':
            addTaskPrompt();
            break;
        case '3':
            console.log('\nGoodbye! Have a productive day!');
            rl.close();
            break;
        default:
            console.log('\n❌ Invalid choice! Please enter 1, 2, or 3.');
            showMenu();
            break;
    }
}

// Function to print all current tasks
function viewTasks() {
    console.log('\n=== YOUR TASKS ===');
    if (tasks.length === 0) {
        console.log('(No tasks added yet. Your list is clean!)');
    } else {
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. [ ] ${task}`);
        });
    }
}

// Function to prompt user to enter a new task
function addTaskPrompt() {
    rl.question('\nEnter the task description: ', (task) => {
        const cleanedTask = task.trim();

        if (cleanedTask === '') {
            console.log('❌ Task cannot be empty!');
        } else {
            tasks.push(cleanedTask);
            console.log(`✅ Success: "${cleanedTask}" has been added!`);
        }

        showMenu(); // Return to the main menu
    });
}

// Start the application
showMenu();
