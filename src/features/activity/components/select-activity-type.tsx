
interface SelectActivityProps {
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const SelectActivity = ({ onChange }: SelectActivityProps) => {
    return (
        <>
            <label>Search for specific activity type</label>
            <select
                onChange={onChange}
                className="mt-2 block w-full rounded-md border-0 p-2 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue="learning"
            >
                <option value="exercise">Exercise</option>
                <option value="learning">Learning</option>
                <option value="food">Food</option>
                <option value="">All</option>
            </select>
        </>
    )
}

export default SelectActivity
