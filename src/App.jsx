import HomePage from './pages/Home'
import ExperiencePage from './pages/Experience'
import LeadershipPage from './pages/Leadership'
import ReflectionPage from './pages/Reflection'
import VisionPage from './pages/Vision'
import CVPage from './pages/CV'
import Root from './pages/Root'
import ErrorPage from './pages/Error'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([{
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
        {path: '/', element: <HomePage/>},
        {path: '/experience', element: <ExperiencePage/>},
        {path: '/leadership', element: <LeadershipPage/>},
        {path: '/reflection', element: <ReflectionPage/>},
        {path: '/vision', element: <VisionPage/>},
        {path: '/cv', element: <CVPage/>},
    ]
}]);
  
export default function App() {
    return <RouterProvider router={router}/>;
  }