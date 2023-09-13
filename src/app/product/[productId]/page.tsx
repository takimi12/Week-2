import { getProductById } from "@/api/products";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProducts";
import { Suspense } from "react";

export default async function SingleProductPage({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);
	return (
		<>
			<h1>{product.name}</h1>
			<article className="max-w-xs">
				<ProductCoverImage
					src={product.coverImage.src}
					alt={product.coverImage.alt}
				/>
				<ProductListItemDescription product={product} />
			</article>
			<aside>
				<Suspense fallback={"Ładowanie"}>
					<SuggestedProductsList />
				</Suspense>
			</aside>
		</>
	);
}
