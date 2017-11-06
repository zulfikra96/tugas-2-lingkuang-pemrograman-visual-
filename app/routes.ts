import { HomeScreen } from "./screens/home/home.screen"
import { QuestionScreen } from "./screens/question/question.screen"
import { Question1Component } from "./components/question1/question1.component"
import { Question2Component } from "./components/question2/question2.component"
import { Question3Component } from "./components/question3/question3.component"

export const routes = [
    {path:"", component:HomeScreen},
    {path:"question", component:QuestionScreen}
]


export const listComponents = [
    HomeScreen,
    QuestionScreen,
    Question1Component,
    Question2Component,
    Question3Component,
]