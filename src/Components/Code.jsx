import React, { useContext } from "react";
import Editor from "./Editor";
import { DataContext } from "../Context/DataProvider";

export default function Code() {
    const { html, setHtml, css, setCss, js, setJs, theme, size } = useContext(DataContext);
    return (
        <div className="parent">
            <Editor heading="HTML" language="xml" icon="/" bgcolor="red" value={html} onChange={setHtml} theme={theme} size={size}/>
            <Editor heading="CSS" language="css" icon="*" bgcolor="#03cffc" value={css} onChange={setCss} theme={theme} size={size}/>
            <Editor heading="JavaScript" language="javascript" icon="( )" bgcolor="yellow" value={js} onChange={setJs} theme={theme} size={size}/>
        </div>
    )
}