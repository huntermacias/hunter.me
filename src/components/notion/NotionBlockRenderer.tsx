import { TextRichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import clsx from 'clsx';
import Link from 'next/link';

import { Quote } from '../Quote';
import { MyIDE } from '../MyIDE';


//TODO: improve types here, cleanup the code
type Props = {
  block: any;
};

export const NotionBlockRenderer = ({ block }: Props) => {


  const { type, id } = block;
  const value = block[type];



  switch (type) {
    case 'paragraph':
      return <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">{<NotionText textItems={value.rich_text} />}</p>;

    case 'heading_1':
      return <h1 className="text-3xl font-bold my-4">{<NotionText textItems={value.rich_text} />}</h1>;

    case 'heading_2':
      return <h2 className="text-2xl font-semibold my-3">{<NotionText textItems={value.rich_text} />}</h2>;

    case 'heading_3':
      return <h3 className="text-xl font-medium my-2">{<NotionText textItems={value.rich_text} />}</h3>;

    case 'bulleted_list':
      return <ul className="list-disc pl-5 my-2">{value.children.map((block: any) => (<NotionBlockRenderer key={block.id} block={block} />))}</ul>;

    case 'numbered_list':
      return <ol className="list-decimal pl-5 my-2">{value.children.map((block: any) => (<NotionBlockRenderer key={block.id} block={block} />))}</ol>;

    case 'bulleted_list_item':
    case 'numbered_list_item':
      return <li className="pl-2 my-1">{<NotionText textItems={value.rich_text} />}{value.children && value.children.map((block: any) => (<NotionBlockRenderer key={block.id} block={block} />))}</li>;

    case 'to_do':
      return (
        <div className="flex items-center">
          <input type="checkbox" id={id} defaultChecked={value.checked} className="form-checkbox h-5 w-5" />{' '}
          <label htmlFor={id} className="ml-2">{<NotionText textItems={value.rich_text} />}</label>
        </div>
      );

    case 'toggle':
      return (
        <details className="my-2">
          <summary className="cursor-pointer">{<NotionText textItems={value.rich_text} />}</summary>
          {value.children?.map((block: any) => (<NotionBlockRenderer key={block.id} block={block} />))}
        </details>
      );

    case 'child_page':

      // Render the child page blocks if they have been loaded
      return (
        <>
          {value.children?.map((block: any) => (<NotionBlockRenderer key={block.id} block={block} />))}

        </>
      );

    case 'image':
      const src = value.type === 'external' ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : '';
      return (
        <figure className="my-4">
          <img
            className=" rounded-md"
            src={src}
            alt={caption}

          />
          {caption && <figcaption className="text-sm text-center mt-2">{caption}</figcaption>}
        </figure>
      );

    case 'divider':
      return <hr className="my-4 border-t border-gray-200 dark:border-gray-600" />;

    case 'quote':
      return <blockquote className="p-4 italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote">{<Quote key={id} quote={value.rich_text[0].plain_text} />}</blockquote>;

    case 'code':
      // console.log('code', value, value.rich_text[0].plain_text, value.language);
      return (
        <pre className={`language-${value.language} p-4 font-mono text-sm bg-gray-200 dark:bg-gray-700 overflow-x-auto rounded-md`}>
          <code>{value.rich_text[0].plain_text}</code>
        </pre>
      );

    case 'file':
      const src_file = value.type === 'external' ? value.external.url : value.file.url;
      const splitSourceArray = src_file.split('/');
      const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
      const caption_file = value.caption ? value.caption[0]?.plain_text : '';
      return (
        <figure className="my-4">
          <div className="flex items-center space-x-2">
            <span>📎</span>
            <Link href={src_file} passHref
              className="text-blue-600 hover:underline">{lastElementInArray.split('?')[0]}
            </Link>
          </div>
          {caption_file && <figcaption className="text-sm">{caption_file}</figcaption>}
        </figure>
      );

    case 'bookmark':
      const href = value.url;
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          {href}
        </a>
      );

    default:
      console.warn('Unsupported block type encountered:', type, block);
      return <div>Unsupported block ({type})</div>;
  }

};


const NotionText = ({ textItems }: { textItems: TextRichTextItemResponse[] }) => {
  if (!textItems) {
    return null;
  }
  const renderContent = (content: any) => {
    // Adjusting the pattern to optionally capture HTML, CSS, and JS blocks
    const codeBlockPattern = /!\-htmlcssjs\s*([\s\S]*?)\s*\-!/;
    const match = codeBlockPattern.exec(content);

    if (match) {
      const codeBlock = match[1];
      // Split patterns for CSS and JS
      const splitCSSPattern = /\s*\/\*\s*CSS\s*\*\/\s*/;
      const splitJSPattern = /\s*\/\*\s*JS\s*\*\/\s*/;

      // Initially split the codeBlock by CSS
      let [htmlCode, cssRest] = codeBlock.split(splitCSSPattern).map(part => part.trim());
      let cssCode = '', jsCode = '';

      if (cssRest) {
        // If CSS content was delineated, it means we have a remainder to check for JS
        let [potentialCssCode, jsRest] = cssRest.split(splitJSPattern).map(part => part.trim());
        cssCode = potentialCssCode;
        jsCode = jsRest; // What remains is JS, if anything
      } else {
        // If no CSS delineation was found, check directly for JS in the original codeBlock
        let [potentialHtmlCode, jsRest] = codeBlock.split(splitJSPattern).map(part => part.trim());
        if (jsRest !== undefined) {
          // JS delineation found, meaning the initial split contains HTML
          htmlCode = potentialHtmlCode;
          jsCode = jsRest;
        } else {
          // No JS delineation found either, treat entire block as HTML or JS based on context
          // This part is ambiguous without further context on how you want to treat undelineated blocks
        }
      }

      return <MyIDE htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode} />;
    }

    // Default plain text rendering or links
    return content;
  };

  return (
    <>
      {textItems.map((textItem, index) => {
        const {
          annotations: { bold, code, color, italic, strikethrough, underline },
          text,
        } = textItem;

        return (
          <span
            key={index} // Changed to index for uniqueness
            className={clsx({
              'font-bold': bold,
              'font-mono font-semibold': code,
              'bg-zinc-600 text-zinc-200 px-1 py-0.5 m-1 rounded-md': code,
              italic: italic,
              'line-through': strikethrough,
              underline: underline,
            })}
            style={color !== 'default' ? { color } : {}}
          >
            {text.link ? <Link href={text.link.url}>{text.content}</Link> : renderContent(text.content)}
          </span>
        );
      })}
    </>
  );
};