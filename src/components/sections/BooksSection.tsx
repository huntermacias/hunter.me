import React from 'react'
import { Section } from '../Section'
import { ExternalLink } from '../ExternalLink'

type Props = {
    Books: any
}

const BooksSection = ({Books}:Props) => {
  return (
    <Section>
    <Section.Title as="h2">Books worth re-reading</Section.Title>
    <Section.Content>
      <ul className="mt-1 list-disc list-inside">
        {Books.map((book:any) => (
          <li key={book.name}>
            <ExternalLink href={book.link}>{book.name}</ExternalLink>
          </li>
        ))}
      </ul>
    </Section.Content>
  </Section>
  )
}

export default BooksSection