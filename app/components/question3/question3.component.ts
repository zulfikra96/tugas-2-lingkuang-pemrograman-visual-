import { Component, OnInit } from '@angular/core'
import { TextField } from "ui/text-field"

@Component({
    selector:'question3-component',
    templateUrl:'./components/question3/question3.component.html', 
})

export class Question3Component{


    fieldA = [[0,2], [10,8]]
    fieldB = [[0,4,3],[0,4,20]]
    answer = []


    constructor(){
        
    }

}