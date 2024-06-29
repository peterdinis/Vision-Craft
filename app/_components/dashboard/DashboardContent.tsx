import { FC } from "react";
import Header from "../shared/Header";
import DashboardWrapper from "./DashboardWrapper";

const DashboardContent: FC = () => {
    return (
        <>
            <Header text="Dashboard" />
            <DashboardWrapper />
        </>
    )
}

export default DashboardContent;