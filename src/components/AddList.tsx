import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import React from "react";

type addType = {
  newTaskTitle: string;
  handleAddTask: () => void;
  setNewTaskTitle: (e: any) => void;
  open: boolean;
  handleClose: () => void;
  setNewTaskIsCheck: (e: any) => void;
  newTaskIsCheck: boolean;
};
const AddList = ({
  newTaskTitle,
  handleAddTask,
  setNewTaskTitle,
  handleClose,
  setNewTaskIsCheck,
  newTaskIsCheck,
  open,
}: addType) => {
  return (
    <div>
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
            <Typography>Đã hoàn thành hay chưa</Typography>
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
    </div>
  );
};

export default AddList;
