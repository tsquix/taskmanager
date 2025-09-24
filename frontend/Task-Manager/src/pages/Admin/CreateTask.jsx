import React, { useState } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { PRIORITY_DATA } from "../../utils/data";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "momnet";
import { LuThrash2 } from "react-icons/lu";
const CreateTask = () => {
  const location = useLocation();
  const { taskId } = location.state || {};
  const navigate = useNavigate();

  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    priority: "Low",
    dueDate: null,
    assignedTo: [],
    todoChecklist: [],
    attachments: [],
  });
  const [currentTask, setCurrentTask] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("false");

  const [openDeleteAlert, setOpenDeleteAlert] = useState(false);

  const handleValueChange = (key, value) => {
    setTaskData((prevData) => ({ ...prevData, [key]: value }));
  };

  const clearData = () => {
    //reset form
    setTaskData({
      title: "",
      description: "",
      priority: "Low",
      dueDate: null,
      assignedTo: [],
      todoChecklist: [],
      attachments: [],
    });
  };

  //create task
  const createTask = async () => {};
  //updatetask
  const updateTask = async () => {};
  const handleSubmit = async () => {};
  //get Task info by ID
  const getTaskDetailsByID = async () => {};
  //deletetask
  const deleteTask = async () => {};

  return (
    <DashboardLayout activeMenu={"Create Task"}>
      <div className="">
        <div className="">
          <div className="">
            <div className="">
              <h2 className="">{taskId ? "Update Task" : "Create Task"}</h2>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CreateTask;
