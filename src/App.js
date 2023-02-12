import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from "./context/AuthContext";
import { RoomProvider } from "./context/RoomContext";
import { Home } from "./pages";
import { AdminRoom } from "./pages/AdminRoom";
import { CreateRoom } from "./pages/create";
import { DeleteRoom } from "./pages/delete";
import { Room } from "./pages/room";
import { Settings } from "./pages/settings";
import './styles/global.css';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/rooms/:id",
      element: <Room />,
    },
    {
      path: "/create",
      element: <CreateRoom />,
    },
    {
      path: "/admin/rooms/:id",
      element: <AdminRoom />,
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
      <RoomProvider>
        <ToastContainer />
        <RouterProvider router={router} />
      </RoomProvider>
    </AuthProvider>
  );
}

export default App;
