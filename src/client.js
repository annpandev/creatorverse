import {createClient} from '@supabase/supabase-js';

const URL = 'https://elbgmrlpkuqvtxoupgbq.supabase.co';
const API_KEY = 'sb_publishable_12eAxdfiUvidHQ0tZ-UAAw_J5cNzHm1';

export const supabase = createClient(URL, API_KEY);
