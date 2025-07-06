import React, { useState, useEffect, useRef } from 'react';
import Icon from './components/Icon';
import { 
    contactInfo, 
    aboutMeText, 
    publications, 
    timelineItems,
    highlights,
    wisdom,
    books,
    dataScienceEssay,
    vipassanaEssay,
    lawOfAveragesEssay,
    timeManagementEssay
} from './data';
import { Publication, TimelineItem } from './types';

const AsciiArt = () => (
  <pre className="text-teal-300 text-sm md:text-base">
{`
 _   _      _ _
| | | | ___| | | ___
| |_| |/ _ \\ | |/ _ \\
|  _  |  __/ | | (_) |
|_| |_|\\___|_|_|\\___/
`}
  </pre>
);

const Prompt: React.FC<{ command: string; onCommandChange: (cmd: string) => void; handleCommand: () => void; }> = ({ command, onCommandChange, handleCommand }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    
    const focusInput = () => {
        inputRef.current?.focus();
    }

    useEffect(() => {
        focusInput();
        document.addEventListener('click', focusInput);
        return () => {
            document.removeEventListener('click', focusInput);
        }
    }, []);

    return (
        <div className="flex items-center">
            <span className="text-teal-300">kdahal</span>
            <span className="text-slate-400">@</span>
            <span className="text-fuchsia-400">geokshitij.github.io</span>
            <span className="text-slate-400">:$ ~ </span>
            <form onSubmit={(e) => { e.preventDefault(); handleCommand(); }} className="flex-1">
                <input
                    ref={inputRef}
                    type="text"
                    value={command}
                    onChange={(e) => onCommandChange(e.target.value)}
                    className="prompt-input"
                    autoFocus
                    spellCheck="false"
                    autoComplete="off"
                />
            </form>
        </div>
    );
};

const SimpleMarkdown: React.FC<{ text: string }> = ({ text }) => {
    const parts = text.split(/(\[.*?\]\(.*?\)|`.*?`|\*\*.*?\*\*|\*.*?\*)/);
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
                return <span key={i}>{part}</span>;
            })}
        </>
    );
};


