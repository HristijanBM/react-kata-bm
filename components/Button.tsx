interface ButtonsProps {
  buttonText?: string
  isDisabled?: boolean
  onClick: () => void
}

export default function Button({ onClick, buttonText = 'Submit' }: ButtonsProps) {
    return (
      <button
        onClick={onClick}
        type="button"
        className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        {buttonText}
      </button>
    )
}