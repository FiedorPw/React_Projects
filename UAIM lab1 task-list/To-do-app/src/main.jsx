import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/TasksApp.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewTask from "./routes/NewTask.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import  TaskProvider  from "./context/TaskContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/create-task", element: <NewTask /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskProvider>
      <RouterProvider router={router} />
    </TaskProvider>
  </React.StrictMode>
);
