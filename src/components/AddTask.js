import React from 'react';

export const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // handle add / update
    if(task.id){
      const date = new Date();
      const updatedTasklist = tasklist.map((todo) => (
        todo.id === task.id ? {
          id: task.id,
          name: task.name,
          time: `${ date.toTimeString() } ${ date.toDateString() }`
        } : todo
      ));
      setTasklist(updatedTasklist);
      setTask({}); // reset form
    } else {
      const date = new Date();
      const newTask = { 
        id: date.getTime(), 
        name: e.target.task.value,
        time: `${ date.toTimeString() } ${ date.toDateString() }` 
      }
      setTasklist([...tasklist, newTask]);
      setTask({});
    }
  }
  
  return (
    <section className='addTask'>
      <form onSubmit={ handleSubmit }>
        <input 
          type='text'
          onChange={ e => setTask({...task, name: e.target.value || "" })} 
          name='task' 
          value={ task.name || "" } // default value is empty 
          placeholder='Task Name' 
          autoComplete='off' 
          maxLength="25"
        />
        <button type='submit'>Add</button>
      </form>
    </section>
  );
}