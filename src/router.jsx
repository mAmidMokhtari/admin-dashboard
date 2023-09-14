import { createBrowserRouter } from "react-router-dom";

import { CategoryProvider } from "./features/categories/components/category-context";
import CourseDetails, {
  courseDetailsLoader,
} from "./features/courses/components/course-details";
import Login, { loginAction } from "./features/identity/components/Login";
import Register, {
  registerAction,
} from "./features/identity/components/Register";
import IdentityLayout from "./layout/identity-layout";
import MainLayout from "./layout/mainLayout/main-layout";
import CourseCategories, { categoriesLoader } from "./pages/course-categories";
import Courses, { coursesLoader } from "./pages/Courses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <Courses />,
        index: true,
        loader: coursesLoader,
      },
      {
        path: "course-categories",
        element: (
          <CategoryProvider>
            <CourseCategories />
          </CategoryProvider>
        ),
        loader: categoriesLoader,
      },
      {
        path: "courses/:id",
        element: <CourseDetails />,
        loader: courseDetailsLoader,
      },
    ],
  },

  {
    element: <IdentityLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
        action: loginAction,
        errorElement: <Login />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
        errorElement: <Register />,
      },
    ],
  },
]);

export default router;
