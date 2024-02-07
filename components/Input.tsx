import { ExclamationCircleIcon } from '@heroicons/react/20/solid'

interface InputProps {
    name: string
    type: string
    id?: string
    label?: string
    placeholder: string
    icon?: string // TODO: implement dynamic icon
    errorMessage?: string
    isInputValid?: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string
}

export default function Input(props: InputProps) {
  return (
    <div>
      {props.label && (
        <label htmlFor={`${props.name}`} className="block text-sm font-medium leading-6 text-gray-900">
          {props.label}
        </label>
      )}
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          value={props.value}
          onChange={props.onChange}
          type={`${props.type}`}
          name={`${props.name}`}
          id={`${props.id}`}
          className="block w-full rounded-md border-0 p-2 pr-10 ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
          placeholder={`${props.placeholder}`}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <ExclamationCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
        </div>
      </div>
      {!props.isInputValid && (
            <p className="mt-2 text-sm text-red-600" id="email-error">
                {props.errorMessage}
            </p>
        )}
    </div>
  )
}