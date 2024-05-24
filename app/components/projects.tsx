import { Card } from "@/components/ui/card"
import Image from "@/node_modules/next/image"
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import Link from "@/node_modules/next/link";


interface LanguageProps {
    language: string
}

export default function Projects({ language }: LanguageProps) {



    const projects = [
        {
            id: 1,
            title: "Simplifica - Gestão financeira pessoal",
            titleEn: "Simplify - Personal financial management",
            skilss: "React Native + Firebase",
            imageUrl: 'https://camo.githubusercontent.com/095368d8323e75d3b28dcdeb2c0628c02f311d1ef67c2aea5690bcf5a4fcedf5/68747470733a2f2f692e6962622e636f2f524e67365976442f30346534663139662d626637382d343639662d383535362d3064653533366163353533302e6a7067',
            git: 'https://github.com/jotta2021/financesAppMobile'

        },
        {
            id: 2,
            title: "Sistema de chamados",
            titleEn: "Call system",
            skilss: "React JS + Firebase",
            imageUrl: 'https://raw.githubusercontent.com/jotta2021/_chamados/master/tt.png',
            git: 'https://github.com/jotta2021/_chamados'

        },
        {
            id: 3,
            title: "Previsão do tempo",
            titleEn: "Weather forecast",
            skilss: "React Native ",
            imageUrl: 'https://raw.githubusercontent.com/jotta2021/weatherApp24/master/Imagem%20do%20WhatsApp%20de%202024-02-11%20%C3%A0(s)%2012.13.25_2588516f.jpg',
            git: 'https://github.com/jotta2021/weatherApp24'

        },
        {
            id: 4,
            title: "Receita Fácil",
            titleEn: "Easy Recipe",
            skilss: "React Native + JSON Server",
            imageUrl: 'https://raw.githubusercontent.com/jotta2021/appReceitaFacil_reactnative/master/Imagem%20do%20WhatsApp%20de%202023-10-22%20%C3%A0(s)%2021.36.14_201bfabf.jpg',
            git: 'https://github.com/jotta2021/appReceitaFacil_reactnative'

        },

        {
            id: 5,
            title: "Dev Filmes",
            titleEn: "Dev Movies",
            skilss: "React JS",
            imageUrl: '/devfilmes.png',
            git: 'https://github.com/jotta2021/appReceitaFacil_reactnative'

        },
        {
            id: 5,
            title: "Reserve Já",
            titleEn: "Reserve Now",
            skilss: "React Native + MySql",
            imageUrl: ' https://user-images.githubusercontent.com/89715505/228694697-d6464ac8-41ee-49a6-b3f3-53e6d39520ce.jpg',
            git: 'https://github.com/jotta2021/app-hotel-my-sql-teste'

        }
    ]



    return (
        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1 ">
            {
                projects.map((project) => (
                    <Card key={project.id} className='hover:animate-pulse'>
                        <div className='min-w-[20rem] min-h-[24rem] text-center'>
                            {/**IMAGEM */}
                            <div className="w-full relative h-[15rem]">
                                <Image
                                    src={project.imageUrl}
                                    fill
                                    alt={project.title}
                                    className='object-cover object-top'


                                />
                            </div>

                            {/**titulo */}
                            <div>
                                <h2 className="font-semibold mt-4">{language === 'pt-br' ? project.title : project.titleEn}</h2>

                                <p className="text-muted-foreground ">{project.skilss}</p>
                                <Link href={project.git} target='_blank'>
                                    <Button

                                        className="text-white gap-2 mt-2"
                                    >
                                        {
                                            language === 'pt-br' ?
                                                'Repositório' : 'Repository'
                                        }

                                        <Github size={16} />
                                    </Button>
                                </Link>

                            </div>
                        </div>

                    </Card>
                ))
            }

        </div>
    )
}