import { useState } from "react";
import design from '../styles/home_page.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home_page(){
    const[addtaskclicked, isaddtakeclick]=useState(false);
    const[taskName, setTaskName]=useState("");
    const[taskpriority, setTaskpriority]=useState("empt");
    const[taskdesc, setTaskdescrip]=useState("");
    const[addbtnclicked, isaddclicked]=useState([]);

    const add_btn=()=>{
        isaddtakeclick(!addtaskclicked);
    }

    const handleTaskName=(event)=>{
        setTaskName(event.target.value);
    }

    const handletaskpriority=(event)=>{
        setTaskpriority(event.target.value);
    }
   

    const handletaskdescrip=(event)=>{
        setTaskdescrip(event.target.value);
    }

    const add_task=()=>{

        if(!taskName || taskpriority === "empt"){
            alert("Task name & Property should not be empty");
           return;
        }
        isaddclicked([...addbtnclicked, {name:taskName, priority:taskpriority, descrp:taskdesc}]);
        setTaskName("");
        setTaskpriority("empt");
        setTaskdescrip("");
        isaddtakeclick(false);
    }

    const deleteTask = (indexToDelete) => {
        isaddclicked(addbtnclicked.filter((_, index) => index !== indexToDelete));
      };
    

    return(
        <div className={design.full_page}>
            <header>
            <h2>Task Tracker</h2>
            </header>
            <div className={design.task_section}>
            <button className={design.button_task} onClick={add_btn}>Add task +</button>


            { addtaskclicked &&

            (<div className={design.task_elements} key={addbtnclicked.length}>
            <input className={design.text_box} type="text" placeholder="Enter the Task Name" value={taskName} onChange={handleTaskName}></input>

            <select value={taskpriority} onChange={handletaskpriority}>
                <option value="empt">Task Priority</option>
                <option value="high">P1 (High)</option>
                <option value="medium">P3 (medium)</option>
                <option value="high">P5 (Low)</option>
            </select>

            <textarea value={taskdesc} onChange={handletaskdescrip} rows={4} cols={50} placeholder="Enter Task Description"/>
            <div className="border-0 d-flex justify-content-center">
            <button onClick={add_task}>Add this Task</button>
            </div>
        </div>)
        }


        {
            addbtnclicked.length > 0 &&
            (
                <div>
                    {
                        addbtnclicked.map((task,index)=>(
                            <div className={design.task_list} key={index}>
                                
                                <p>{task.name}  -  {task.priority}</p>
                                <p>{task.descrp}</p>    

                                


                                <div className="d-flex justify-content-center">
                                <button onClick={() => deleteTask(index)}>Delete Task</button>
                                </div>
                                
                            </div>
                        ))
                    }
                </div>
            )
        }
        </div>
        </div>
    )

}

export default Home_page