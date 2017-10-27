import { Component } from '@angular/core'

@Component({
    selector:'home-screen',
    templateUrl:'./screens/home/home.html',
    styleUrls:['./screens/home/home.css']
})

export class HomeScreen{

    public tapMe(){
        alert("hello world");
    }
}