import { useNavigate } from "react-router-dom"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import { Button } from "../ui/button"

const ErrorPage = () => {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-zinc-900 px-4">
            <div className="max-w-md w-full text-center space-y-6 p-6 border border-red-200 dark:border-red-800 rounded-2xl shadow-md bg-red-50 dark:bg-red-900/10">
                <div className="flex justify-center">
                    <ExclamationTriangleIcon className="w-12 h-12 text-red-500" />
                </div>
                <h1 className="text-2xl font-bold text-red-700 dark:text-red-300">Oops! Something went wrong.</h1>
                <p className="text-gray-600 dark:text-gray-300">
                    We could not process your request. Try again or go back to the homepage.
                </p>
                <div className="flex justify-center space-x-4">
                    <Button
                        variant={"secondary"}
                        onClick={() => navigate("/")}
                    >
                        Home
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage
