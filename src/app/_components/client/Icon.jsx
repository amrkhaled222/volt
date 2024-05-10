import Image from "next/image";
function Icon({ src, alt }) {
	return (
		<Image
			src={src}
			alt={alt}
		/>
	);
}
export default Icon;
