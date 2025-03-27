import { Flare, Height, WidthFull } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  colors,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
function App() {
  var todoList = [
    {
      title: "Create a react project",
      time: "5:23 AM, 01/06/2022",
      isCheck: false,
    },
    {
      title: "Learn React",
      time: "5:22 AM, 01/06/2022",
      isCheck: false,
      icon: <FavoriteBorderIcon></FavoriteBorderIcon>,
    },
    {
      title: "Create a Todo App",
      time: "5:21 AM, 01/06/2022",
      isCheck: true,
      icon: <LaptopMacIcon></LaptopMacIcon>,
    },
  ];
  return (
    <div>
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
          id="AddItem"
          sx={{
            backgroundColor: "#7a50f4",
            textTransform: "capitalize",
            padding: "1px 25px",
          }}
          variant="contained"
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
            {/* <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
        </FormControl>
      </Box>

      <div>
        <Box
          component="section"
          sx={{ background: "#EEEEEE", p: 1, borderRadius: "10px" }}
        >
          {todoList.map((todo) => (
            <>
              <div
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
                  {" "}
                  <DeleteIcon
                    sx={{
                      backgroundColor: "#c9c9c9",
                      mr: "5px",
                      p: "2px",
                      borderRadius: "5px",
                    }}
                  ></DeleteIcon>
                  <EditIcon
                    sx={{
                      backgroundColor: "#c9c9c9",
                      p: "2px",
                      borderRadius: "5px",
                    }}
                  ></EditIcon>
                </div>
              </div>
            </>
          ))}
        </Box>
      </div>
    </div>
  );
}
export default App;
