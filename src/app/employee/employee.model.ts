export class Employee {
    id: number;
    firstname: string;
    lastname: string;
    birthdate : Date;
    gender : string;
    department : string;
    ;
    constructor(id: number, firstname: string, lastname: string ,birthdate: Date, gender : string , department : string) {
      this.id = id;
      this.firstname = firstname;
      this.lastname = lastname;
      this.birthdate = birthdate;
      this.gender = gender;
      this.department = department;
    }
  }