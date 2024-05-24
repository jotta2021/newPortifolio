"use client"
import { Button } from "@/components/ui/button"
import Image from "@/node_modules/next/image"
import { Switch } from "@/components/ui/switch"


interface LanguageProps {
  language: 'pt-br' | 'en',
    setLanguage: (language: string) => void;
    darkMode: string,
    setDarkMode: (darkMode: boolean) => void;
    scroll: () => void;

}



export default function Header({ language, setLanguage, darkMode, setDarkMode, scroll }: LanguageProps) {
    const changeLanguage = () => {
        const newLanguage = language === 'pt-br' ? 'en' : 'pt-br'; //alterna entre os idiomas
        setLanguage(newLanguage)
    }
    const texts = {
        'pt-br': {
            about: 'Sobre mim',
            projects: 'Projetos',
            contact: 'Contato',
            Habilidades: 'Hablidades'
        },
        'en': {
            about: 'About me',
            projects: 'Projects',
            contact: 'Contact',
            Habilidades: 'Skills'
        }
    }
    const { about, projects, contact,Habilidades } = texts[language]
    console.log('darkMode', darkMode)
    return (
        <div className={"flex w-[100vw] fixed top-0 z-50"} style={{ backgroundColor: darkMode ? 'black' : 'white' }}>
            <div className="flex justify-between my-3 mx-5 w-full items-center">

                <span className={darkMode ? 'text-white  max-sm:hidden' : ' text-muted-foreground  max-sm:hidden'}>Joanderson Luan <span className="text-cyan-500">{'</>'}</span></span>
                <ul className="flex gap-4 items-center">
                    <li className='cursor-pointer hover:text-cyan-500'
                        onClick={() => scroll('about')}
                    >{about}</li>
                    <li className='cursor-pointer  hover:text-cyan-500'
                        onClick={() => scroll('projects')}
                    >{projects}</li>
                    <li className='cursor-pointer  hover:text-cyan-500'
                        onClick={() => scroll('skills')}
                    >{Habilidades}</li>

                    <Switch
                        checked={darkMode}
                        onCheckedChange={setDarkMode}
                    />



                    <Button variant='outline' size='icon'
                        onClick={changeLanguage}
                    >
                        <Image src={language === 'pt-br' ? '/square.png' : '/eua.png'} width={30} height={30}
                            alt='language'
                        />
                    </Button>

                </ul>

            </div>
        </div >
    )
}