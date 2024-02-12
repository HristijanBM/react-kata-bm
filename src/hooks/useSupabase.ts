import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'

import { Database } from '../lib/supabase'

const useSupabase = () => {
    const supabase = createPagesBrowserClient<Database>()

    return supabase
}

export default useSupabase
