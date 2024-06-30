import { Button } from "@/components/ui/button";
import { DndContext } from "@dnd-kit/core";
import { ScanEye } from "lucide-react";
import Link from "next/link";
import type { FC } from "react";
import PagePreview from "./PagePreview";

const PreviewWrapper: FC = () => {
	return (
		<DndContext>
			<div className="mt-5 w-4/5">
				<Button variant={"outline"} className="gap-2">
					<ScanEye className="h-6 w-6" />
					<Link href="#">Preview</Link>
				</Button>
				<div className="mt-5 flex w-full flex-grow items-center justify-center relative overflow-y-auto h-[200px] bg-accent">
					<PagePreview />
				</div>
			</div>
		</DndContext>
	);
};

export default PreviewWrapper;
