import { Outlet } from 'react-router-dom'
import Navbar from '@/components/custom/Navbar'

export default function Layout() {
    return (
        <>
            <Navbar />
            <main className='antialiased min-h-screen bg-background font-sans'>
                <Outlet />
            </main>
        </>
    )
}
