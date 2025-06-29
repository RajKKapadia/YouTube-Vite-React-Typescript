import { Button } from "@/components/ui/button"
import { useState } from "react"

function CounterPage() {
    const [count, setCount] = useState<number>(0)
    const [error, setError] = useState<string>("")
    if (count < 0) {
        setCount(0)
        setError("Counter can't be negative :-).")
    }
    return (
        <div className="flex flex-col items-center justify-center mt-12">
            <h1>Counter example:</h1>
            <div className="mt-4 flex flex-col items-center">
                <h4>Count: {count}</h4>

                {error !== ""
                    ? <h1 className="text-destructive">{error}</h1>
                    : <></>}

                <div className="flex gap-4 mt-4">
                    <Button onClick={() => {
                        setCount(count + 1)
                        setError("")
                    }}>Add</Button>
                    <Button onClick={() => setCount(count - 1)}>Subtract</Button>
                    <Button onClick={() => {
                        setCount(0)
                        setError("")
                    }}>Reset</Button>
                </div>
            </div>
        </div>
    )
}

export default CounterPage
