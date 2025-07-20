import React from 'react';

const SimpleMarkdown: React.FC<{ text: string }> = ({ text }) => {
    const parts = text.split(/(\[.*?\]\(.*?\)|\[.*?\]|`.*?`|\*\*.*?\*\*|\*.*?\*)/);
    return (
        <>
            {parts.map((part, i) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={i}>{part.slice(2, -2)}</strong>;
                }
                if (part.startsWith('*') && part.endsWith('*')) {
                    return <em key={i}>{part.slice(1, -1)}</em>;
                }
                const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
                if (linkMatch) {
                    return <a href={linkMatch[2]} key={i} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">{linkMatch[1]}</a>;
                }
                if (part.startsWith('[') && part.endsWith(']')) {
                    return <span key={i}>{part.slice(1, -1)}</span>;
                }
                return <span key={i}>{part}</span>;
            })}
        </>
    );
};

export default SimpleMarkdown;
