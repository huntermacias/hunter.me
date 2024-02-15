import React from 'react'
import { Section } from '../Section'
import { ExternalLink } from '../ExternalLink'

type Props = {
    Podcasts: any
}

const PodcastSection = ({Podcasts}:Props) => {
  return (
    <Section>
              <Section.Title as="h2">Podcasts I listen to</Section.Title>
              <Section.Content>
                <ul className="mt-1 list-disc list-inside">
                  {Podcasts.map((podcast:any) => (
                    <li key={podcast.name}>
                      <ExternalLink href={podcast.link}>{podcast.name}</ExternalLink>
                    </li>
                  ))}
                </ul>
              </Section.Content>
            </Section>
  )
}

export default PodcastSection