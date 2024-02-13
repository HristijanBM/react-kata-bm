import { forwardRef } from "react"

interface SelectActivityProps {
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
    label: string
    options: {
        value: string;
        label: string;
    }[]
}

const SelectActivity = forwardRef<HTMLSelectElement, SelectActivityProps>(
    ({ onChange, label, options, ...rest }, ref) => {
    return (
        <>
            <label>{label}</label>
            <select
                onChange={onChange}
                className="mt-2 block w-full rounded-md border-0 p-2 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ref={ref}
                {...rest}
            >
                {options?.map((o) => (
                    <option value={o.value}>{o.label}</option>    
                ))}
            </select>
        </>
    )
})

export default SelectActivity
