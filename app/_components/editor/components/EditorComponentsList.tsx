import { FC } from "react";
import ComponentCard from "./ComponentCard";

const EditorComponentsList: FC = () =>{
    return (
        <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
            <ComponentCard header="Paragaph" />
            <ComponentCard header="Link" />
            <ComponentCard header="Nav" />
            <ComponentCard header="Paragaph" />
            <ComponentCard header="Link" />
            <ComponentCard header="Nav" />
            <ComponentCard header="Paragaph" />
            <ComponentCard header="Link" />
            <ComponentCard header="Nav" />
        </div>
    )
}

export default EditorComponentsList;