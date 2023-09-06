import Image from "next/image";

export const ProductCoverImage = ({
	src,
	alt,
}: {
	src: string;
	alt: string;
}) => {
	return (
		<div className="bg-state-50 aspect-square overflow-hidden rounded-md border">
			<Image
				src={src}
				alt={alt}
				layout="responsive"
				width={320}
				height={320}
				className="object-cover object-center p-4 transition-transform hover:scale-105"
			/>
		</div>
	);
};
