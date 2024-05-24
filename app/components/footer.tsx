interface LanguageProps {
    language: string;
}
export default function Footer({ language }: LanguageProps) {

    return (
        <div className="bg-cyan-500 w-full min-h-10 justify-center text-white">
            <span className='mx-3 mt-4'> {language === 'pt-br' ? 'Criado por' : 'Created by'} Joanderson Luan</span>
        </div>
    )
}