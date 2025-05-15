import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";

export const router = [
  {
    path: "/",
    element: <Home />,
    children: [],
  },
   {
    path: "/About",
    element: <About />,
    children: [],
  },
   {
    path: "/Services",
    element: <Services />,
    children: [],
  },
    {
    path: "/Contact",
    element: <Contact />,
    children: [],
  },
];
