'use client';

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "./globals.css";
import Header from "@/components/header";

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
                <link rel="shortcut icon" href="dolphick.jpg" type="image/x-icon" />
                <title>Dolphick</title>
            </head>
            <body>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Header />
                    <div>
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
