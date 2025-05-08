// script.js

// Function to append value to display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    
    // Check if the value is a decimal point
    if (value === '.') {
        // Get the current input
        const currentInput = display.value;
        
        // Check if the last number already contains a decimal point
        const lastNumber = currentInput.split(/[\+\-\*\/%]/).pop(); // Get the last number entered
        if (lastNumber.includes('.')) {
            return; // If it already has a decimal point, do nothing
        }
    }
    
    // Append the value to the display
    display.value += value;
}

// Function to remove the last character from the display
function removeLastCharacter() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1); // Remove the last character
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to calculate the result
function calculateResult() {
    let display = document.getElementById('display').value;
    try {
        // Handle square operation
        if (display.includes('**2')) {
            let number = display.split('**2')[0];
            display = Math.pow(parseFloat(number), 2);
        } else {
            // Evaluate the expression using eval
            let result = eval(display);
            // Ensure the result is a number
            if (isNaN(result)) {
                throw new Error("Invalid calculation");
            }
            document.getElementById('display').value = result;
        }
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
/*

// script.js

// Function to append value to display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    
    // Check if the value is a decimal point
    if (value === '.') {
        // Get the current input
        const currentInput = display.value;
        
        // Check if the last number already contains a decimal point
        const lastNumber = currentInput.split(/[\+\-\*\/%]/).pop(); // Get the last number entered
        if (lastNumber.includes('.')) {
            return; // If it already has a decimal point, do nothing
        }
    }
    
    // Append the value to the display
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to calculate the result
function calculateResult() {
    let display = document.getElementById('display').value;
    try {
        // Handle square operation
        if (display.includes('**2')) {
            let number = display.split('**2')[0];
            display = Math.pow(parseFloat(number), 2);
        } else {
            // Evaluate the expression using eval
            let result = eval(display);
            // Ensure the result is a number
            if (isNaN(result)) {
                throw new Error("Invalid calculation");
            }
            document.getElementById('display').value = result;
        }
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}*/

