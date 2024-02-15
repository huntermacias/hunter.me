import React from 'react'
import { Section } from '../Section'
import { Quote } from '../Quote'

type Props = {
    randomQuote: any
}

const QuoteSection = ({ randomQuote }: Props) => {
    return (
        <Section>
            <Section.Title as="h2">Quote worth thinking about</Section.Title>
            <Section.Content>
                <div className="mt-8">
                    <Quote quote={randomQuote.content} author={randomQuote.author} />
                </div>
            </Section.Content>
        </Section>
    )
}

export default QuoteSection