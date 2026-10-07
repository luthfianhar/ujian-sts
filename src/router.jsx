import { createBrowserRouter } from "react-router";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Testimony from "./pages/Testimony";
import TopicDetail from "./pages/TopicDetail";
import Layout from "./components/Layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "home/:id", element: <TopicDetail /> },
            { path: "about", element: <About /> },
            { path: "testimony", element: <Testimony /> },
            { path: "faq", element: <FAQ /> },
            { path: "*", element: <NotFound /> },
        ],
    },
]);
