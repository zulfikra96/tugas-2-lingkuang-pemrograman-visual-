import { Component } from '@angular/core'

@Component({
    selector:'question1-component',
    templateUrl:'./components/question1/question1.component.html',   
})

export class Question1Component{

    public pupil = [
        {nama:'zulfikra', routine:'menggambar'},
        {nama:'lahmudin', routine:'menggambar'},
        {nama:'abdjul', routine:'menggambar'}        
    ]

    constructor(){
       for(let row in this.pupil){}
    }

    tambah(){
        let nama = {nama:'haffina',routine:'menulis'}
        this.pupil.push(nama)
    }
}