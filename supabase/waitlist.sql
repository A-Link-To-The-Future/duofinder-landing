-- Create waitlist table
CREATE TABLE waitlist (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text UNIQUE NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS (Row Level Security)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from the service role
CREATE POLICY "Allow service role inserts" ON waitlist
  FOR INSERT
  TO service_role
  WITH CHECK (true);

-- Create index for faster lookups
CREATE INDEX waitlist_email_idx ON waitlist(email);
