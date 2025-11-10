"use client"
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Rocket } from 'lucide-react'

const Iframe = () => {
    const router = useRouter()
    const goRoot = () => router.push('/')

    return (
        <div className="font-sans min-h-[100vh] flex flex-col items-center p-6">
            <main className="w-full max-w-2xl flex flex-col gap-4 flex-1 items-center justify-center">
                <div className="flex flex-col items-center justify-center text-center gap-4">
                    <h1 className="text-3xl font-semibold mb-3 text-center">Start AI Chat</h1>
                    <Button size="lg" variant="outline" className="w-fit" onClick={goRoot}>
                        <Rocket />
                        Chat about Marko Penava
                    </Button>
                </div>
            </main >
        </div >
    )
}

export default Iframe