import { CustomLoader } from '@/components/custom/CustomLoader'
import ErrorPage from '@/components/custom/ErrorMessage'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

interface Todo {
    userId: number
    id: number
    title: string
    body: string
}

function FetchDataPage() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['todos'],
        queryFn: () => axios.get('https://jsonplaceholder.typicode.com/posts').then(res => res.data),
    })

    if (isLoading) return <CustomLoader message='Loading...'></CustomLoader>
    if (error) return <ErrorPage></ErrorPage>

    const todos: Todo[] = data

    return (
        <ul className='flex flex-col items-center mt-12'>
            {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
    )
}

export default FetchDataPage
