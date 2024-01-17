import { useState } from "react";
import "./App.css";
// import { Box, TextField, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [task, setTask] = useState("");
  const [listTask, setListtask] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (editClick) {
      setListtask((list) =>
        list.map((taskItem) =>
          taskItem.id === updateId ? { ...taskItem, tasks: task } : taskItem
        )
      );
      setEditClick(false);
      setUpdateId(null);
    } else {
      const object = { id: uuidv4(), tasks: task };
      setListtask([...listTask, object]);
      console.log(object);
    }

    setTask("");
  };
  const edit = (taskId) => {
    const value = listTask?.find((task) => {
      return task?.id == taskId;
    });
    console.log("hy", value?.tasks);
    setTask(value?.tasks);
    setEditClick(true);
    setUpdateId(taskId);
  };

  const Delete = (taskId) => {
    setListtask(
      listTask.filter((task) => {
        return task.id !== taskId;
      })
    );
  };

  return (
    <>
      <div className="flex justify-center flex-col m-auto mt-28 w-1/2 h-auto ">
        <div className="flex justify-center font-mono text-3xl">
          <h1 className="font-mono text-3xl font-bold uppercase text-black">
            To Do List
          </h1>
        </div>
        <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-black"></hr>
        <div className="mt-2 flex  justify-center flex-col">
          <label
            for="phone"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter Text
          </label>
          <input
            type="text"
            id="Add"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="enter here"
            value={task}
            onChange={handleChange}
          />
          <div className="flex justify-center mt-8">
            <button
              onClick={addTask}
              type="button"
              class="w-40 justify-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              {editClick ? "update" : "Add"}
            </button>
          </div>
        </div>
        <div>
          {listTask?.map((taskItem) => (
            <div
              className="flex  flex-row bg-gray-50  w-full h-auto p-2 rounded-sm"
              key={task.id}
            >
              <p className="text-lg w-40">{taskItem.tasks}</p>
              <button
                onClick={() => edit(taskItem.id)}
                className="w-30 h-10 ml-40 justify-end text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 
               font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Edit
              </button>
              <button
                onClick={() => Delete(taskItem.id)}
                className="w-30 h-10 ml-40 justify-end text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 
               font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
