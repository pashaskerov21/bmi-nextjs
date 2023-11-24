'use client'
import { PageTitle } from '@/src/components'
import { Container, Section } from '@/src/styles/utils'
import { Breadcrumb } from '@/src/types'
import React from 'react'

type SearchProps = {
    activeLocale: string,
    titleDictionary: { [key: string]: string },
}

const SearchSection: React.FC<SearchProps> = ({ activeLocale, titleDictionary }) => {
    const breadcrumbs: Breadcrumb[] = [
        {
            id: 1,
            path: `/${activeLocale}/search`,
            name: titleDictionary.search,
        }
    ]
    return (
        <Section $py={20}>
            <Container>
                <PageTitle
                    activeLocale={activeLocale}
                    titleDictionary={titleDictionary}
                    title={titleDictionary.search}
                    breadcrumbs={breadcrumbs} />
            </Container>
        </Section>
    )
}

export default React.memo(SearchSection)
