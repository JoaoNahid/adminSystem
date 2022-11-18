import React from 'react';

function ModalAddTask(props) {

  const handleAddTask = (e) => {
    let task = document.getElementById('taskInput').value
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    var data = new FormData();
    data.append('status', false);
    data.append('data', dateTime);
    data.append('task', task);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'localhost:8080/task', true);
    xhr.onload = function () {
      var dadosDoServidor = this.response;
      console.log(dadosDoServidor);
      var dadosDoJSON = JSON.parse(dadosDoServidor)
      console.log(dadosDoServidor);
      

    }
    xhr.send(data)
  }

  return ( 
    <div className="modalAddTask">
      <input type="text" placeholder='Task' id="taskInput" />
      <div>
            <button 
              id="pending"
              className="btnTask bgBlue btnFilterTask"
              onClick={(e) => handleAddTask(e)}
            >
              Add
            </button>
            <button 
              id="complete"
              className="btnTask btnFilterTask"
              onClick={() => props.setOpenModal(false)}
            >
              Cancel
            </button>
          </div>
    </div>
   );
}

export default ModalAddTask;