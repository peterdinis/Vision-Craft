import type { FC } from "react";
import CodeDialogPreview from "../code/CodeDialogPreview";

const PagePreview: FC = () => {

	return (
		<div className="flex w-full h-full">
            <div className="float-right">
                <CodeDialogPreview />
            </div>
			<div className="p-4 mt-10 w-full flex justify-center align-top">
				DROP HERE
			</div>
		</div>
	);
};

export default PagePreview;
