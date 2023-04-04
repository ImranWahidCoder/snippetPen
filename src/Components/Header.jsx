import React, { useContext } from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import DialogSelect from "./Configure";
import { DataContext } from "../Context/DataProvider";


const Container = styled(AppBar)`
background: #060606;
`

const src = "data:image/png;base64,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"

export default function Header() {
    const { theme, setTheme, size, setSize } = useContext(DataContext)
    return (
        <div>
            <Container position="static">
                <Toolbar className="navbar">
                    <div style={{display:"flex",alignItems:"center"}}>
                        <img src={src} alt="logo" className="logo" />
                        <span style={{fontFamily: `'Pacifico', cursive`, marginLeft:"10px", fontSize:"1.5em"}}>Snippet Pen</span>
                    </div>
                    <DialogSelect theme={theme} setTheme={setTheme} size={size} setSize={setSize} />
                </Toolbar>
            </Container>
        </div>
    )
}