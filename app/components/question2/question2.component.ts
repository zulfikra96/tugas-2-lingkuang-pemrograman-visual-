import { Component, OnInit } from '@angular/core'
import { TextField } from "ui/text-field"

@Component({
    selector:'question2-component',
    templateUrl:'./components/question2/question2.component.html', 
})

export class Question2Component{


    numb = [30,60]
    entryNumb : number

    add(){
        let numb = this.entryNumb
        this.numb.push(numb)
        console.log(numb)
    }

    entryNumber(args){
        let numb = <TextField>args.object
        let entry = parseInt(numb.text)

        if(entry === 0){
            let number = Math.max(...this.numb)
            alert("nilai terbesar adalah " + " " + number)
        }
        this.entryNumb = entry
    }

}