import { createBrowserRouter } from "react-router-dom";

import DoYouEvenLiftBro from "./components/projects/DoYouEvenLiftBro";
import ConnectHub from "./components/projects/ConnectHub";
import BookBuddy from "./components/projects/BookBuddy";
import SouthBayBullies from "./components/projects/SouthBayBullies";
import Architecture from "./components/projects/Architecture";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/DoYouEvenLiftBro",
        element: <DoYouEvenLiftBro />,
      },
      {
        path: "/ConnectHub",
        element: <ConnectHub />,
      },
      {
        path: "/BookBuddy",
        element: <BookBuddy />,
      },
      {
        path: "/SouthBayBullies",
        element: <SouthBayBullies />,
      },
      {
        path: "/Architecture",
        element: <Architecture />,
      },
    ],
  },
]);

export default router;
