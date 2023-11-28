'use client'
import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa6'
import { SocialMediaProps } from '../types'


const SocialMedia: React.FC<SocialMediaProps> = ({ settingData }) => {
  return (
    <div className='social-icons'>
      {settingData.facebook !== null && <Link href={settingData.facebook} target='_blank'><FaFacebookF /></Link>}
      {settingData.instagram !== null && <Link href={settingData.instagram} target='_blank'><FaInstagram /></Link>}
      {settingData.linkedin !== null && <Link href={settingData.linkedin} target='_blank'><FaLinkedinIn /></Link>}
      {settingData.twitter !== null && <Link href={settingData.twitter} target='_blank'><FaTwitter /></Link>}
      {settingData.youtube !== null && <Link href={settingData.youtube} target='_blank'><FaYoutube /></Link>}
    </div>
  )
}

export default React.memo(SocialMedia)
