import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsList } from "@/api/products";

export default async function ProductsPage() {
	const products = await getProductsList();
	return <ProductList products={products} />;
}
