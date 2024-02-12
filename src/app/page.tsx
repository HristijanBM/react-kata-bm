import Link from "next/link";

import { Navbar } from "@/src/components";

export default function Home() {
  return (
    <>
        <Navbar />
        <div className="flex items-center justify-center flex-col">
            <h1>Go and add new activity!</h1>
            <div className="flex flex-col underline mt-5">
                <Link href='/activity'>Activity</Link>
            </div>
        </div>
    </>
  )
}
