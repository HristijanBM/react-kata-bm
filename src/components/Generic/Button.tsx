interface ButtonsProps {
  buttonText?: string
  isDisabled?: boolean
  onClick?: () => void
  type: "submit" | "reset" | "button" | undefined
}

export default function Button({ type, onClick, buttonText = 'Submit' }: ButtonsProps) {
    return (
      <button
        // onClick={onClick}
        type={type}
        className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        {buttonText}
      </button>
    )
}