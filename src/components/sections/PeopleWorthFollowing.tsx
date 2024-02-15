import React from 'react'
import { Section } from '../Section'
import { ExternalLink } from '../ExternalLink'

type Props = {
    PeopleWorthFollowingOnTwitter: any
}

const PeopleWorthFollowing = ({ PeopleWorthFollowingOnTwitter }: Props) => {
    return (
        <Section>
            <Section.Title as="h2">People with unique perspective I follow</Section.Title>
            <Section.Content>
                {PeopleWorthFollowingOnTwitter.map((personOnTwitter: any) => (
                    <ExternalLink key={personOnTwitter.name} href={personOnTwitter.link}>
                        {personOnTwitter.name}
                    </ExternalLink>
                )).reduce((prev: any, curr: any) => [prev, ', ', curr])}
                .
            </Section.Content>
        </Section>
    )
}

export default PeopleWorthFollowing