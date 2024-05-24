'use client'

import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from "@/node_modules/next/link";
import Header from "./components/header";
import Image from "@/node_modules/next/image";
import Techs from "./components/Techs";
import TimeLine from "./components/Timeline";
import { useState } from "react";
import Projects from "./components/projects";
import Footer from "./components/footer";

export default function App() {
  //controla o idioma
  const [language, setLanguage] = useState('pt-br')

  //controla o modo escuro e claro
  const [darkMode, setDarkMode] = useState(false)



  const texts = {
    "pt-br": {
      "developer": "Desenvolvedor Front-end",
      "aboutTitle": "Sobre mim",
      "about": `Olá! Sou Joanderson Luan, um entusiasta apaixonado por tecnologia,
      tenho amplo conhecimento no  desenvolvimento front-end para criar experiências digitais cativantes.
      Com um foco especial em React JS, Next JS e React Native,
      busco constantemente expandir meu conhecimento e habilidades para construir interfaces dinâmicas
      e responsivas que elevem o padrão da web e das aplicações móveis.`,
      "skills": "Habilidades",
      "projects": "Projetos"
    },
    "en": {
      "developer": "Front-end Developer",
      "aboutTitle": "About me",
      "about": `Hello! I'm Joanderson Luan, a passionate technology enthusiast,
      I have extensive knowledge in front-end development to create captivating digital experiences.
      With a special focus on React JS, Next JS and React Native,
      I constantly seek to expand my knowledge and skills to build dynamic interfaces
      and responsive solutions that raise the standard of the web and mobile applications.`,
      "skills": "Skills",
      "projects": "Projects"
    }
  }
  if (!(language in texts)) {
    return null; // or handle the error appropriately
}

  const { developer, aboutTitle, about, skills, projects } = texts[language];
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div className={darkMode ? ['text-white bg-black'] : 'text-black'}>
      <Header language={language} setLanguage={setLanguage} darkMode={darkMode} setDarkMode={setDarkMode} scroll={scrollToSection} />
      <div className="mx-5 my-3">
        <div className="flex flex-col justify-center items-center ">
          {/**TITULO PRINCIPAL */}
          <h1 className="font-semibold text-5xl text-cyan-500 mt-[12rem]">Joanderson Luan</h1>
          <h1 className={darkMode ? 'text-white font-semibold text-3xl' : 'text-muted-foreground font-semibold text-3xl'}>{developer}</h1>
          {/**REDES SOCIAIS */}
          <Card className="text-muted-foreground  flex justify-center items-center h-12 w-32 mt-2">

            <div className="flex gap-3 items-center">
              <Link href='https://github.com/jotta2021' target={'_blank'} >
                <Github size={24} />
              </Link>
              <Link href='https://www.linkedin.com/in/joanderson-luan-santos-0a187a252/' target={'_blank'} >
                <Linkedin size={24} />
              </Link>
              <Link href='mailto:joanderson2572@gmail.com' target={'_blank'} >
                <Mail size={24} />
              </Link>
            </div>
          </Card>
        </div>

        {
          /**  COMPONENT ABOUT - SOBRE MIM  */
          // FUNÇÃO TESTE
        }
        <div id="about" className="flex  flex-col items-center my-96 gap-3 ">
          <h3 className="font-semibold text-lg text-cyan-500">{aboutTitle}</h3>
          <div className="flex items-center gap-3 max-sm:flex-col">
            <Image src={'/profile.png'}
              objectFit='cover'
              width={150}
              height={150}
              alt="Joanderson Luan"
            />
            <p className="text-muted-foreground w-[40rem] max-sm:w-[25rem]">{about}</p>
          </div>
          <TimeLine language={language} />

        </div>
        <div className="flex  flex-col items-center my-96 gap-3 ">
          <h3 className="font-semibold text-lg text-cyan-500">{skills}</h3>

          <div id='skills'>
            <Techs language={language} />
          </div>



        </div>

        <div id='projects' className="flex  flex-col items-center my-96 gap-3 ">
          <h3 className="font-semibold text-lg text-cyan-500">{projects}</h3>


          <Projects language={language} />

        </div>

      </div>
      <Footer language={language} />
    </div>
  )
}