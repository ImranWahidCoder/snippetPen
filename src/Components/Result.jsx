import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../Context/DataProvider";
import { Box, styled } from "@mui/material";

const Container = styled(Box)`
height:33vh;
`

export default function Result() {
    const { html, css, js } = useContext(DataContext);
    const [src, setSrc] = useState('');
    const sourceCode = `
        <html>
            <body>
                ${html}
            </body>
            <style>
                ${css}
            </style>
            <script>
                ${js}
            </script>
        </html>
    `
    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrc(sourceCode);
        }, 1000)
        return () => { clearTimeout(timeout) }
    }, [html, css, js])

    return (
        <Container>
            <iframe srcDoc={src} title="output" frameBorder="0" sandbox="allow-scripts" width="100%" height="100%"></iframe>
        </Container>
    )
}