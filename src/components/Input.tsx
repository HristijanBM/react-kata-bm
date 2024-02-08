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
      <div className='relative my-3'>
        {label && (
          <label htmlFor={name} className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900">
            {label}
          </label>
        )}
        <input
          onChange={onChange}
          type={type}
          name={name}
          className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          ref={ref}
          {...rest}
        />
      </div>
    )
  })

export default Input
