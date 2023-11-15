import { TrainerTranslateType, TrainerType } from '@/src/types'
import React from 'react'
import { TrainerCardWrapper } from './style';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';
import { FaShareAlt } from "react-icons/fa";

type CardProps = {
    activeLocale: string,
    trainerData: TrainerType,
    trainerTranslateData: TrainerTranslateType[],
}

const TrainerCard: React.FC<CardProps> = ({ activeLocale, trainerData, trainerTranslateData }) => {
    const [iconShow, setIconShow] = React.useState<boolean>(false);
    const requiredTranslate: TrainerTranslateType | undefined = trainerTranslateData.find((data) => data.trainer_id === trainerData.id && data.lang === activeLocale);
    return (
        <React.Fragment>
            <TrainerCardWrapper>
                <div className="image">
                    <Image className='trainer-img' src={trainerData.image} width={300} height={300} alt='trainer' />
                    <div className="linear-hover"></div>
                    <div className="icons">
                        <div className={`socials ${iconShow && 'active'}`}>
                            <Link href={trainerData.facebook ? trainerData.facebook : '/'}><FaFacebookF /></Link>
                            <Link href={trainerData.instagram ? trainerData.instagram : '/'}><FaInstagram /></Link>
                            <Link href={trainerData.linkedin ? trainerData.linkedin : '/'}><FaLinkedinIn /></Link>
                            <Link href={trainerData.twitter ? trainerData.twitter : '/'}><FaTwitter /></Link>
                        </div>
                        <div className="show-btn" onClick={() => setIconShow(!iconShow)}>
                            <FaShareAlt/>
                        </div>
                    </div>
                </div>
                {
                    requiredTranslate ? (
                        <Link href={`/trainers/${encodeURIComponent(requiredTranslate.name.toLocaleLowerCase())}`} className='info'>
                            <div className='name'>{requiredTranslate.name}</div>
                            <div className='position'>{requiredTranslate.position}</div>
                        </Link>
                    ) : null
                }
            </TrainerCardWrapper>
        </React.Fragment>
    )
}

export default React.memo(TrainerCard)
