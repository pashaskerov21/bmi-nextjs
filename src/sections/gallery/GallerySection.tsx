'use client'
import { Photos, SectionTitle, Videos } from '@/src/components'
import { Container, Section } from '@/src/styles/utils'
import { GalleryDataType, GallerySectionProps } from '@/src/types'
import React from 'react'
import { GalleryButtons } from './style'

const GallerySection: React.FC<GallerySectionProps> = ({ titleDictionary, buttonDictionary, galleryData }) => {
    const [galleryType, setGalleryType] = React.useState<string>('photo');

    const photos: GalleryDataType[] = galleryData.filter((data) => data.type === 'photo');
    const videos: GalleryDataType[] = galleryData.filter((data) => data.type === 'video');

    return (
        <Section $py={20}>
            <Container>
                <SectionTitle title={titleDictionary.gallery_home} />
                <GalleryButtons>
                    {photos && photos.length > 0 ? (
                        <div className={`btn ${galleryType === 'photo' ? 'active' : ''}`} onClick={() => setGalleryType('photo')}>{buttonDictionary.photos}</div>
                    ) : null}
                    {photos && photos.length > 0 ? (
                        <div className={`btn ${galleryType === 'video' ? 'active' : ''}`} onClick={() => setGalleryType('video')}>{buttonDictionary.videos}</div>
                    ) : null}
                </GalleryButtons>
            </Container>
            {(photos && photos.length > 0 && galleryType === 'photo') ? (
                <React.Fragment>
                    <Photos photos={photos} />
                </React.Fragment>
            ) : null}
            {(videos && videos.length > 0 && galleryType === 'video') ? (
                <React.Fragment>
                    <Videos videos={videos} />
                </React.Fragment>
            ) : null}
        </Section>
    )
}

export default React.memo(GallerySection)
