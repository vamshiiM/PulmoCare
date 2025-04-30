import { createBrowserRouter } from "react-router";
import App from "../App";
import About from "../components/About";
import Body from "../components/Body";
import CancerTest from "../components/CancerTest";
import HealthRecords from "../components/HealthRecords";
import SignUp from "../components/SignUp";
import FindDoctors from "../components/FindDoctors";


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
                path: "HealthRecords",
                Component: HealthRecords,

            },
            {
                path: "FindDoctors",
                Component: FindDoctors,

            },
            {
                path: "SignUp",
                Component: SignUp,

            },



        ],


    },


])

export default appRouter;