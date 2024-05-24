'use client'

import { Card } from "@/components/ui/card"
import Image from "@/node_modules/next/image"

interface LanguageProps {
    language: string;
}
export default function Thecs({ language }: LanguageProps) {



    return (

        <Card className='p-12 '>

            <div className="grid grid-cols-9 items-center gap-4 max-lg:grid-cols-5 max-md:grid-cols-3 max-sm:grid-cols-1">
                <div className='flex flex-col items-center  '>
                    <Image
                        className="cursor-pointer hover:animate-bounce duration-75"
                        src={'/html.png'}
                        width={50}
                        height={50}
                        alt='html'
                    />
                    <span className='text-muted-foreground text-xl'>HTML</span>
                </div>
                <div className='flex flex-col items-center '>
                    <Image
                        className="cursor-pointer hover:animate-bounce duration-75"
                        src={'/css.png'}
                        width={50}
                        height={50}
                        alt='html'
                    />
                    <span className='text-muted-foreground text-xl'>CSS</span>
                </div>
                <div className='flex flex-col items-center '>
                    <Image
                        className="cursor-pointer hover:animate-bounce duration-75"
                        src={'/js.png'}
                        width={50}
                        height={50}
                        alt='html'
                    />
                    <span className='text-muted-foreground text-xl'>Javascript</span>
                </div>
                <div className='flex flex-col items-center '>
                    <Image
                        className="cursor-pointer hover:animate-bounce duration-75"
                        src={'/react.png'}
                        width={50}
                        height={50}
                        alt='html'
                    />
                    <span className='text-muted-foreground text-xl'>React</span>
                </div>
                <div className='flex flex-col items-center '>
                    <Image
                        className="cursor-pointer hover:animate-bounce duration-75"
                        src={'/react.png'}
                        width={50}
                        height={50}
                        alt='html'
                    />
                    <span className='text-muted-foreground text-xl'>React native</span>
                </div>
                <div className='flex flex-col items-center '>
                    <Image
                        className="cursor-pointer hover:animate-bounce duration-75"
                        src={'/github.png'}
                        width={50}
                        height={50}
                        alt='html'
                    />
                    <span className='text-muted-foreground text-xl'>Git</span>
                </div>
                <div className='flex flex-col items-center '>
                    <Image
                        className="cursor-pointer hover:animate-bounce duration-75"
                        src={'/firebase.png'}
                        width={50}
                        height={50}
                        alt='html'
                    />
                    <span className='text-muted-foreground text-xl'>Firebase</span>
                </div>
                <div className='flex flex-col items-center '>
                    <Image
                        className="cursor-pointer hover:animate-bounce duration-75"
                        src={'/node.png'}
                        width={50}
                        height={50}
                        alt='html'
                    />
                    <span className='text-muted-foreground text-xl'>Node JS</span>
                </div>
                <div className='flex flex-col items-center '>
                    <Image
                        className="cursor-pointer hover:animate-bounce duration-75"
                        src={'/postgre.png'}
                        width={50}
                        height={50}
                        alt='html'
                    />
                    <span className='text-muted-foreground text-xl'>PostgreSQL</span>
                </div>



            </div>
        </Card>

    )
}