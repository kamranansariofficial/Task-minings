import Icon from '@/utils/icon';
import { Box, Menu, MenuItem } from '@mui/material';
import React from 'react'

function Popover({ ...props }) {
    const { selected, options, handleChange } = props;
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <>
            <Box component="button"
                sx={{
                    border: 1,
                    borderColor: 'divider',
                    background: 'none',
                    borderRadius: 2,
                    lineHeight: 1,
                    color: 'text.secondary',
                    p: (theme) => theme.spacing(1.12, 1),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    minWidth: 98

                }}
                aria-describedby={id}
                onClick={handleClick}>
                {selected}
                <Icon name='ic-arrow-down' />
            </Box>
            <Menu
                slotProps={{
                    paper: {
                        sx: { minWidth: 98 }
                    }
                }}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {options.map((text: any, idx: number) =>
                    <MenuItem key={idx} onClick={() => {
                        handleClose();
                        handleChange(text);
                    }}>
                        {text}
                    </MenuItem>
                )}



            </Menu>
        </>
    )
}

export default Popover