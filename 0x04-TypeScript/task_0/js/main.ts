// Definition of the Student interface.
interface Student {
    firstName:string;
    lastName:string;
    age:number;
    location:string;
}

//Creating tow Students.
const student_1: Student = {
    firstName: "Talaku",
    lastName: "Getahun",
    age: 27,
    location: "Addis Abeba"

};

const student_2: Student = {
    firstName: "Ayantu",
    lastName: "Getahun",
    age: 20,
    location: "Adama"

};

//Creating an array containing the two students

const studentsList: Student[] =[student_1, student_2];

// creating Rendering table using vanilla JS

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach(student =>{
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(table);
});

table.appendChild(tbody);
document.body.appendChild(table);

