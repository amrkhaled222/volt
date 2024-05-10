export default function StyledButton({ handleClicking, style, text }) {
    return (
        <button
            className={` ${style}  uppercase border rounded-lg  font-medium text-sm hover:scale-95  duration-300 `}
            onClick={() => {
                handleClicking()
            }}>
            {text}
        </button>
    )
}
