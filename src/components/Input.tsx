import { ExclamationCircleIcon } from '@heroicons/react/20/solid'
import { forwardRef } from 'react'

interface InputProps {
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    value?: string;
    placeholder: string
    label?: string
    type?: string;
    icon?: string // TODO: implement dynamic icon
    errorMessage?: string
    isInputValid?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ isInputValid, type, errorMessage, placeholder, onChange, value, name, label, ...rest }, ref) => {
  return (
    <div>
      {label && (
        <label htmlFor={`${name}`} className="block text-sm font-medium leading-6 text-gray-900">
          {label}
        </label>
      )}
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          onChange={onChange}
          type={type}
          name={name}
          className="block w-full rounded-md border-0 p-2 pr-10 ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
          placeholder={placeholder}
          ref={ref}
          {...rest}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <ExclamationCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
        </div>
      </div>
      {!isInputValid && (
            <p className="mt-2 text-sm text-red-600" id="email-error">
                {errorMessage}
            </p>
        )}
    </div>
  )
})

export default Input