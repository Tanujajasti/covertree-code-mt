const departments = ["Finance","Advertising","Security","HR","Support"]

export function validateNewEmployeeRequest(newEmployeeRequest: any){
	validateName(newEmployeeRequest.body['firstname'], newEmployeeRequest.body['lastname'])
	validateDoj(newEmployeeRequest.body['doj'])
	validateDob(newEmployeeRequest.body['dob'])
	validateSalary(newEmployeeRequest.body['salary'])
	validateTitle(newEmployeeRequest.body['title'])
	validateDepartment(newEmployeeRequest.body['department'])
}

function validateName(firstname: string, lastname: string){
	// We can add one more check to verify if name does not have special characters
	if(firstname == null || firstname === "")
		throw new Error("Employee first name not valid")
	else if(lastname == null || lastname === "")
		throw new Error("Employee last name not valid")
	else
		return
}

function validateDoj(doj: string){
	if(doj == null || doj === "" || !validateDate(doj))
		throw new Error("Employee date of joining not valid. It has to be in MM/DD/YYYY format")
}

function validateDob(dob: string){
	if(dob == null || dob === "" || !validateDate(dob))
		throw new Error("Employee date of birth not valid")
}

function validateSalary(salary: string){
	if(salary == null || salary === "" || !/\d/.test(salary))
		throw new Error("Employee salary not valid")
}

function validateDepartment(department: string){
	if(department == null || department === "" || !departments.includes(department))
		throw new Error("Employee department not valid. Department has to be one of "+departments.toString())
}

function validateTitle(title: string){
	if(title == null || title === "")
		throw new Error("Employee title not valid")	
}

// Date format MM/DD/YYYY
function validateDate(date: string){
	let dateformat = /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])[\/]\d{4}$/;

    // Matching the date through regular expression      
    if (date.match(dateformat)) {
        let operator = date.split('/');

        // Extract the string into month, date and year      
        var datepart: any[] = [];
        if (operator.length > 1) {
            datepart = date.split('/');
        }
        let month = parseInt(datepart[0]);
        let day = parseInt(datepart[1]);
        let year = parseInt(datepart[2]);

        // Create a list of days of a month      
        let ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (month == 1 || month > 2) {
            if (day > ListofDays[month - 1]) {
                //to check if the date is out of range     
                return false;
            }
        } else if (month == 2) {
            let leapYear = false;
            if ((!(year % 4) && year % 100) || !(year % 400)) leapYear = true;
            if ((leapYear == false) && (day >= 29)) return false;
            else
                if ((leapYear == true) && (day > 29)) {
                    console.log('Invalid date format!');
                    return false;
                }
        }
    } else {
        console.log("Invalid date format!");
        return false;
    }
    return true;
}