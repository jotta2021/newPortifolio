"use client"

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Trophy } from 'lucide-react';

interface LanguageProps {
    language: string,

}

export default function TimeLine({ language }: LanguageProps) {
    const texts = {
        "pt-br": {
            "text1": "Inicio da graduação em Sistemas de Informação na UFAL",
            "text2": "Primeiro contato com a Programação",
            "text3": "Aprendendo sobre HTML e CSS",
            "text4": "Inicio do primeiro curso do framework React JS",
            "text5": "Inicio dos estudos em React native",
            "text6": "Primeiro emprego como Desenvolvedor mobile"

        },
        "en": {
            "text1": "Start of graduation in Information Systems at UFAL",
            "text2": "First contact with Programming",
            "text3": "Learning about HTML and CSS",
            "text4": "Start of the first React JS framework course",
            "text5": "Beginning of studies in React native",
            "text6": "First job as a Mobile Developer"
        }
    }

    const { text1, text2, text3, text4, text5, text6 } = texts[language]
    return (

        <Timeline position='alternate'>
            <TimelineItem>
                <TimelineOppositeContent>2019</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>{text1}</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>2019</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>{text2}</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>2020</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>{text3}</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>2023</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>{text4}</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>2023</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>{text5}</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>2024</TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot className='bg-yellow-500'>
                        <Trophy className='text-white' />
                    </TimelineDot>

                </TimelineSeparator>
                <TimelineContent>{text6}</TimelineContent>
            </TimelineItem>
        </Timeline>

    )
}