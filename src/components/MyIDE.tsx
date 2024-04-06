import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

// import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';


type Props = {
    htmlCode: string;
    cssCode: string;
};

export const MyIDE: React.FC<Props> = ({ htmlCode, cssCode }) => {
    const previewCode = `
        <style>${cssCode}</style>
        ${htmlCode}
    `;



    return (
       
        <div className="flex w-full gap-8 bg-[#0d1117] p-6 rounded-lg">
            {/* Code snippet side */}
            <div className="flex-1 min-h-[500px] text-white bg-[#161b22] rounded-lg shadow-xl overflow-hidden">
                <div className="p-4 overflow-auto">
                    <SyntaxHighlighter language="html" style={atomDark}>
                        {htmlCode}
                    </SyntaxHighlighter>
                    <SyntaxHighlighter language="css" style={atomDark}>
                        {cssCode}
                    </SyntaxHighlighter>
                </div>
            </div>

            {/* Live preview side with macOS window style */}
            <div className="flex-1 h-full bg-[#161b22] rounded-lg shadow-xl relative overflow-hidden">
                <div className="flex space-x-2 p-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <iframe
                    title="Preview"
                    className="w-full h-full"
                    srcDoc={previewCode}
                    sandbox="allow-same-origin allow-scripts"
                    style={{ border: 'none', marginTop: '-1rem', }}
                />
            </div>
        </div>
    );
};