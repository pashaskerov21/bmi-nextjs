'use client'
import React from 'react'
import Link from 'next/link'
import { Container, Section } from '@/src/styles/utils'
import { ErrorWrapper } from './style'
import { Section404Props } from '@/src/types'

const Page404Section: React.FC<Section404Props> = ({ errorDictionary, titleDictionary }) => {
  return (
    <Section $py={20}>
      <Container>
        <ErrorWrapper>
          <div className="error-code">404</div>
          <div className="message">{errorDictionary.page_404}</div>
          <Link href='/'>{titleDictionary.home}</Link>
        </ErrorWrapper>
      </Container>
    </Section>
  )
}

export default React.memo(Page404Section);
