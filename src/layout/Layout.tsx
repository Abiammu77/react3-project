import { Box, Paper } from "@mui/material"

export const Layout:React.FC<{children:React.ReactNode}>=({children})=>{
    return <><Box>
        <Paper elevation={2}>
    {children}
    </Paper>
    </Box>
    </>
}