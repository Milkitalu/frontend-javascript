
//Define DirectorInterface
interface DirectorInterface{
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface{
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

//Implement Director Class
class Director implements DirectorInterface{
    workFromHome(): string {
        return "Working from Home";
    }
    
    getCoffeeBreak(): string {
        return "Getting a coffe break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

// Implement teacher Class
class Teacher implements TeacherInterface{
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeachersTasks(): string{
        return "Getting to work";
    }
}

//Create the createEmployee Function
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
  }
  
  //  Testing
  console.log(createEmployee(200)); // Output: Teacher
  console.log(createEmployee(1000)); // Output: Director
  console.log(createEmployee('$500')); // Output: Director

  // isDirector Function Definition

  function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
  }

  // executeWork Function Definition

  function executeWork(employee: Director | Teacher): void{
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    } else {
        console.log(employee.workTeachersTasks());
    }
  }

const employee1 = createEmployee(200);
executeWork(employee1); // Output: Getting to work

const employee2 = createEmployee(1000);
executeWork(employee2); // Output: Getting to director tasks

// Subjects Type definition

type Subjects = "Math" | "History";

//teachClass Function Definition

function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
      return "Teaching Math";
    } else if (todayClass === "History") {
      return "Teaching History";
    }
  }
  
  // Example usage
  console.log(teachClass("Math")); // Output: Teaching Math
  console.log(teachClass("History")); // Output: Teaching History

  