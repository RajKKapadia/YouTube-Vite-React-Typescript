import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom"

function Navbar() {
    const location = useLocation();

    const pathName = location.pathname

    return (
        <nav className='flex gap-4 items-center justify-center mt-8 font-extrabold mb-8'>
            <Link
                to="/counter"
                className={cn(pathName.includes("/counter") ? "bg-accent" : "")}
            >
                Counter
            </Link>
            |
            <Link
                to="/redux"
                className={cn(pathName.includes("/redux") ? "bg-accent" : "")}
            >
                Redux Counter
            </Link>
            |
            <Link
                to="/query"
                className={cn(pathName.includes("/query") ? "bg-accent" : "")}
            >
                Fetch Data
            </Link>
            |
            <Link
                to="/form"
                className={cn(pathName.includes("/form") ? "bg-accent" : "")}
            >
                Form
            </Link>
        </nav>
    );
}

export default Navbar
