import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList(){
    let[todos,setTodo]=useState([{task:"Add",id:uuidv4(),isDone:false}]);
    let[newTodo,setNewTodo]=useState("");
    let addNewTask=()=>{
       setTodo((prevTodos)=>{
        return[...prevTodos,{task:newTodo,id:uuidv4(),isDone:false}]
       });
       setNewTodo("");
    } 
    let updateTodoValue=(event)=>{
         setNewTodo(event.target.value);
    };
    let deleteTodo=(id)=>{
        setTodo(todos.filter((todo)=>todo.id!=id));
        
    }
    let upperCaseAll=()=>{
        setTodo((prevTodos)=>prevTodos.map((todo)=>{
            return{
                ...todo,
                task:todo.task.toUpperCase(),
            }
        })
           
           
        )
       
        
    }
    let markAsDone=(id)=>{
        setTodo(()=>todos.map((todo)=>{
            if(todo.id==id){
                return{
                    ...todo,
                   isDone:true,
               };
            }else{
                return todo;
            }
           
        })
       )
    }
    let markAllAsDone=()=>{
        setTodo((prevTodos)=>prevTodos.map((todo)=>{
            return{
                ...todo,
                isDone:true,
            }
        })
           
           
        )
       
        
    }
   
    return(<div>
        <input placeholder="add a task"  value= {newTodo} onChange={updateTodoValue} value={newTodo}></input>
        <br></br><br></br>
        <button onClick={addNewTask}>Add Task</button>
       
        <br></br><br></br>
        <hr></hr>
        <h1>Todo List</h1>
        <ul>
            {
                todos.map((todo)=>(
                    <li key={todo.id} ><span style={todo.isDone?{textDecorationLine:"line-through"}:{}}>{todo.task}</span>&nbsp;&nbsp;&nbsp;<button onClick={()=>deleteTodo(todo.id)}>delete</button>&nbsp;&nbsp;&nbsp;<button onClick={()=>markAsDone(todo.id)}>Mark As Done</button></li>
                ))}
            
        </ul>
        <br></br>
        <button onClick={upperCaseAll}>UpperCase All</button>&nbsp;&nbsp;<button onClick={markAllAsDone}>Mark All As Done</button>
        
    </div>);
}