import React, {useState,useEffect} from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {EuiButton} from '@elastic/eui';
import { EuiTextArea } from '@elastic/eui';


const EditTaskPopup = ({modal, toggle, save , updateTask, taskObj})=> {
  const [taskName , setTaskName] = useState('');
  const [description , setDescription] = useState(''); 


  useEffect(() => {
    setTaskName(taskObj.Name)
    setDescription(taskObj.Description)
    // eslint-disable-next-line
},[])

  const handleChange = (e) => {
 
    const {name , value} =e.target

    if(name === "taskName"){
      setTaskName(value);
    }else{
      setDescription(value);
    }

  }

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {}
    tempObj['Name'] = taskName
    tempObj['Description'] = description
    updateTask(tempObj)
}

    return (
        
        <Modal isOpen={modal} toggle={toggle}>
             <ModalHeader toggle={toggle}>Update Task</ModalHeader>
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
                 <EuiButton color="primary" onClick={handleUpdate}>Update</EuiButton>{' '}
                 <EuiButton color="secondary" onClick={toggle}>Cancel</EuiButton>
        </ModalFooter>
      </Modal>
      
    )

    }
export default  EditTaskPopup;
