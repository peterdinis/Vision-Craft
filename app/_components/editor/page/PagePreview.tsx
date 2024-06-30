import type { FC } from "react";
import { Button } from "@/components/ui/button";

const PagePreview: FC = () => {

    const displayCodePreview = () => {
        console.log("DO NOTHING")
    }

	return (
		<div className="flex w-full h-full">
            <div className="float-right">
                <Button onClick={displayCodePreview} variant={"ghost"}>
                    Code preview
                </Button>
            </div>
			<div className="p-4 mt-10 w-full flex justify-center align-top">
				DROP HERE
			</div>
		</div>
	);
};

export default PagePreview;
