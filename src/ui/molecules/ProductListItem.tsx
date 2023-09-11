import Link from "next/link";
import type { ProductItemType } from "..//Types"; // Użyj "import type" dla importów używanych tylko jako typy
import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { ProductListItemDescription } from "../atoms/ProductListItemDescription";

type ProductListItemProps = {
	product: ProductItemType;
};

export const ProductListItem = ({
	product,
}: ProductListItemProps) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article>
					<ProductCoverImage
						src={product.coverImage.src}
						alt={product.coverImage.alt}
					/>
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
