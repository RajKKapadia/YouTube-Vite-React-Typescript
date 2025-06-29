import { Provider as ReduxProvider } from 'react-redux'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter } from 'react-router-dom'
import { store } from '@/app/store'
import type { ReactNode } from 'react'

const queryClient = new QueryClient()

type Props = {
    children: ReactNode
}

function CustomProviders({ children }: Props) {
    return (
        <ReduxProvider store={store}>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    {children}
                </BrowserRouter>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </ReduxProvider>
    )
}

export default CustomProviders
