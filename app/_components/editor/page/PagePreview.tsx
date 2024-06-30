"use client"

import { useDroppable } from "@dnd-kit/core";
import type { FC } from "react";

const PagePreview: FC = () => {
	const droppable = useDroppable({
		id: "editor-preview",
		data: {
			isDesignerDropArea: true,
		},
	});

	return (
		<div className="flex w-full h-full">
			<div className="p-4 w-full flex justify-center align-top">
				DROP HERE
			</div>
		</div>
	);
};

export default PagePreview;
