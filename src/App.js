import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";
import toast, { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
