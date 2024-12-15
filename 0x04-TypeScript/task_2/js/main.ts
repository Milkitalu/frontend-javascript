
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