import { createBrowserRouter } from "react-router";
import App from "../App";
import About from "../components/About";
import Body from "../components/Body";
import CancerTest from "../components/CancerTest";
import HealthRecords from "../components/HealthRecords";
import FindDoctor from "../components/FindDoctor";
import SignUp from "../components/SignUp";


const appRouter = createBrowserRouter([
    {
        path: "/",
        Component: App,
        // errorElement: ErrorPage,
        children: [
            {
                path: "",
                Component: Body,

            },
            {
                path: "about",
                Component: About,

            },
            {
                path: "CancerTest",
                Component: CancerTest,


            },
            {
                path: "HealthRecord",
                Component: HealthRecords

            },
            {
                path: "FindDocter",
                Component: FindDoctor

            },
            {
                path: "SignUp",
                Component: SignUp

            },



        ],


    },


])

export default appRouter;