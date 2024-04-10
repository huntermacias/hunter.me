import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark, dracula, synthwave84 } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import beautify, { html } from 'js-beautify';

type Props = {
    htmlCode?: string;
    cssCode?: string;
    jsCode?: string;
    jsxCode?: string;
    tsCode?: string;
};

export const MyIDE: React.FC<Props> = ({ htmlCode = '', cssCode = '', jsCode = '', jsxCode = '', tsCode = '' }) => {
    const [iframeHeight, setIframeHeight] = useState('300px');

    const formattedHtmlCode = beautify.html(htmlCode, { indent_size: 2, wrap_line_length: 80 });
    const formattedCssCode = beautify.css(cssCode, { indent_size: 2 });
    const formattedJsCode = beautify.js(jsCode, { indent_size: 2, wrap_line_length: 180 });
    // Assuming you have a way to format or compile JSX/TS
    const formattedJsxCode = beautify.js(jsxCode);
    // const formattedTsCode = compileOrFormatTS(tsCode);

    const previewCode = `
        <style>${formattedCssCode}</style>
        ${formattedHtmlCode}
        <script>${formattedJsCode}</script>
        <script>${formattedJsxCode}</script>
        <script type="text/babel">${jsxCode}</script>
        <script type="module">${tsCode}</script>
    `;

    useEffect(() => {
        const lines = formattedHtmlCode.split('\n').length + formattedCssCode.split('\n').length;
        setIframeHeight(`${Math.max(300, lines * 18)}px`); // Estimate line height
    }, [formattedHtmlCode, formattedCssCode, formattedJsCode]);

    const isOnlyJsCode = htmlCode === '' && cssCode === '' && jsCode !== '';
    const containerClass = isOnlyJsCode ? "w-full" : "w-full lg:w-3/5";
    const codeSectionClass = isOnlyJsCode ? "lg:min-w-[950px] lg:max-w-full" : "w-full";
    const previewSectionClass = isOnlyJsCode ? "hidden" : "w-full lg:w-2/5";



    return (

        <div className="flex flex-col glassEffect lg:flex-row gap-8 px-4 py-8 rounded-3xl border border-green-700/30 shadow-lg shadow-cyan-500/10">
            <div className={`${containerClass} ${codeSectionClass} relative text-white bg-teal-500 rounded-md overflow-hidden`}>
                <div className="absolute inset-0  bg-[#1a1c23]/30 shadow-inner" style={{ zIndex: -1 }}></div>
                <div className="p-4 overflow-auto text-xs sm:text-sm">
                    {htmlCode && (
                        <SyntaxHighlighter language="html" style={dracula}>
                            {formattedHtmlCode}
                        </SyntaxHighlighter>
                    )}
                    {cssCode && (
                        <SyntaxHighlighter language="css" style={dracula}>
                            {formattedCssCode}
                        </SyntaxHighlighter>
                    )}
                    {jsCode && (
                        <>
                            <div className="flex justify-between items-center p-3 -mb-2 text-xs bg-[#0d1117]/80 filter backdrop-blur-lg bg-opacity-10 rounded-t-md">
                                <div className="flex space-x-1">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                            </div>
                            <SyntaxHighlighter language="javascript" style={dracula}>
                                {formattedJsCode}
                            </SyntaxHighlighter>
                        </>
                    )}
                </div>
            </div>

            {formattedHtmlCode && (
                <div className={`${previewSectionClass} bg-[#161b22]/50 relative rounded-2xl overflow-hidden shadow-inner`}>
                    <div className="flex justify-between items-center p-2 text-xs bg-[#0d1117]/60 rounded-t-md">
                        <div className="flex space-x-1">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                    </div>
                    <iframe
                        title="Preview"
                        className="w-full h-full"
                        style={{ border: 'none' }}
                        srcDoc={previewCode}
                        sandbox="allow-same-origin allow-scripts"
                    />
                </div>
            )}
        </div>

    );
};
