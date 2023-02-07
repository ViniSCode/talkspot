import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from "./context/AuthContext";
import { Home } from "./pages";
import { DeleteRoom } from "./pages/delete";
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
    {
      path: "/delete",
      element: <DeleteRoom />,
    },
  ]);

  return (
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
