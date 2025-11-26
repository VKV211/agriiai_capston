// Supabase Configuration
const SUPABASE_URL = "https://mrjsyohjxglscrfgmnvb.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1yanN5b2hqeGdsc2NyZmdtbnZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3OTcxMTYsImV4cCI6MjA3NDM3MzExNn0.LmjYpHoTWI1DbaFAdTsxR1syeSFLaXpxd_oqgN-lofI";

// Create Supabase client globally
window.supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        supabase, 
        SUPABASE_URL, 
        SUPABASE_ANON_KEY 
    };
}