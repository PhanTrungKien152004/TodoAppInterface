import { Flare, Height, WidthFull } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  colors,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { SetStateAction, useState } from "react";
import "./App.css";
function App() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [todoList, setTodoList] = useState([
    {
      title: "Create a react project",
      time: "5:23 AM, 01/06/2022",
      isCheck: false,
    },
    {
      title: "Learn React",
      time: "5:22 AM, 01/06/2022",
      isCheck: false,
      icon: <FavoriteBorderIcon />,
    },
    {
      title: "Create a Todo App",
      time: "5:21 AM, 01/06/2022",
      isCheck: true,
      icon: <LaptopMacIcon />,
    },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleAddTask = () => {
    const date = new Date();
    const newTask = {
      title: newTaskTitle,
      time:
        date.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }) +
        ", " +
        date.toLocaleDateString(),
      isCheck: newTaskIsCheck,
    };
    setTodoList([...todoList, newTask]);
    setNewTaskTitle("");
    //setOpen(false);
  };

  const [newTodoDelete, setNewTodoDelete] = useState("");
  const handleNewTodoDelete = (indexToDelete: number) => {
    setTodoList(todoList.filter((todo, index) => index !== indexToDelete));
  };

  const [editIndex, setEditIndex] = useState(0); // lưu index task cần sửa
  const [editOpen, setEditOpen] = useState(false);
  const [newTaskIsCheck, setNewTaskIsCheck] = useState(false);
  const handleEditClickOpen = (indexToEdit: number) => {
    setEditIndex(indexToEdit);
    setNewTaskTitle(todoList[indexToEdit].title);
    setNewTaskIsCheck(todoList[indexToEdit].isCheck);
    setEditOpen(true);
  };
  const handleUpdateTask = () => {
    const updatedList = [...todoList];
    updatedList[editIndex] = {
      ...updatedList[editIndex],
      title: newTaskTitle,
      isCheck: newTaskIsCheck,
    };
    setTodoList(updatedList);
    setEditOpen(false);
  };
  const handleCloseEdit = () => {
    setEditOpen(false);
  };
  return (
    <div style={{ maxWidth: "75%", margin: "auto" }}>
      <Typography
        sx={{ color: "#707070", textAlign: "center" }}
        variant="h3"
        component="h2"
      >
        TODO LIST APP
      </Typography>
      <Box
        sx={{
          display: "flex",
          marginBottom: "10px",
          justifyContent: "space-between",
        }}
      >
        <Button
          id="AddTask"
          sx={{
            backgroundColor: "#7a50f4",
            textTransform: "capitalize",
            padding: "1px 25px",
          }}
          variant="contained"
          onClick={handleClickOpen}
        >
          Add Task
        </Button>
        <FormControl sx={{ backgroundColor: "#bfbfbf", borderRadius: "5px" }}>
          <InputLabel
            sx={{ textTransform: "capitalize" }}
            id="demo-simple-select-label"
          >
            All
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Content"
            sx={{ padding: "1px 60px" }}
          >
            {/* <MenuTask value={10}>Ten</MenuTask>
    <MenuTask value={20}>Twenty</MenuTask>
    <MenuTask value={30}>Thirty</MenuTask> */}
          </Select>
        </FormControl>
      </Box>

      <div>
        <Box
          component="section"
          sx={{
            background: "#EEEEEE",
            p: 1,
            borderRadius: "10px",
          }}
        >
          {todoList.map((todo, index) => (
            <>
              <div
                key={index}
                id="ListContent"
                style={{
                  display: "flex",
                  backgroundColor: "white",
                  padding: "10px 10px",
                  margin: "10px",
                  borderRadius: "10px",
                }}
              >
                <Checkbox checked={todo.isCheck}></Checkbox>

                <div>
                  <Typography
                    sx={{
                      textDecoration: todo.isCheck ? "line-through" : "none",
                      opacity: todo.isCheck ? "0.7" : "1",
                    }}
                    variant="body2"
                    component="h2"
                  >
                    {todo.title}
                    {todo.icon}
                  </Typography>

                  <Typography
                    sx={{ opacity: 0.7 }}
                    variant="caption"
                    component="h2"
                  >
                    {todo.time}
                  </Typography>
                </div>
                <div
                  style={{ alignSelf: "center", marginLeft: "auto" }}
                  id="ListID"
                >
                  <DeleteIcon
                    sx={{
                      backgroundColor: "#c9c9c9",
                      mr: "5px",
                      p: "2px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleNewTodoDelete(index)}
                  ></DeleteIcon>
                  <EditIcon
                    sx={{
                      backgroundColor: "#c9c9c9",
                      p: "2px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleEditClickOpen(index)}
                  ></EditIcon>
                </div>
              </div>
            </>
          ))}
        </Box>
      </div>

      {/* Dialog Add */}
      <Dialog
        open={open}
        sx={{ animation: "effect ease 0.25s" }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{" Thêm task mới "}</DialogTitle>
        <DialogContent>
          <input
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            placeholder="Nhập tên task"
          />
          <Box display="flex" alignItems="center" mt={2}>
            <Checkbox
              checked={newTaskIsCheck}
              onChange={(e) => setNewTaskIsCheck(e.target.checked)}
            />
            <Typography>Đánh dấu hoàn thành hay k</Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ backgroundColor: "#7a50f4", color: "white" }}
            onClick={handleAddTask}
            disabled={!newTaskTitle.trim()} // Không cho add nếu rỗng
          >
            Add
          </Button>
          <Button
            sx={{ backgroundColor: "red", color: "white" }}
            onClick={handleClose}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
      {/* Dialog edit */}
      <Dialog open={editOpen} sx={{ animation: "effect ease 0.25s" }}>
        <DialogTitle>Chỉnh sửa Task</DialogTitle>
        <DialogContent>
          <TextField
            label="Nội dung"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            fullWidth
            sx={{ mt: 1 }}
          />
          <Box display="flex" alignItems="center" mt={2}>
            <Checkbox
              checked={newTaskIsCheck}
              onChange={(e) => setNewTaskIsCheck(e.target.checked)}
            />
            <Typography>Đánh dấu hoàn thành hay k</Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ backgroundColor: "#2986cc", color: "white" }}
            onClick={handleUpdateTask}
          >
            Save
          </Button>
          <Button
            sx={{ backgroundColor: "red", color: "white" }}
            onClick={handleCloseEdit}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default App;
