
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pcynpaelrwkgsfmtalwm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjeW5wYWVscndrZ3NmbXRhbHdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjExNzg3MTcsImV4cCI6MjAzNjc1NDcxN30.9F2-0XRbL0W80p-RRp-_PHrmtznuKJvtCmGe5z5wov4';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase
        