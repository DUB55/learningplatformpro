import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import { Database } from '@/types/supabase'

export default function App({
    Component,
    pageProps,
}: AppProps<{
    initialSession: Session
}>) {
    const [supabaseClient] = useState(() => createPagesBrowserClient<Database>())

    return (
        <SessionContextProvider
            supabaseClient={supabaseClient}
            initialSession={pageProps.initialSession}
        >
            <Component {...pageProps} />
        </SessionContextProvider>
    )
}
