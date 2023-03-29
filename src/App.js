import {useState} from "react";
import Header from "./components/Header/Header";
import Sheduler from "./components/Sheduler/Sheduler";
import s from './App.module.css'


function App() {

    let [days, setDays] = useState([])
    let [tasks, setTasks] = useState([])

    const submit_form = event => {
        event.preventDefault()
        console.log(event.target)
        let {day, importance, description} = event.target
event.target.day.value = ''
event.target.importance.value = ''
event.target.description.value = ''

        const newTask = {
            id: Date.now(),
            day: day.value,
            importance: importance.value,
            description: description.value
        }
        tasks = [...tasks, newTask].sort((a,b) => b.importance - a.importance)
        setTasks(tasks)

        if (!days.includes(day.value)) {
            days = [...days, day.value]
        }
        days.sort((a, b) => a - b)
        setDays(days)
    }

    const deleteTask = (id) =>{
        console.log(id)
        tasks = tasks.filter(elem => elem.id !== id)
        setTasks(tasks)
        console.log(tasks)
    }

    const deleteDay = (day) => {
        console.log(days)
        days = days.filter(elem => elem !== day)
        setDays(days)
    }

    return (
        <div className={s.container}>
            <Header submit_form={submit_form}/>
            <Sheduler tasks={tasks} days={days} deleteTask={deleteTask} deleteDay={deleteDay}/>
        </div>
    );
}

export default App;
