"use client";
import { ReactNode, useState } from "react";

export const ProductCounter = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [count, setCount] = useState(0);
	return (
		<div>
			<button
				onClick={() => setCount((counter) => counter - 1)}
				className="rounded-l bg-gray-200 px-4 py-2"
			>
				-
			</button>
			<input
				readOnly
				value={count}
				className="border border-slate-200"
			/>
			<button
				onClick={() => setCount((counter) => counter + 1)}
				className="rounded-r bg-gray-200 px-4 py-2"
			>
				+
			</button>
			{count % 2 === 0 && children}
		</div>
	);
};
