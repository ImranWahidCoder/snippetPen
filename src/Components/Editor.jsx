import React, { useState } from "react";
import { Box, styled } from "@mui/system";
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { Controlled as ControlledEditor } from 'react-codemirror2'
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';


const Heading = styled(Box)`
background:#1d1e22;
display:flex;
padding: 9px 12px;
align-items:center;
border-top:3px solid #495c54;
`

const Header = styled(Box)`
display:flex;
justify-content:space-between;
color:#AAAEBC;
background:#060606;
font-weight:700;
font-family: 'Mukta', sans-serif;
`

const Container = styled(Box)`
flex-grow:1;
padding: 0px 8px;
display:flex;
flex-direction:column;
width:30%;
`

export default function Editor({ heading, icon, language, bgcolor, value, onChange, theme, size }) {
    // 'open' is a state variable which stores whether editor is opened or collapsed
    // true value suggests editor is expanded or opened
    // false value suggests editor is collapsed
    const [open, setOpen] = useState(true);
    console.log(size)
    return (
        <Container style={open ? null : { flexGrow: 0 }}>
            <Header>
                <Heading>
                    <Box component="span" style={{
                        backgroundColor: bgcolor,
                        height: "20px",
                        width: "20px",
                        display: "flex",
                        borderRadius: "5px",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "5px",
                        color: "black",
                        alignSelf: "center"
                    }}>
                        {icon}
                    </Box>
                    {heading}
                </Heading>

                {/* Toggle the state variable 'open' while clicking on the close full screen icon */}
                <CloseFullscreenIcon onClick={() => {
                    setOpen(!open)
                }}
                    fontSize="small"
                    style={{ alignSelf: "center" }}
                />
            </Header>

            <div style={{ fontSize: `${size}px` }}>
                <ControlledEditor
                    options={{
                        mode: language,
                        lineWrapping: true,
                        theme: theme,
                        lineNumbers: true
                    }}
                    value={value}
                    onBeforeChange={(editor, data, value) => {
                        onChange(value)
                    }}
                />
            </div>


        </Container>
    )
}