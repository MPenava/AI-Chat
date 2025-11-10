"use client"
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Rocket } from 'lucide-react'

const Iframe = () => {
    const router = useRouter()
    const goRoot = () => router.push('/')

    return (
        <div className="font-sans min-h-[100vh] flex flex-col items-center p-6">
            <main className="w-full max-w-2xl flex flex-col gap-4 flex-1 align-items-center justify-center">
                <div className='items-center'>
                    <h1 className="text-3xl font-semibold mb-3">Start AI Chat</h1>
                    { /* changed: attach onClick to navigate to root */}
                    <Button size="lg" className="w-fit" onClick={goRoot}>
                        <Rocket />
                        Start Chat
                    </Button>
                </div>
            </main>
        </div>
    )
}

export default Iframe