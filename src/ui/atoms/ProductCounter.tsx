"use client";
import { ReactNode, useState } from "react";

export const ProductCounter = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [counter, setCounter] = useState(0);
	return (
		<div>
			<button onClick={() => setCounter((counter) => counter - 1)}>
				-
			</button>
			<input
				readOnly
				value={counter}
				className="border-state-200 border"
			/>
			<button onClick={() => setCounter((counter) => counter + 1)}>
				+
			</button>
			{counter % 2 === 0 && children}
		</div>
	);
};
