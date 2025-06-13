import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home";
import Detail from "./components/pages/Detail";
import Courses from "./components/pages/Courses";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import CoursesEnrolled from "./components/pages/account/CoursesEnrolled";
import MyCourses from "./components/pages/account/MyCourses";
import WatchCourse from "./components/pages/account/WatchCourse";
import ChangePassword from "./components/pages/account/ChangePassword";
import MyLearning from "./components/pages/account/MyLearning";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/account/login" element={<Login />}></Route>
          <Route path="/account/resgister" element={<Register />}></Route>
          <Route path="/account/my-courses" element={<MyCourses />}></Route>
          <Route path="/account/my-learning" element={<MyLearning />}></Route>
          <Route
            path="/account/courses-enrolled"
            element={<CoursesEnrolled />}
          ></Route>
          <Route path="/account/watch-course" element={<WatchCourse />}></Route>
          <Route
            path="/account/change-password"
            element={<ChangePassword />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
