import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

interface Todo {
    userId: number
    id: number
    title: string
    body: string
}

function FetchData() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['todos'],
        queryFn: () => axios.get('https://jsonplaceholder.typicode.com/posts').then(res => res.data),
    })

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error loading users</p>

    const todos: Todo[] = data

    return (
        <ul className='flex flex-col items-center mt-12'>
            {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
    )
}

export default FetchData
