import type { ProductItemType } from "@/ui/Types";
import { ProductList } from "@/ui/organisms/ProductList";

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

export default function Home() {
	return (
		<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
			<ProductList products={products} />
		</section>
	);
}
