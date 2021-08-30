import React, {useState , useEffect} from 'react'
import '../styles/TodoList.css';
import CreateTask from '../modals/createTask.js';
import EditTaskPopup from '../modals/editTask';
import Card from './card';
import {EuiButton} from '@elastic/eui';
//import { EuiText } from '@elastic/eui/src/components/text/text';
import { EuiText } from '@elastic/eui';





function TodoList() {
  const [modal, setModal]  = useState(false);
  //const [modals, handleupdate] = useState(false);
  const [taskList, setTaskList] = useState([]);
  








useEffect(()=>{
let arr = localStorage.getItem("taskList")

if(arr){
  let obj=JSON.parse(arr)
  setTaskList(obj)
}

}, [])


  const toggle = () => {
      setModal(!modal);
  }




  const saveTask =(taskObj) =>{
      let tempList = taskList
      tempList.push(taskObj)
      setTaskList(tempList);
      localStorage.setItem("taskList",JSON.stringify(taskList))
      setModal(false);
  }

  const deleteTask = (index) => {
    let tempList = taskList
    tempList.splice(index, 1)
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
}

const updateListArray = (obj, index) => {
  let tempList = taskList
  tempList[index] = obj
  localStorage.setItem("taskList", JSON.stringify(tempList))
  setTaskList(tempList)
  window.location.reload()
}  


    return (
       
        <>
        <div className="todo__topcontainer text-center">
          <EuiText>
            <h1 className="todolist__title">Todo List</h1>
            </EuiText>
            <EuiButton type="button" class="btn btn-primary mt-3" onClick ={()=>setModal(true)}>Create Task</EuiButton>
          
         </div>

           <div className="todo__taskcontainer">
             {/* {taskList.map((obj) => <li>{obj.Name}</li>)}                                                                                                                                                            add */}
             {taskList && taskList.map((obj,index) => <Card taskObj = {obj}  index={index} deleteTask={deleteTask}  updateListArray={ updateListArray}/> )} 
             
            
             </div>
            <CreateTask toggle={toggle} modal={modal} save={saveTask}/>
           
        </>
    )
  }

export default TodoList;