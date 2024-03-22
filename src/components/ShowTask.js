import React from 'react';

export const ShowTask = ({ tasklist, setTasklist, task, setTask }) => {
  const tasks = [
    {
      id: 10001,
      name: "Task A",
      time: "2:00:00 AM 9/14/2030",
    },
    {
      id: 10002,
      name: "Task B",
      time: "2:00:00 AM 9/14/2030",
    },
    {
      id: 10003,
      name: "Task C",
      time: "2:00:00 AM 9/14/2030",
    }
  ];

  const handleEdit = (id) => {
    const selectedTask = tasklist.find(task => task.id === id);
    setTask(selectedTask);
  }

  const handleDelete = (id) => {
    const updatedTaskList = tasklist.filter(task => task.id !== id);
    setTasklist(updatedTaskList);
  }

  return (
    <section className='showTask'>
      <div className='head'>
        <div>
          <span className='title'>Todo</span>
          <span className='count'>{ tasklist.length }</span>
        </div>
        <button onClick={() => setTasklist([])} className='clearAll' >Clear All</button>
      </div>
      <ul>
        { tasklist.map((task) => (
          <li key={task.time}>
            <p>
              <span className="name">{ task.name }</span>
              <span className='time'>{ task.time }</span>
            </p>
            <i onClick = {() => handleEdit(task.id)} className='bi bi-pencil-square'></i>
            <i onClick = {() => handleDelete(task.id)} className='bin bi-trash'></i>
          </li>
        ))}
      </ul>
    </section>
  );
}