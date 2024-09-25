import { Menu, useTheme } from "@mui/material";

function ActionMenu({ children, ...props }: any) {
    const { contextMenu, handleClose, paperSx } = props as any;
    const theme = useTheme();

    return (
        <Menu
            open={contextMenu !== null}
            onClose={handleClose}
            anchorReference="anchorPosition"
            slotProps={{
                paper: {
                    elevation: 0,
                    sx: {
                        backgroundColor: theme.palette.mode === "light" ? theme.palette.common.white : theme.palette.background.default,
                        border: 1,
                        borderColor: 'divider',
                        ...paperSx
                    }
                }
            }}
            anchorPosition={
                contextMenu !== null
                    ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
                    : undefined
            }
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}>
            {children}
        </Menu>
    )
}

export default ActionMenu
