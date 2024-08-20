import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import WhatISThis from "./pages/WhatIsThis";
import ForWhome from "./pages/ForWhome";
import Prices from "./pages/Prices";
import Implementation from "./pages/Implementation";
import Support from "./pages/Support";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Homepage />} />
        <Route path="/whats-this" element={<WhatISThis />} />
        <Route path="/for-whome" element={<ForWhome />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/implementation" element={<Implementation />} />
        <Route path="/support" element={<Support />} />
      </>
    ),
    { basename: "/TaskManager" }
  );
  return <RouterProvider router={router} />;
};

export default App;
