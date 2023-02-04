import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { Home } from "./pages";
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
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
