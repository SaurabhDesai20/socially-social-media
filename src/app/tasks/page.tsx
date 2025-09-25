import React from 'react'

const Taskspage = async () => {

    const response = await fetch('http://localhost:3000/api/tasks' , {
        cache : 'no-store'
    });
    const tasks = await response.json();

    console.log("Tasks: ",tasks);
    

  return (
    <div>
      Tasks Page
    </div>
  )
}

export default Taskspage
