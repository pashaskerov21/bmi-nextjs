'use client'
import { Container } from '@/src/styles/utils'
import React from 'react'
import { VideoWrapper } from './style'
import Image from 'next/image'
import Link from 'next/link'
import { FaPlay } from "react-icons/fa";
import { VideoGalleryProps } from '@/src/types'



const Videos: React.FC<VideoGalleryProps> = ({ videos }) => {
  return (
    <React.Fragment>
      <Container>
        <VideoWrapper>
          {
            videos.map((data) => (
              <React.Fragment key={data.id}>
                <div className='video'>
                  <Image src={data.image} width={400} height={300} alt='' />
                  <div className="layer">
                    <Link href={data.url} data-fancybox="">
                      <FaPlay />
                    </Link>
                  </div>
                </div>
              </React.Fragment>
            ))
          }
        </VideoWrapper>
      </Container>
    </React.Fragment>
  )
}

export default React.memo(Videos)
