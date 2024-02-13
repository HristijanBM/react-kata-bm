export const baseInputs = [
    {
        name: 'title',
        type: 'text',
        placeholder: 'Title',
        label: 'Title',
    },
    {
        name: 'duration',
        type: 'text',
        placeholder: 'Duration in minutes',
        label: 'Duration',
    },
    {
        name: 'intensity',
        type: 'text',
        placeholder: 'Intensity',
        label: 'Intensity',
    },
    {
        name: 'note',
        type: 'text',
        placeholder: 'Note',
        label: 'Note',
    },
]

const baseSelectInputOptions = [
    {
        value: "exercise",
        label: "Exercise"
    },
    {
        value: "learning",
        label: "Learning"
    },
    {
        value: "food",
        label: "Food"
    },
]

export const addActivityFormSelectInputOptions = [
    ...baseSelectInputOptions
]

export const filterActivitiesByTypeSelectInputOptions = [
    ...baseSelectInputOptions,
    {
        value: "",
        label: "All"
    },

]
