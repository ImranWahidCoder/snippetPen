import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SettingsIcon from '@mui/icons-material/Settings';

export default function DialogSelect({ size, setSize, theme, setTheme }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    };

    return (
        <div>
            <Button onClick={handleClickOpen} className='settings'><SettingsIcon style={{marginRight:"5px"}}/>Settings</Button>
            <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>Select font size and theme</DialogTitle>
                <DialogContent>
                    <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-dialog-select-label">Font size</InputLabel>
                            <Select
                                labelId="demo-dialog-select-label"
                                id="demo-dialog-select"
                                value={size}
                                onChange={(e) => { setSize(e.target.value) }}
                                input={<OutlinedInput label="Font size" />}
                            >
                                <MenuItem value={13}>13px</MenuItem>
                                <MenuItem value={14}>14px</MenuItem>
                                <MenuItem value={15}>15px</MenuItem>
                                <MenuItem value={16}>16px</MenuItem>
                                <MenuItem value={17}>17px</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-dialog-select-label">Theme</InputLabel>
                            <Select
                                labelId="demo-dialog-select-label"
                                id="demo-dialog-select"
                                value={theme}
                                onChange={(e) => { setTheme(e.target.value) }}
                                input={<OutlinedInput label="Theme" />}
                            >
                                <MenuItem value={'monokai'}>Monokai</MenuItem>
                                <MenuItem value={'midnight'}>Midnight</MenuItem>
                                <MenuItem value={'moxer'}>Moxer</MenuItem>
                                <MenuItem value={'material'}>Material</MenuItem>
                                <MenuItem value={'dracula'}>Dracula</MenuItem>
                                <MenuItem value={'seti'}>Seti</MenuItem>
                                <MenuItem value={'solarized'}>Solarized</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Ok</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

