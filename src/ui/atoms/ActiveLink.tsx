"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export const ActiveLink = ({
	href,
	children,
}: {
	href: {};
	children: ReactNode;
}) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={clsx(
				`text-blue-500 hover:text-blue-900`,
				isActive && `border-b-2 border-red-500`,
			)}
		>
			{children}
		</Link>
	);
};
