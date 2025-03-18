'use client';

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "./globals.css";

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="ja">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Dolphick</title>
            </head>
            <body>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
