import React, {useState} from 'react'
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {EuiButton} from '@elastic/eui';
import { EuiTextArea } from '@elastic/eui';



const CreateTaskPopup = ({modal, toggle, save})=> {
  const [taskName , setTaskName] = useState('');
  const [description , setDescription] = useState(''); 


  const handleChange = (e) => {
 
    const {name , value} =e.target

    if(name === "taskName"){
      setTaskName(value);
    }else{
      setDescription(value);
    }

  }

  const handleSave = () =>{
    let taskObj ={}
    taskObj["Name"] = taskName;
    taskObj["Description"] = description ;
    save(taskObj);
  }

    return (
        
        <Modal isOpen={modal} toggle={toggle}>
             <ModalHeader toggle={toggle}>Today's Task</ModalHeader>
                <ModalBody>
                         <form>
                            <div className="form-group">
                              <label>Task Name</label> 
                                <input type="text" className="form-control" value={taskName} onChange={handleChange} name="taskName"></input>
                            </div>

                            <div className="form-group">
                              <label>Description</label>
                               <EuiTextArea rows ="5" className="form-control" value={description} onChange={handleChange} name="description"></EuiTextArea>
                            </div>
                        </form>

                </ModalBody>
             <ModalFooter>
                 <EuiButton color="primary" onClick={handleSave}>Add Task</EuiButton>{' '}
                 <EuiButton color="secondary" onClick={toggle}>Cancel</EuiButton>
        </ModalFooter>
      </Modal>
      
    )

    }
export default CreateTaskPopup