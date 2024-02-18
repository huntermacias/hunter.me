import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ArticleJsonLd, NextSeo } from 'next-seo';
import ReactMarkdown from 'react-markdown';
import { Note as NoteType, notesApi } from '../../lib/notesApi';
import { NoteLayout } from '../../components/notes/NoteLayout';
import { XIcon } from '../../components/icons/XIcon';

interface Props {
  note: NoteType;
  noteContent: string;
}

const NotePage: NextPage<Props> = ({ note, noteContent }) => {
  const { title, description, createdAt, slug } = note;
  const url = `${process.env.NEXT_PUBLIC_URL}/notes/${slug}`;
  const openGraphImageUrl = `${process.env.NEXT_PUBLIC_URL}/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`;

  return (
    <>
      <NextSeo title={title} description={description} canonical={url} openGraph={{ images: [{ url: openGraphImageUrl }] }} />
      <ArticleJsonLd url={url} images={[openGraphImageUrl]} title={title} datePublished={createdAt} authorName="Hunter Macias" description={description} />
      <NoteLayout meta={{ title, description, date: createdAt }}>
        <div className="pb-32">
          <h3 className='font-bold text-black dark:text-white'>Project Description</h3>
          <ReactMarkdown>{description}</ReactMarkdown>

          <hr className="my-8 mb-20" />
        </div>
      </NoteLayout>
    </>

  );
};

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async ({ params }) => {
  const slug = params?.slug;
  const note = await notesApi.getNotes().then(notes => notes.find(n => n.slug === slug));

  if (!note) {
    console.log('Note not found for slug:', slug);
    return { notFound: true };
  }

  const noteContent = await notesApi.getNote(note.id);
  return {
    props: {
      note,
      noteContent,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const notes = await notesApi.getNotes();
  const paths = notes.map(note => ({
    params: { slug: note.slug },
  }));

  console.log('Generated paths for getStaticPaths:', paths);

  return {
    paths,
    fallback: 'blocking', // or 'true' or 'false'
  };
};

export default NotePage;