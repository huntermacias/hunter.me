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


      {/* Insightful Analysis Section */}
      <section>
        <h2 className="text-2xl font-bold mt-8 mb-4">Insightful Analysis</h2>
        <p>Explore in-depth analysis and insights that dive deeper into the main themes. This section can contain additional commentary, expert opinions, or an expanded discussion on key points.</p>
      </section>

      <hr className="my-8" />

      {/* Related Articles or Content */}
      <section>
        <h2 className="text-2xl font-bold mt-8 mb-4">Related Articles</h2>
        <p>Discover more related content and expand your understanding. This section can link to related articles, videos, podcasts, or any relevant resources.</p>
        {/* Dynamically list related articles here */}
      </section>

      <hr className="my-8" />

      {/* User Engagement Section */}
      <section>
        <h2 className="text-2xl font-bold mt-8 mb-4">Join the Discussion</h2>
        <p>Encourage user engagement. Invite readers to share their thoughts, ask questions, or provide feedback in a comments section or via social media links.</p>
        {/* Comments or social media links */}
      </section>

      <hr className="my-8" />

      {/* Call to Action for Sharing */}
      <a className="group block text-xl font-semibold md:text-3xl no-underline" href={`http://x.com/share?text=${title}&url=${url}`}>
        <h4 className="max-w-lg flex cursor-pointer flex-col duration-200 ease-in-out group-hover:text-primary group-hover:fill-primary fill-white text-wrap">
          <XIcon className="my-6 h-10 w-10 transform transition-transform group-hover:-rotate-12 text-black dark:text-white group-hover:text-primary" />
          Click here to share with your friends on X.
        </h4>
      </a>
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