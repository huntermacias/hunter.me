import React from 'react'
import { Section } from '../Section'
import { ExternalLink } from '../ExternalLink'

type Props = {
    Blogs: any
}

const BlogsSection = ({Blogs}: Props) => {
  return (
    <Section>
              <Section.Title as="h2">Blogs I read</Section.Title>
              <Section.Content>
                <ul className="mt-1 list-disc list-inside">
                  {Blogs.map((blog:any) => (
                    <li key={blog.name}>
                      <ExternalLink href={blog.link}>{blog.name}</ExternalLink>
                    </li>
                  ))}
                </ul>
              </Section.Content>
            </Section>
  )
}

export default BlogsSection