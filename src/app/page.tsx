import { Navbar } from "@/src/components";

export default function Home() {
  return (
    <>
        <Navbar />
        <div className="flex items-center justify-center flex-col">
            <h1>Please select a cateogry to edit</h1>
            <div className="flex flex-col underline">
                <a href="/food">Food</a>
                <a href="/exercises">Exercises</a>
                <a href="/notes">Notes</a>
            </div>
        </div>
    </>
  )
}
