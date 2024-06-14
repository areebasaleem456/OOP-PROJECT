#! /usr/bin/env node

import inquirer from "inquirer"

console.log("=".repeat(80))
console.log("\n\t Welcome to -Code With Areeba OOP PROJECT\n\t")
console.log("=".repeat(80))

class Student{
    name:string
    constructor(name:string){
        this.name=name
    }
}
class Person{
    student:Student[]=[]
    addstudent(object:Student){
         this.student.push(object)
    }
}
let persons=new Person()
let program_start=async(persons:Person)=>{
do{
    let answer=await inquirer.prompt([
        {
            name:"select",
            type:"list",
            message:"Whom You Want To Interact?",
            choices:["staff","student","exit"]
        }
    ])
    if(answer.select=="staff"){
        console.log("Feel free to ask question here!")
    }
    if(answer.select=="student"){
        let answer=await inquirer.prompt([
            {
                name:"student",
                type:"input",
                message:"Enter the student name you want to engage with?"
            }
        ])
     let student=persons.student.find(val=>val.name==answer.student)
     if(!student){
        let name=new Student(answer.student)
        persons.addstudent(name)
        console.log(`HELLO i am ${name.name}, What you want?`)
        console.log("\n\tNew studnets addded.\n\t")
        console.log("\n\t New studets added:")
        console.log(persons.student)
    }
    if(student){
       console.log(`Hello i am ${student.name} nice to meet you.....`)
    }
 }
 if(answer.select=="exit"){
    console.log("Exiting...")
    process.exit()
 }

}
while(true)
}
program_start(persons)
