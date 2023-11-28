'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { TrainerCardWrapper } from './style';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';
import { FaShareAlt } from "react-icons/fa";
import { TrainerCardProps, TrainerTranslateDataType } from '@/src/types';



const TrainerCard: React.FC<TrainerCardProps> = ({ activeLocale, trainerData, trainerTranslateData }) => {
    const [iconShow, setIconShow] = React.useState<boolean>(false);
    const requiredTranslate: TrainerTranslateDataType | undefined = trainerTranslateData.find((data) => data.trainer_id === trainerData.id && data.lang === activeLocale);
    return (
        <React.Fragment>
            {
                requiredTranslate ? (
                    <TrainerCardWrapper>
                        <div className="top">
                            <Link href={`/${activeLocale}/trainers/${encodeURIComponent(requiredTranslate.name.toLocaleLowerCase())}`} className='image'>
                                <Image className='trainer-img' src={trainerData.image} width={300} height={300} alt='trainer' />
                                <div className="linear-hover"></div>
                            </Link>
                            <div className="icons">
                                <div className={`socials ${iconShow && 'active'}`}>
                                    <Link href={trainerData.facebook ? trainerData.facebook : '/'}><FaFacebookF /></Link>
                                    <Link href={trainerData.instagram ? trainerData.instagram : '/'}><FaInstagram /></Link>
                                    <Link href={trainerData.linkedin ? trainerData.linkedin : '/'}><FaLinkedinIn /></Link>
                                    <Link href={trainerData.twitter ? trainerData.twitter : '/'}><FaTwitter /></Link>
                                </div>
                                <div className="show-btn" onClick={() => setIconShow(!iconShow)}>
                                    <FaShareAlt />
                                </div>
                            </div>
                        </div>
                        <Link href={`/${activeLocale}/trainers/${encodeURIComponent(requiredTranslate.name.toLocaleLowerCase())}`} className='bottom'>
                            <div className='name'>{requiredTranslate.name}</div>
                            <div className='position'>{requiredTranslate.position}</div>
                        </Link>
                    </TrainerCardWrapper>
                ) : null
            }
        </React.Fragment>
    )
}

export default React.memo(TrainerCard)
