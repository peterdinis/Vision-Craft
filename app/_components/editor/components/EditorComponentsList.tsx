import { FC } from "react";
import ComponentCard from "./ComponentCard";

const EditorComponentsList: FC = () =>{
    const components = ['Paragraph', 'Link', 'Nav'];
    
    return (
        <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
            {components.map((component, index) => (
                <ComponentCard key={index} header={component} />
            ))}
        </div>
    );
};

export default EditorComponentsList;