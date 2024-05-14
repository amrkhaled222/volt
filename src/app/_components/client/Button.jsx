export default function Button({
  title,
  mobile_width,
  pc_width,
  bg_color,
  text_color,
  children,
  handleClick
}) {
  let classes =
    "rounded-3xl  block p-2 border-2 border-solid font-plusj" +
    ` ${mobile_width}` +
    ` ${pc_width}` +
    ` ${bg_color}` +
    ` ${text_color}`;
  return (
    <button className={classes} onClick={handleClick}>
      {title} {children}
    </button>
  );
}
