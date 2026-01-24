
import Container from '@/components/common/Container'
import { Button } from '@/components/ui/button'
import { Home } from 'lucide-react'
import Link from 'next/link'


export default function NotFound() {
    return (
        <Container>
            <div className='flex flex-col justify-center items-center mx-auto px-4 max-w-3xl min-h-[70vh] text-center'>
                {/* 404 Glow Effect Background */}
                <div className="relative">
                    <h1 className="bg-clip-text bg-linear-to-b from-gray-300 dark:from-gray-300 to-gray-500 dark:to-gray-600 font-black text-[140px] text-transparent md:text-[180px] leading-none tracking-tighter select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex justify-center items-center">
                        <p className="mt-8 font-bold text-gray-900 dark:text-white text-2xl md:text-3xl">
                            Lost in Space?
                        </p>
                    </div>
                </div>

                {/* Content Area */}
                <div className="space-y-6 mt-4">
                    <p className="mx-auto max-w-md text-gray-600 dark:text-gray-400 text-lg">
                        Oops! The page you are looking for doesn't exist or has been moved to another galaxy.
                    </p>
                    {/* Buttons */}
                    <div className="flex sm:flex-row flex-col justify-center items-center gap-4 pt-4">
                        <Button asChild>
                            <Link
                                href="/"
                            >
                                <Home size={18} />
                                Go Back Home
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

        </Container>
    )
}