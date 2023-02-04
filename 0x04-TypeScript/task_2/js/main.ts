interface DirectorInterface{
    workFromHome():string,
    getCoffeeBreak() :string,
    workDirectorTasks() :string,
}

interface TeacherInterface{
    workFromHome():string,
    getCoffeeBreak() :string,
    workTeacherTasks() :string,
}

class Director implements DirectorInterface{
    workDirectorTasks(): string {
        return "Working from home"
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break"
    }

    workFromHome(): string {
        return "Getting to director tasks"
    }
}


class Teacher implements TeacherInterface{
    workFromHome(): string {
        return "Cannot work from home"
    }

    getCoffeeBreak(): string {
        return "Cannot have a break"
    }

    workTeacherTasks(): string {
        return "Getting to work"
    }
}

export const createEmployee = (salary:number | string): Director|Teacher=> Number(salary) < 500? new Director: new Teacher;


export function isDirector(employee: TeacherInterface | DirectorInterface): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
  }
  
  export function executeWork(employee: DirectorInterface | TeacherInterface): string {
    let res = undefined;
    (isDirector(employee)) ? res = employee.workDirectorTasks() : res = employee.workTeacherTasks();
    return res;
  }
  type Subjects = "Math" | "History";
  
  export function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
      return "Teaching Math";
    } else if (todayClass === "History") {
      return "Teaching History";
    }
  }
  
  console.log(teachClass("Math"));
  console.log(teachClass("History"));