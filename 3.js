// Function to calculate PAYE  tax based on basic salary
function calculatePayee(basicSalary) {
    let payee; // Variable to hold the calculated PAYE tax
    // Determine the tax based on the salary brackets
    if (basicSalary <= 24000) {
        payee = basicSalary * 0.1; // 10% for up to KSh 24,000
    } else if (basicSalary <= 32333) {
        payee = 2400 + (basicSalary - 24000) * 0.25; // 25% for 24,001 to 32,333
    } else {
        // 30% tax for salary above KSh 32,333
        payee = 2400 + (32333 - 24000) * 0.25 + (basicSalary - 32333) * 0.3;
    }
    return payee; // Return the calculated PAYE tax
}

// Function to calculate NHIF deductions based on basic salary
function calculateNHIF(basicSalary) {
    // Determine NHIF deductions based on salary brackets
    if (basicSalary <= 5999) return 150; // Fixed rate for salaries up to 5,999
    else if (basicSalary <= 7999) return 300; // Fixed rate for salaries up to 7,999
    else if (basicSalary <= 11999) return 400; // Fixed rate for salaries up to 11,999
    else if (basicSalary <= 14999) return 500; // Fixed rate for salaries up to 14,999
    else if (basicSalary <= 19999) return 600; // Fixed rate for salaries up to 19,999
    else if (basicSalary <= 24999) return 750; // Fixed rate for salaries up to 24,999
    else if (basicSalary <= 29999) return 850; // Fixed rate for salaries up to 29,999
    else if (basicSalary <= 34999) return 900; // Fixed rate for salaries up to 34,999
    else if (basicSalary <= 39999) return 950; // Fixed rate for salaries up to 39,999
    else if (basicSalary <= 44999) return 1000; // Fixed rate for salaries up to 44,999
    else if (basicSalary <= 49999) return 1100; // Fixed rate for salaries up to 49,999
    else if (basicSalary <= 59999) return 1200; // Fixed rate for salaries up to 59,999
    else if (basicSalary <= 69999) return 1300; // Fixed rate for salaries up to 69,999
    else return 1500; // Fixed rate for salaries above 69,999
}

// Function to calculate NSSF  deductions based on basic salary
function calculateNSSF(basicSalary) {
    return basicSalary * 0.06; // 6% of basic salary as NSSF deduction
}

// Function to calculate the net salary, gross salary, and deductions
function calculateNetSalary(basicSalary, benefits) {
    // Calculate gross salary by summing basic salary and benefits
    const grossSalary = basicSalary + benefits;
    // Calculate PAYE tax based on the basic salary
    const payee = calculatePayee(basicSalary);
    // Calculate NHIF deduction based on the basic salary
    const nhif = calculateNHIF(basicSalary);
    // Calculate NSSF deduction based on the basic salary
    const nssf = calculateNSSF(basicSalary);

    // Calculate net salary by subtracting total deductions from gross salary
    const netSalary = grossSalary - (payee + nhif + nssf);

    // Return an object containing all calculated values
    return {
        grossSalary,
        payee,
        nhif,
        nssf,
        netSalary
    };
}

// Example usage of the calculateNetSalary function
const basicSalary = 65000; // Example basic salary
const benefits = 6000; // Example benefits

// Call the function to calculate salary details
const salaryDetails = calculateNetSalary(basicSalary, benefits);

// Output the salary breakdown to the console
console.log("Salary Breakdown:");
console.log(`Gross Salary: KSh ${salaryDetails.grossSalary.toFixed(2)}`); // Display gross salary
console.log(`PAYE Tax: KSh ${salaryDetails.payee.toFixed(2)}`); // Display PAYE tax
console.log(`NHIF Deduction: KSh ${salaryDetails.nhif.toFixed(2)}`); // Display NHIF deduction
console.log(`NSSF Deduction: KSh ${salaryDetails.nssf.toFixed(2)}`); // Display NSSF deduction
console.log(`Net Salary: KSh ${salaryDetails.netSalary.toFixed(2)}`); // Display net salary
