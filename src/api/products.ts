import { type ProductItemType } from "@/ui/Types";
type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	category: string;
	image: string;
	description: string;
	rating: {
		rate: number;
		count: number;
	};
};

export const getProductsList = async () => {
	const res = await fetch(
		"https://naszsklep-api.vercel.app/api/products",
	);
	const productsResponse =
		(await res.json()) as ProductResponseItem[];
	const products = productsResponse.map(
		ProductResponseItemToProductItemType,
	);
	return products;
};

export const getProductById = async (
	id: ProductResponseItem["id"],
) => {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products/${id}`,
	);
	const productResponse = (await res.json()) as ProductResponseItem;
	return ProductResponseItemToProductItemType(productResponse);
};

const ProductResponseItemToProductItemType = (
	product: ProductResponseItem,
): ProductItemType => {
	return {
		id: product.id,
		name: product.title,
		price: product.price,
		category: product.category,
		coverImage: {
			alt: product.title,
			src: product.image,
		},
		description: product.description,
	};
};
