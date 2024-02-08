import ExercisesCategory from "@/src/components/ExercisesCategory";
import FoodCategory from "@/src/components/FoodCategory";
import NotesCategory from "@/src/components/NotesCategory";

const componentToShow = [
    {
        route: 'exercises',
        component: <ExercisesCategory />
    },
    {
        route: 'food',
        component: <FoodCategory />
    },
    {
        route: 'notes',
        component: <NotesCategory />
    },
]

export default function Category({ params }: { params: { category: string } }) {
    const component = componentToShow.find((c) => c.route === params.category)?.component

    return (
        <>
            {component}
        </>
    )
}