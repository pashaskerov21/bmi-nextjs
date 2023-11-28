'use client'
import { PhotoGalleryProps } from '@/src/types'
import React from 'react'
import { PhotoWrapper } from './style'
import Image from 'next/image'
import Link from 'next/link'
import { FaSearch } from "react-icons/fa";



const Photos: React.FC<PhotoGalleryProps> = ({ photos }) => {
  return (
    <PhotoWrapper>
      {
        photos.map((data) => (
          <React.Fragment key={data.id}>
            <div className="image">
              <Image src={data.image} width={300} height={300} priority={true} alt='' />
              <div className="layer">
                <Link href={data.image} data-fancybox="">
                  <FaSearch />
                </Link>
              </div>
            </div>
          </React.Fragment>
        ))
      }
    </PhotoWrapper>
  )
}

export default React.memo(Photos)
