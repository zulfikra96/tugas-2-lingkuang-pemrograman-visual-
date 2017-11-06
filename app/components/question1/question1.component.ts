import { Component, OnInit } from '@angular/core'
import { TextField } from "ui/text-field"

@Component({
    selector:'question1-component',
    templateUrl:'./components/question1/question1.component.html', 
    styleUrls:['./components/question1/question1.css']  
})

export class Question1Component implements OnInit{

    public pupil = [
        {name:'zulfikra', routine:'menggambar'},
        {name:'lahmudin', routine:'menulis'},
        {name:'abdjul', routine:'bermain'}        
    ]

    public name = ""
    public routine = ""

    constructor(){
        
    }

    ngOnInit(){
        for(let row in this.pupil){
            console.log(row)
        }
    }

    onNameChange(args){
        let field = <TextField>args.object
        this.name = field.text
    }

    onRoutineChange(args){
        let field = <TextField>args.object
        this.routine = field.text
    }

    

    tambah(){
        let name = {name:this.name,routine:this.routine}
        this.pupil.push(name)
        for(let row in this.pupil){
            console.log(row)
        }
    }
}