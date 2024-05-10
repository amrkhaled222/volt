function SizeButton({ handleActive, isActive, ...props }) {
	let classes =
		`rounded-3xl  block p-2 border-2 border-solid font-plusj ${
			isActive ? `bg-black text-white` : `bg-main_gray`
		}` +
		` ${props.mobile_width}` +
		` ${props.pc_width}` +
		` ${props.text_color}`;
	return (
		<button
			className={classes}
			onClick={handleActive}>
			{props.title}
		</button>
	);
}
export default SizeButton;
