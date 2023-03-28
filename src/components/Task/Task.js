import React from 'react'
import s from './Task.module.css'

function Task({id, importance, description, deleteTask}) {

    const styles = {backgroundColor: importance == '1' ? '#e74c3c' : '#1abc9c'}

    return (
        <div className={s.task_item} style={styles} onMouseEnter={(e) => e.stopPropagation()}>
            {description}
            <button className={s.close_btn} onClick={() => deleteTask(id)}>x</button>
        </div>
    )
}

export default Task
