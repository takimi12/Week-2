import { ProductItemType } from "@/ui/Types";

type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	longDescription: string;
	rating: {
		rate: number;
		count: number;
	};
};

export const getProductsList = async () => {
	const res = await fetch(
		"http://naszsklep-api.vercel.app/api/products",
	);
	const productsResponse =
		(await res.json()) as ProductResponseItem[];
	// Ograniczenie do 20 produktów
	const first20Products = productsResponse.slice(0, 20);
	const products = first20Products.map(
		productResponseItemToProductItemType,
	);
	return products;
};

export const getProductById = async (
	id: ProductResponseItem["id"],
) => {
	const res = await fetch(
		`http://naszsklep-api.vercel.app/api/products/${id}`,
	);
	const productResponse = (await res.json()) as ProductResponseItem;
	return productResponseItemToProductItemType(productResponse);
};

const productResponseItemToProductItemType = (
	product: ProductResponseItem,
): ProductItemType => {
	return {
		id: product.id,
		category: product.category,
		name: product.title,
		price: product.price,
		coverImage: {
			alt: "",
			src: product.image,
		},
		description: product.description,
	};
};
