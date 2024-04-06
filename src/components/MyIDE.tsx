import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import beautify from 'js-beautify';

type Props = {
    htmlCode?: string;
    cssCode?: string;
    jsCode?: string;
    jsxCode?: string;
    tsCode?: string;
};

export const MyIDE: React.FC<Props> = ({ htmlCode = '', cssCode = '', jsCode = '', jsxCode = '', tsCode = ''}) => {
    const [iframeHeight, setIframeHeight] = useState('300px');

    const formattedHtmlCode = beautify.html(htmlCode, { indent_size: 2, wrap_line_length: 80 });
    const formattedCssCode = beautify.css(cssCode, { indent_size: 2 });
    const formattedJsCode = beautify.js(jsCode, { indent_size: 2, wrap_line_length: 170});
    // Assuming you have a way to format or compile JSX/TS
    // const formattedJsxCode = compileOrFormatJSX(jsxCode);
    // const formattedTsCode = compileOrFormatTS(tsCode);

    const previewCode = `
        <style>${formattedCssCode}</style>
        ${formattedHtmlCode}
        <script>${formattedJsCode}</script>
        <script type="text/babel">${jsxCode}</script>
        <script type="module">${tsCode}</script>
    `;

    useEffect(() => {
        const lines = formattedHtmlCode.split('\n').length + formattedCssCode.split('\n').length;
        setIframeHeight(`${Math.max(300, lines * 18)}px`); // Estimate line height
    }, [formattedHtmlCode, formattedCssCode, formattedJsCode]);

    const isOnlyJsCode = htmlCode === '' && cssCode === '' && jsCode !== '';
    const containerClass = isOnlyJsCode ? "lg:min-w-[950px]" : "w-full lg:w-3/5";

    

    return (
        
        <div className="flex-row lg:flex gap-8 bg-[#0d1117] p-6 rounded-lg">
            <div className={`h-full ${containerClass} text-white  shadow-xl`}>
                <div className="overflow-auto text-sm md:text-md">
                    {formattedHtmlCode && (
                        <SyntaxHighlighter language="html" style={atomDark} >
                            {formattedHtmlCode}
                        </SyntaxHighlighter>
                    )}
                    {formattedCssCode && (
                        <SyntaxHighlighter language="css" style={atomDark}>
                            {formattedCssCode}
                        </SyntaxHighlighter>

                    )}
                    {jsCode && (
                        <SyntaxHighlighter language="javascript" style={atomDark}>
                            {jsCode}
                        </SyntaxHighlighter>
                    )}
                    {jsxCode && (
                        <SyntaxHighlighter language="jsx" style={atomDark}>
                            {jsxCode}
                        </SyntaxHighlighter>
                    )}
                    {tsCode && (
                        <SyntaxHighlighter language="typescript" style={atomDark}>
                            {tsCode}
                        </SyntaxHighlighter>
                    )}
                </div>
            </div>

            <div className={`h-full ${containerClass} bg-[#161b22] border border-gray-500 rounded-lg shadow-xl relative overflow-auto`}>
               
                {formattedHtmlCode && (
                    <>
                        <div className=''>

                            <div className="flex space-x-2 p-2 mb-4">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <iframe
                                title="Preview"
                                className="w-full"
                                style={{ height: iframeHeight, border: 'none', marginTop: '-1rem', borderRadius: '0.5rem' }}
                                srcDoc={previewCode}
                                sandbox="allow-same-origin allow-scripts"
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
