import type { ProductItemType } from "@/ui/Types";
import { ProductList } from "@/ui/organisms/ProductList";
import Link from "next/link";
import "tailwindcss/tailwind.css";

const products: ProductItemType[] = [
	{
		id: "1",
		category: "Accessories",
		name: "Basic Tee",
		price: 2137,
		coverImage: {
			alt: "",
			src: "/product1.jpg",
		},
	},
	{
		id: "2",
		category: "Accessories",
		name: "Basic Tee",
		price: 2137,
		coverImage: {
			alt: "",
			src: "/product2.jpg",
		},
	},
	{
		id: "3",
		category: "Accessories",
		name: "Basic Tee",
		price: 2137,
		coverImage: {
			alt: "",
			src: "/product3.jpg",
		},
	},
	{
		id: "4",
		category: "Accessories",
		name: "Basic Tee",
		price: 2137,
		coverImage: {
			alt: "",
			src: "/product4.jpg",
		},
	},
];

export default function ProductsPage() {
	return (
		<>
			<ProductList products={products} />

			<Link href="/products">Przejdź do produktów</Link>
		</>
	);
}
