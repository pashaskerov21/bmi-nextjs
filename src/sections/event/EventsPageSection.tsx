'use client'
import React from 'react'
import { EventCard, PageTitle } from '@/src/components'
import { Container, Grid, Section } from '@/src/styles/utils'
import { Breadcrumb, EventSectionProps } from '@/src/types'

const EventsPageSection: React.FC<EventSectionProps> = ({ activeLocale, eventData, eventTranslateData, titleDictionary }) => {
    const breadcrumbs: Breadcrumb[] = [
        {
            id: 1,
            name: titleDictionary.events,
            path: `/${activeLocale}/events`

        }
    ]
    return (
        <Section $py={20}>
            <Container>
                <PageTitle activeLocale={activeLocale} title={titleDictionary.events} breadcrumbs={breadcrumbs} titleDictionary={titleDictionary} />
                <Grid $col={4}>
                    {
                        eventData.map((data) => (
                            <React.Fragment key={data.id}>
                                <EventCard activeLocale={activeLocale} eventData={data} eventTranslateData={eventTranslateData}/>
                            </React.Fragment>
                        ))
                    }
                </Grid>
            </Container>
        </Section>
    )
}

export default EventsPageSection
