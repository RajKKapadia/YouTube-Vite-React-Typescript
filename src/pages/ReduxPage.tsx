import { Button } from "@/components/ui/button"
import { decrement, increment, reset } from "@/features/counter/counterSlice"
import type { RootState } from "@/app/store"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

function ReduxPage() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()
    const [error, setError] = useState<string>("")

    useEffect(() => {
        if (count < 0) {
            setError("Counter can't be negative :-).")
        }
    }, [count])

    return (
        <div className="flex flex-col items-center justify-center mt-12">
            <h1>Counter example:</h1>
            <div className="mt-4 flex flex-col items-center">
                <h4>Count: {count}</h4>

                {error !== ""
                    ? <h1 className="text-destructive mt-4">{error}</h1>
                    : <></>}

                <div className="flex gap-4 mt-4">
                    <Button onClick={() => {
                        dispatch(increment())
                        setError("")
                    }}>Add</Button>
                    <Button onClick={() => dispatch(decrement())}>Subtract</Button>
                    <Button onClick={() => {
                        dispatch(reset())
                        setError("")
                    }}>Reset</Button>
                </div>
            </div>
        </div>
    )
}

export default ReduxPage
