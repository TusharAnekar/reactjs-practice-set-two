export function ToDo({ todoItems }) {
  
    return (
      <div>
        <div>
          {
            todoItems.map(task => <Task title={task.title} description= {task.description} isCompleted={task.isCompleted}/>)
          }
        </div>
      </div>
    );
  }

  function Task ({title, description, isCompleted}) {
    return(
        <div style={{color : isCompleted ? "green" : "red"}}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
  }