import { useState } from "react";
import "./App.css"

const App = () => {

  const [task, setTask] = useState([])
  const [complete, setComplete] = useState([])
  const [text, setText] = useState('')
  const [cb,setCb]  = useState(false)

  const deleteTask = (place)=>{
    task.splice(place,1)
    setTask([...task])
  }

  const completeTask = (place)=>{
    const t = task.splice(place,1)
    setComplete([...complete,t])
    setTask([...task])
    setCb(false)
  }

  const editTask = (place)=>{
    const t = prompt("previously written task: " + task[place])
    if(t == ''){
      alert("Can't add EMPTY Task")
    }else{
    task.splice(place, 1, t)
    setTask([...task])
    }

  }

  return (
    <>
      <div id="main">

        <div >
          <h1 id="hedding">To Do App </h1>
        </div>

        <div id="child1">

          <input id="inbox"
            type="text"
            placeholder="Enter Your Task"
            value={text}
            onChange={(event) => {
              setText(event.target.value)
            }}
          />

          <button id="addbtn" onClick={()=>{
            let t = text.trim()
            if(t == ''){
              alert("Can't add EMPTY Task")
            }else{
              setTask([...task,t])
            }
            setText('')
            }
          }>Add Task</button>

        </div>

        <div id="child2">

          {task.length > 0 &&(
          <div id="current-task">
            <h1 className="c2-hed">Ongoing Task</h1>

            {task.map((item,index) =>
              <div key={item} className="c2-contend">

                <input id={index} type="checkbox" 
                
                checked={cb}
                onChange={()=>completeTask(index)}/>

                <li key={index}>{item}</li>

                <img src="pen.png" alt="edit"
                id={index}
                onClick={()=>editTask(index)}
                />
                
                <img id={index} src="remove.png" alt="delete" 
                   onClick={()=>{deleteTask(index)}} 
              />
              </div>
              
              )}

          </div>
          )}

          {complete.length > 0 && (
          <div id="complete-task">
            <h1 className="c2-hed">Completed task</h1>

            {complete.map((item,index) =>
              <li key={index}>{item}</li>
            )}

          </div>
          )}

        </div>



      </div>
    </>
  )
}
export default App;