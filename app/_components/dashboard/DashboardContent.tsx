import { FC } from "react";
import Header from "../shared/Header";
import Sidebar from "../shared/Sidebar";
import DashboardWrapper from "./DashboardWrapper";

const DashboardContent: FC = () => {
    return (
        <>
            <Header text="Dashboard" />
            <Sidebar />
            <DashboardWrapper />
        </>
    )
}

export default DashboardContent;