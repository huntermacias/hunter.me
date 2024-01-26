// @ts-nocheck
import { Client, isFullPage } from '@notionhq/client';
import { compareAsc, compareDesc } from 'date-fns';
import { NotionToMarkdown } from 'notion-to-md';


const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export type Note = {
  id: string;
  createdAt: string;
  lastEditedAt: string;
  coverImage: string | null;
  tags: string[];
  title: string;
  description: string;
  slug: string;
  isPublished: boolean;
  publishedAt: string;
  inProgress: boolean;
};



const CompareFunctionLookup = {
  asc: compareAsc,
  desc: compareDesc,
};

class NotesApi {
  constructor(
    private readonly notion: Client,
    private readonly databaseId: string,
  ) {}

  private n2m = new NotionToMarkdown({ notionClient: notion });


  async getNotes(sortOrder: 'asc' | 'desc' = 'desc', limit?: number) {
    const notes = await this.getDatabaseContent(this.databaseId);

    return notes
      .sort((a, b) => {
        return CompareFunctionLookup[sortOrder](new Date(a.publishedAt), new Date(b.publishedAt));
      })
      .slice(0, limit);
  }

  async getNotesByTag(tag: string, sortOrder: 'asc' | 'desc' = 'desc', limit?: number) {
    const notes = await notesApi.getNotes(sortOrder, limit);
    const relatedNotes = notes.filter((post) => post.tags.includes(tag));

    return relatedNotes;
  }

  async getNote(id: string): Promise<string> {
    const markdownContent = await this.getPageContent(id);
    return markdownContent;
  }
  

  async getAllTags() {
    const posts = await notesApi.getNotes();

    return Array.from(new Set(posts.map((note) => note.tags).flat()));
  }

  private getDatabaseContent = async (databaseId: string): Promise<Note[]> => {
    const db = await this.notion.databases.query({ database_id: databaseId });

    while (db.has_more && db.next_cursor) {
      const { results, has_more, next_cursor } = await this.notion.databases.query({
        database_id: databaseId,
        start_cursor: db.next_cursor,
      });
      db.results = [...db.results, ...results];
      db.has_more = has_more;
      db.next_cursor = next_cursor;
    }

    return db.results
      .map((page) => {
        if (!isFullPage(page)) {
          throw new Error('Notion page is not a full page');
        }

        return {
          id: page.id,
          createdAt: page.created_time,
          lastEditedAt: page.last_edited_time,
          coverImage: page.cover?.type === 'external' ? page.cover.external.url : null,
          tags:
            'multi_select' in page.properties.hashtags
              ? page.properties.hashtags.multi_select.map((tag) => tag.name)
              : [],
          title: 'title' in page.properties.title ? page.properties.title.title[0].plain_text : '',
          description:
            'rich_text' in page.properties.description
              ? page.properties.description.rich_text[0].plain_text
              : '',
          slug:
            'rich_text' in page.properties.slug ? page.properties.slug.rich_text[0].plain_text : '',
          isPublished:
            'checkbox' in page.properties.published ? page.properties.published.checkbox : false,
          publishedAt:
            'date' in page.properties.publishedAt ? page.properties.publishedAt.date!.start : '',
          inProgress:
            'checkbox' in page.properties.inProgress ? page.properties.inProgress.checkbox : false,
        };
      })
      .filter((post) => post.isPublished);
  };

  private getPageContent = async (pageId: string): Promise<string> => {
    const mdBlocks = await this.n2m.pageToMarkdown(pageId);
    const markdown = this.n2m.toMarkdownString(mdBlocks);
    return markdown; // Returns Markdown string
  };

}

export const notesApi = new NotesApi(notion, process.env.NOTION_DATABASE_ID!);