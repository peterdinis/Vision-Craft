import { ScrollArea } from "@/components/ui/scroll-area";
import { FC } from "react";
import EditorComponentsList from "./EditorComponentsList";

const EditorComponents: FC = () => {
    return (
        <ScrollArea className="w-[400px] max-w[400px] flex flex-col flex-grow gap-2 border-l-2 border-muted p-4 bg-background overflow-y-auto h-full">
            <EditorComponentsList />
        </ScrollArea>
    )
}

export default EditorComponents;