import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '../types/supabase'
import { useState } from 'react'

export const useSupabaseClient = () => {
    const [supabase] = useState(() => createPagesBrowserClient<Database>())
    return supabase
}
