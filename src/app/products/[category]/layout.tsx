import { ReactNode } from "react";

export const generateStaticParams = async () => {
	return [
		{
			category: "t-shirts",
		},
		{
			category: "Elecrtonics",
		},
		{
			category: "Health",
		},
		{
			category: "Tools",
		},
		{
			category: "Sports",
		},
		{
			category: "Shoes",
		},
		{
			category: "Boots",
		},
		{
			category: "Garden",
		},
		{
			category: "Games",
		},
		{
			category: "Home",
		},
		{
			category: "Toys",
		},
		{
			category: "Automatics",
		},
		{
			category: "Computers",
		},
		{
			category: "Kids",
		},
		{
			category: "Outdoors",
		},
		{
			category: "Jewelery",
		},
	];
};

export default function CategoryProductLayout({
	children,
}: {
	children: ReactNode;
}) {
	return children;
}
