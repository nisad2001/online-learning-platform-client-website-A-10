import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import AllCourses from "../pages/AllCourses";
import AddCourses from "../pages/AddCourses";
import CourseDetails from "../pages/CourseDetails";
import UpdateCourses from "../pages/UpdateCourses";
import Home from "../pages/Home";
import MyCourses from "../pages/MyCourses";
import PrivateRoute from "../routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`http://localhost:3000/letest-courses`),
      },
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/all-courses",
        element: <AllCourses></AllCourses>,
        loader: () => fetch(`http://localhost:3000/all-courses`),
      },

      
      {
        path: "/add-courses",
        element: (
          <PrivateRoute>
            <AddCourses />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-courses",
        element: (
          <PrivateRoute>
            <MyCourses />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-courses/:id",
        element: (
          <PrivateRoute>
            <UpdateCourses />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/courses/${params.id}`),
      },
      {
        path: "/course-details/:id",
        element: (
          <PrivateRoute>
            <CourseDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/courses/${params.id}`),
      },

      {
        path: "/*",
        element: <h1>Error layout</h1>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
  },
]);

export default router;