const App: React.FC = () => {
    const [command, setCommand] = useState('');
    const [history, setHistory] = useState<React.ReactNode[]>([]);
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const terminalEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [history]);
    
    const welcomeMessage = (
        <div key="welcome">
            <AsciiArt />
            <p className="mt-4">Welcome to my interactive portfolio.</p>
            <p>Type <span className="text-amber-300">'help'</span> to see a list of available commands.</p>
        </div>
    );

    useEffect(() => {
        setHistory([welcomeMessage]);
    }, []);

    const executeCommand = (cmd: string) => {
        let output: React.ReactNode;
        switch (cmd.toLowerCase().trim().split(' ')[0]) {
            case 'help':
                output = (
                    <div>
                        <p className="font-bold">Available commands:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
                            <div>
                                <p className="text-fuchsia-400 mt-2 font-semibold">Main</p>
                                <ul className="space-y-1">
                                    <li><span className="text-amber-300 w-28 inline-block">about</span> - Summary about me.</li>
                                    <li><span className="text-amber-300 w-28 inline-block">contact</span> - Contact information.</li>
                                    <li><span className="text-amber-300 w-28 inline-block">clear</span> - Clears the terminal.</li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-fuchsia-400 mt-2 font-semibold">CV</p>
                                <ul className="space-y-1">
                                    <li><span className="text-amber-300 w-28 inline-block">publications</span> - Journal publications.</li>
                                    <li><span className="text-amber-300 w-28 inline-block">highlights</span> - Recent highlights.</li>
                                    <li><span className="text-amber-300 w-28 inline-block">experience</span> - Professional experience.</li>
                                    <li><span className="text-amber-300 w-28 inline-block">education</span> - Academic background.</li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-fuchsia-400 mt-2 font-semibold">Musings</p>
                                <ul className="space-y-1">
                                    <li><span className="text-amber-300 w-28 inline-block">books</span> - Favorite books.</li>
                                    <li><span className="text-amber-300 w-28 inline-block">wisdom</span> - Life philosophies.</li>
                                    <li><span className="text-amber-300 w-28 inline-block">datascience</span> - On data-driven science.</li>
                                    <li><span className="text-amber-300 w-28 inline-block">vipassana</span> - On meditation.</li>
                                    <li><span className="text-amber-300 w-28 inline-block">lawofaverages</span> - On persistence.</li>
                                    <li><span className="text-amber-300 w-28 inline-block">timemanagement</span> - On productivity.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                );
                break;
            case 'about':
                output = (
                    <div className="space-y-2">
                        {aboutMeText.split('\n').map((paragraph, i) => (
                             <p key={i}><SimpleMarkdown text={paragraph} /></p>
                        ))}
                    </div>
                );
                break;
            case 'contact':
                output = (
                    <div>
                        {contactInfo.emails.map(email => (
                           <p key={email}><Icon name="email" className="inline-block h-4 w-4 mr-2" /> <a href={`mailto:${email}`} className="text-sky-400 hover:underline">{email}</a></p>
                        ))}
                        <p><Icon name="phone" className="inline-block h-4 w-4 mr-2" /> {contactInfo.phone}</p>
                        <p><Icon name="location" className="inline-block h-4 w-4 mr-2" /> {contactInfo.address}</p>
                        <div className="mt-2 flex space-x-4 flex-wrap">
                            {contactInfo.links.map(link => (
                                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-sky-400 hover:underline mt-1">
                                    <Icon name={link.icon} className="h-4 w-4 mr-1" /> {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                );
                break;
            case 'publications':
                output = (
                    <div>
                        <p className="font-bold mb-2">Journal Publications ({publications.length} total):</p>
                        {publications.map((pub, i) => (
                           <div key={i} className="mb-3">
                               {pub.featured && <p className="text-yellow-400 font-bold">[FEATURED]</p>}
                               <p><span className="text-green-400">{pub.title}</span></p>
                               <p className="text-sm text-slate-400">{pub.authors} ({pub.year}). <span className="italic">{pub.journal}</span>.</p>
                               {pub.link ? (
                                   <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-sky-400 text-sm hover:underline">Read More &rarr;</a>
                               ) : (
                                   pub.status && <span className="text-sm text-gray-500">{pub.status}</span>
                               )}
                           </div>
                        ))}
                    </div>
                );
                break;
            case 'experience':
            case 'education':
                 const itemsToDisplay = timelineItems.filter(item => item.type === cmd);
                 const title = cmd.charAt(0).toUpperCase() + cmd.slice(1);
                 output = (
                     <div>
                         <p className="font-bold mb-2">{title}:</p>
                         {itemsToDisplay.map((item, i) => {
                             const isEducation = item.type === 'education';
                             return (
                                <div key={i} className="mb-3">
                                    <p className="text-green-400">{isEducation ? (item as any).degree : (item as any).title}</p>
                                    <p className="text-sm text-slate-400">
                                        {isEducation ? (item as any).university : (item as any).organization} | {item.dates}
                                    </p>
                                </div>
                             )
                         })}
                     </div>
                 );
                 break;
            case 'highlights':
                output = (
                    <div>
                        <p className="font-bold mb-2">Highlights:</p>
                        {highlights.map((item, i) => (
                           <div key={i} className="mb-2 flex">
                               <span className="text-slate-400 w-20 inline-block">{item.date}</span>
                               <div className="flex-1"><SimpleMarkdown text={item.description} /></div>
                           </div>
                        ))}
                    </div>
                );
                break;
            case 'wisdom':
                output = (
                    <div>
                        <p className="font-bold mb-2">I wish someone had told me:</p>
                        <ul className="list-disc list-inside space-y-1 text-slate-300">
                            {wisdom.map((w, i) => <li key={i}>{w}</li>)}
                        </ul>
                    </div>
                );
                break;
            case 'books':
                output = (
                    <div>
                        <p className="font-bold mb-2">Favourite Books:</p>
                        <ul className="list-disc list-inside space-y-1">
                            {books.map((book, i) => <li key={i}><span className="text-green-400">{book.title}</span> by {book.author}</li>)}
                        </ul>
                    </div>
                );
                break;
            case 'datascience':
            case 'vipassana':
            case 'lawofaverages':
            case 'timemanagement':
                const essays: {[key: string]: string} = {
                    datascience: dataScienceEssay,
                    vipassana: vipassanaEssay,
                    lawofaverages: lawOfAveragesEssay,
                    timemanagement: timeManagementEssay,
                };
                output = (
                    <div className="space-y-3">
                        {essays[cmd].split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
                    </div>
                );
                break;
            case 'clear':
                setHistory([welcomeMessage]);
                return;
            default:
                if (cmd.trim() === '') {
                    output = <div />;
                } else {
                    output = <p>Command not found: '{cmd}'. Type 'help' for a list of commands.</p>;
                }
        }
        
        const newHistory = [
            ...history,
            <div key={history.length}>
                <div className="flex items-center">
                    <span className="text-teal-300">kdahal</span>
                    <span className="text-slate-400">@</span>
                    <span className="text-fuchsia-400">geokshitij.github.io</span>
                    <span className="text-slate-400">:$ ~ </span>
                    <span>{cmd}</span>
                </div>
                <div className="mt-1">{output}</div>
            </div>
        ];
        
        setHistory(newHistory);
        if (cmd.trim()) {
            setCommandHistory([cmd, ...commandHistory]);
        }
        setHistoryIndex(-1);
    };
    
    const handleCommand = () => {
        executeCommand(command);
        setCommand('');
    };
    
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            const newIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
            if (newIndex >= 0) {
              setHistoryIndex(newIndex);
              setCommand(commandHistory[newIndex]);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            const newIndex = Math.max(historyIndex - 1, -1);
            if (newIndex >= 0) {
              setHistoryIndex(newIndex);
              setCommand(commandHistory[newIndex]);
            } else {
              setHistoryIndex(-1);
              setCommand('');
            }
        }
    };

    return (
        <div className="p-4 md:p-6 lg:p-8 min-h-screen">
            <div className="space-y-4">
                {history.map((line, index) => <div key={index}>{line}</div>)}
            </div>
            <div onKeyDown={handleKeyDown}>
                <Prompt command={command} onCommandChange={setCommand} handleCommand={handleCommand} />
            </div>
            <div ref={terminalEndRef} />
        </div>
    );
};

export default App;