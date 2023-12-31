import React from "react"
import { theme } from "./services/theme"
import TaskList from "./pages/TaskList"
import { ThemeProvider } from "@emotion/react";
import "./App.css"


function App() {
  return (
    <ThemeProvider theme={theme}>
       <TaskList />
    </ThemeProvider>
  );
}

export default App;
