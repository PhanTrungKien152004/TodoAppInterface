import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
type editType = {
  editOpen: boolean;
  newTaskTitle: string;
  setNewTaskTitle: (e: any) => void;
  newTaskIsCheck: boolean;
  setNewTaskIsCheck: (e: any) => void;
  handleUpdateTask: () => void;
  handleCloseEdit: () => void;
};
const EditList = ({
  editOpen,
  newTaskTitle,
  setNewTaskTitle,
  newTaskIsCheck,
  setNewTaskIsCheck,
  handleUpdateTask,
  handleCloseEdit,
}: editType) => {
  return (
    <div>
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
            <Typography>Đã hoàn thành hay chưa</Typography>
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
};

export default EditList;
