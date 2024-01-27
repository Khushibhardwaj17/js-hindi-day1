/*var emp=new Object();  
emp.id=101;  
emp.name="Ravi Malik";  
emp.salary=50000;  
console.log(emp.id+" "+emp.name+" "+emp.salary);*/


class emp {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
}  
e=new emp(103,"Vimal Jaiswal",30000);  
console.log(e.id+" "+e.name+" "+e.salary);  