import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yqccgmgycvaahjwbnhze.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxY2NnbWd5Y3ZhYWhqd2JuaHplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxMTk5OTYsImV4cCI6MjA2MzY5NTk5Nn0.InjiT-Ke8OpwK9s_oWJ3AJMl7gz_vcXsNLVF8KTem8c';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

