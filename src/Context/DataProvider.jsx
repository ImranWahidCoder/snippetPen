import { createContext, useState } from "react";

export const DataContext = createContext();

export default function DataProvider({ children }) {
    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');
    const [theme, setTheme] = useState('monokai');
    const [size, setSize] = useState(15);
    return (
        <DataContext.Provider value={{ html, setHtml, css, setCss, js, setJs, theme, setTheme, size, setSize }}>
            {children}
        </DataContext.Provider>
    )
}