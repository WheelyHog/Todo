import React from 'react'
import DayItem from "../DayItem/DayItem";


function Sheduler({tasks, days, deleteTask, deleteDay}) {

    days.sort((a,b) => +b.day - +a.day)

    return (
        <div>

            {days.map((elem, index) => <DayItem day={elem} key={index} tasks={tasks} deleteTask={deleteTask} deleteDay={deleteDay}/>)}

        </div>
    )
}

export default Sheduler
