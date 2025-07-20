import React, { useState, useEffect, useRef } from 'react';
import Icon from './components/Icon';
import SimpleMarkdown from './components/SimpleMarkdown';
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

const commandList = {
    'help': 'Shows this help message.',
    'about': 'Displays my summary.',
    'contact': 'Shows my contact information.',
    'publications': 'Lists my journal publications.',
    'highlights': 'Shows recent highlights.',
    'experience': 'Displays my professional experience.',
    'education': 'Displays my academic background.',
    'books': 'Lists my favorite books.',
    'wisdom': 'Shares some life philosophies.',
    'datascience': 'My thoughts on data-driven science.',
    'vipassana': 'My thoughts on meditation.',
    'lawofaverages': 'My thoughts on persistence.',
    'timemanagement': 'My thoughts on productivity.',
    'clear': 'Clears the terminal screen.',
    'ls': 'Lists all available commands.',
    'll': 'Lists all available commands with descriptions.'
};
const commands = Object.keys(commandList);

const App: React.FC = () => {
    const [command, setCommand] = useState('');
    const [history, setHistory] = useState<React.ReactNode[]>([]);
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const inputRef = useRef<HTMLInputElement>(null);
    const terminalEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        terminalEndRef.current?.scrollIntoView();
    };

    useEffect(() => {
        scrollToBottom();
    }, [history]);

    const focusInput = () => {
        inputRef.current?.focus();
    };

    useEffect(() => {
        const welcomeMessage = (
            <div key="welcome">
                <AsciiArt />
                <p className="mt-4">Welcome to my interactive portfolio.</p>
                <p>Type <span className="text-amber-300">'help'</span> to see a list of available commands.</p>
            </div>
        );
        setHistory([welcomeMessage]);
    }, []);

    const executeCommand = (cmd: string) => {
        const commandName = cmd.toLowerCase().trim().split(' ')[0];
        let output: React.ReactNode;

        switch (commandName) {
            case 'help':
                output = (
                    <div>
                        <p className="font-bold">Available commands:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
                            <div>
                                <p className="text-fuchsia-400 mt-2 font-semibold">Main</p>
                                <ul className="space-y-1">
                                    <li><span className="text-amber-300 w-40 inline-block">about</span> - Summary about me.</li>
                                    <li><span className="text-amber-300 w-40 inline-block">contact</span> - Contact information.</li>
                                    <li><span className="text-amber-300 w-40 inline-block">clear</span> - Clears the terminal.</li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-fuchsia-400 mt-2 font-semibold">CV</p>
                                <ul className="space-y-1">
                                    <li><span className="text-amber-300 w-40 inline-block">publications</span> - Journal publications.</li>
                                    <li><span className="text-amber-300 w-40 inline-block">highlights</span> - Recent highlights.</li>
                                    <li><span className="text-amber-300 w-40 inline-block">experience</span> - Professional experience.</li>
                                    <li><span className="text-amber-300 w-40 inline-block">education</span> - Academic background.</li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-fuchsia-400 mt-2 font-semibold">Musings</p>
                                <ul className="space-y-1">
                                    <li><span className="text-amber-300 w-40 inline-block">books</span> - Favorite books.</li>
                                    <li><span className="text-amber-300 w-40 inline-block">wisdom</span> - Life philosophies.</li>
                                    <li><span className="text-amber-300 w-40 inline-block">datascience</span> - On data-driven science.</li>
                                    <li><span className="text-amber-300 w-40 inline-block">vipassana</span> - On meditation.</li>
                                    <li><span className="text-amber-300 w-40 inline-block">lawofaverages</span> - On persistence.</li>
                                    <li><span className="text-amber-300 w-40 inline-block">timemanagement</span> - On productivity.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                );
                break;
            case 'about':
                output = <div className="space-y-2">{aboutMeText.split('\n').map((p, i) => <p key={i}><SimpleMarkdown text={p} /></p>)}</div>;
                break;
            case 'contact':
                output = (
                    <div>
                        {contactInfo.emails.map(email => <p key={email}><Icon name="email" className="inline-block h-4 w-4 mr-2" /> <a href={`mailto:${email}`} className="text-sky-400 hover:underline">{email}</a></p>)}
                        <p><Icon name="phone" className="inline-block h-4 w-4 mr-2" /> {contactInfo.phone}</p>
                        <p><Icon name="location" className="inline-block h-4 w-4 mr-2" /> {contactInfo.address}</p>
                        <div className="mt-2 flex space-x-4 flex-wrap">
                            {contactInfo.links.map(link => <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-sky-400 hover:underline mt-1"><Icon name={link.icon} className="h-4 w-4 mr-1" /> {link.name}</a>)}
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
                               {pub.link ? <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-sky-400 text-sm hover:underline">Read More &rarr;</a> : (pub.status && <span className="text-sm text-gray-500">{pub.status}</span>)}
                           </div>
                        ))}
                    </div>
                );
                break;
            case 'experience':
            case 'education':
                 const itemsToDisplay = timelineItems.filter(item => item.type === commandName);
                 const title = commandName.charAt(0).toUpperCase() + commandName.slice(1);
                 output = (
                     <div>
                         <p className="font-bold mb-2">{title}:</p>
                         {itemsToDisplay.map((item, i) => (
                            <div key={i} className="mb-3">
                                <p className="text-green-400">{item.type === 'education' ? (item as any).degree : (item as any).title}</p>
                                <p className="text-sm text-slate-400">{item.type === 'education' ? (item as any).university : (item as any).organization} | {item.dates}</p>
                            </div>
                         ))}
                     </div>
                 );
                 break;
            case 'highlights':
                output = (
                    <div>
                        <p className="font-bold mb-2">Highlights:</p>
                        {highlights.map((item, i) => (
                           <div key={i} className="mb-2 flex">
                               <span className="text-slate-400 mr-4">{item.date}</span>
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
                        <ul className="list-disc list-inside space-y-1 text-slate-300">{wisdom.map((w, i) => <li key={i}>{w}</li>)}</ul>
                    </div>
                );
                break;
            case 'books':
                output = (
                    <div>
                        <p className="font-bold mb-2">Favourite Books:</p>
                        <ul className="list-disc list-inside space-y-1">{books.map((book, i) => <li key={i}><span className="text-green-400">{book.title}</span> by {book.author}</li>)}</ul>
                    </div>
                );
                break;
            case 'datascience':
            case 'vipassana':
            case 'lawofaverages':
            case 'timemanagement':
                const essays: {[key: string]: string} = { datascience: dataScienceEssay, vipassana: vipassanaEssay, lawofaverages: lawOfAveragesEssay, timemanagement: timeManagementEssay };
                output = <div className="space-y-3">{essays[commandName].split('\n\n').map((p, i) => <p key={i}>{p}</p>)}</div>;
                break;
            case 'ls':
                output = <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4">{commands.map(c => <span key={c}>{c}</span>)}</div>;
                break;
            case 'll':
                output = (
                    <div>
                        {Object.entries(commandList).map(([key, value]) => (
                            <div key={key} className="flex items-start">
                                <span className="text-amber-300 w-40 flex-shrink-0">{key}</span>
                                <span className="flex-1">{value}</span>
                            </div>
                        ))}
                    </div>
                );
                break;
            case 'clear':
                const welcomeMessage = (
                    <div key="welcome">
                        <AsciiArt />
                        <p className="mt-4">Welcome to my interactive portfolio.</p>
                        <p>Type <span className="text-amber-300">'help'</span> to see a list of available commands.</p>
                    </div>
                );
                setHistory([welcomeMessage]);
                return;
            default:
                output = cmd.trim() === '' ? <div /> : <p>Command not found: '{cmd}'. Type 'help' for a list of commands.</p>;
        }

        const newHistory = (
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
        );
        
        setHistory(prev => [...prev, newHistory]);
        if (cmd.trim()) {
            setCommandHistory(prev => [cmd, ...prev]);
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
        } else if (e.key === 'Tab') {
            e.preventDefault();
            const currentCmd = command.trim();
            if (currentCmd) {
                const matches = commands.filter(c => c.startsWith(currentCmd));
                if (matches.length === 1) {
                    setCommand(matches[0]);
                } else if (matches.length > 1) {
                    const completions = <p className="text-slate-400">{matches.join('   ')}</p>;
                    setHistory(prev => [...prev, completions]);
                }
            }
        }
    };

    return (
        <div className="p-4 md:p-6 lg:p-8 h-screen" onClick={focusInput}>
            <div className="h-full overflow-y-auto space-y-4">
                {history}
                <div onKeyDown={handleKeyDown}>
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
                                onChange={(e) => setCommand(e.target.value)}
                                className="prompt-input"
                                autoFocus
                                spellCheck="false"
                                autoComplete="off"
                            />
                        </form>
                    </div>
                </div>
                <div ref={terminalEndRef} />
            </div>
        </div>
    );
};

export default App;
