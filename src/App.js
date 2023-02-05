import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { Home } from "./pages";
import { Room } from "./pages/room";
import { Settings } from "./pages/settings";
import { Users } from "./pages/users";
import './styles/global.css';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/room",
      element: <Room />,
    },
    {
      path: "/users",
      element: <Users />,
    },
    {
      path: "/settings",
      element: <Settings />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
