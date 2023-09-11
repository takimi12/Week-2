import { type ReactNode } from "react";

export default function StaticLayout({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<div
			data-testid="static-layout"
			className="mx-auto max-w-md p-12 text-center sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl"
		>
			{children}
		</div>
	);
}
