import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react';
import Button from '../ui/button';


export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true)
    }, []);
    return (
        <>
            <div className='bg-gradient-to-b from-white to-gray-100'>
                <div className="container mx-auto px-4 py-20 md:py-32">
                    <div className='max-w-4xl mx-auto text-center'>
                        <div className={`transform transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2A2D43] via-[#2BA6FF] to-[#12664F] animate-pulse-subtle">
                                    Exploring the Future of Technology
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
                                Dive into the latest tech trends, innovations, and insights from industry experts.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Button className="tech-button flex items-center gap-2 bg-[#2BA6FF] hover:bg-opacity-80 text-white">
                                    Latest Articles
                                    <ArrowRight size={16} />
                                </Button>
                                <Button variant="outline" className="border-[#AA7A26] text-[#AA7A26] hover:bg-[#AA7A26]/10 font-medium">
                                    Subscribe to Newsletter
                                </Button>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M0 0L60 10C120 20 240 40 360 40C480 40 600 20 720 20C840 20 960 40 1080 50C1200 60 1320 60 1380 60L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
                            fill="#F8FAFC" />
                    </svg>
                </div>
            </div>
        </>
    )
}
