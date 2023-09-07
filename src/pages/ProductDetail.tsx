import { useRouter } from "next/router";

function ProductDetail() {
	const router = useRouter();
	const { productId } = router.query;

	return (
		<div>
			<h1>Product Details</h1>
			<p>Details for Product ID: {productId}</p>
		</div>
	);
}

export default ProductDetail;
