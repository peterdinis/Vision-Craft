import { FC } from "react";
import Sidebar from "../shared/sidebar/Sidebar";
import DashboardTable from "./DashboardTable";

const DashboardWrapper: FC = () => {
    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <section className='relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
                <div className='p-4 md:p-6 2xl:p-10'>
                    <DashboardTable title={"My Later projects"} data={[]} />
                </div>
            </section>
        </div>
    )
}


export default DashboardWrapper;