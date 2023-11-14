'use client'
import { Container, Section } from '@/src/styles/utils'
import React from 'react'
import { ErrorWrapper } from './style'
import Link from 'next/link'

type ErrorProps = {
  errorDictionary: { [key: string]: string },
  titleDictionary: { [key: string]: string }
}

const Page404Section: React.FC<ErrorProps> = ({ errorDictionary, titleDictionary }) => {
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
