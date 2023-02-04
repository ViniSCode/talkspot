import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { Home } from "./pages";
import { Room } from "./pages/room";
import './styles/global.css';


function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //     setTimeout(() => {
  //       setLoading(false)
  //     }, 1500)
  // }, []) element: loading ? <Loading /> : <Home />,

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/room",
      element: <Room />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
