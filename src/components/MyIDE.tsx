import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import beautify from 'js-beautify';

type Props = {
    htmlCode: string;
    cssCode: string;
};

export const MyIDE: React.FC<Props> = ({ htmlCode, cssCode }) => {
    const [iframeHeight, setIframeHeight] = useState('300px'); // Initial height
    
    const formattedHtmlCode = beautify.html(htmlCode, { indent_size: 2, wrap_line_length: 80 });
    const formattedCssCode = beautify.css(cssCode, { indent_size: 2 });

    const previewCode = `
        <style>${formattedCssCode}</style>
        ${formattedHtmlCode}
    `;

    useEffect(() => {
        // Dynamically adjust the iframe height. This is a basic approximation.
        // You may need a more complex solution for cross-origin content or more dynamic content sizes.
        const lines = formattedHtmlCode.split('\n').length + formattedCssCode.split('\n').length;
        setIframeHeight(`${Math.max(300, lines * 18)}px`); // Estimate line height
    }, [formattedHtmlCode, formattedCssCode]);

    return (
        <div className="flex w-full gap-8 bg-[#0d1117] p-6 rounded-lg">
            <div className="h-full w-3/5 text-white bg-[#161b22] rounded-lg shadow-xl overflow-hidden">
                <div className="p-4 overflow-auto">
                    <SyntaxHighlighter language="html" style={atomDark}>
                        {formattedHtmlCode}
                    </SyntaxHighlighter>
                    <SyntaxHighlighter language="css" style={atomDark}>
                        {formattedCssCode}
                    </SyntaxHighlighter>
                </div>
            </div>

            <div className="h-full w-2/5 bg-[#161b22] rounded-lg shadow-xl relative overflow-auto">
                <div className="flex space-x-2 p-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <iframe
                    title="Preview"
                    className="w-full"
                    style={{ height: iframeHeight, border: 'none', marginTop: '-1rem' }}
                    srcDoc={previewCode}
                />
            </div>
        </div>
    );
};
