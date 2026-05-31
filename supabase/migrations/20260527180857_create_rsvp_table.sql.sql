/*
  # Create RSVP Responses Table

  1. New Tables
    - `rsvp_responses`
      - `id` (uuid, primary key)
      - `name` (text, guest name)
      - `email` (text, guest email)
      - `attending` (boolean, whether attending)
      - `guest_count` (integer, number of guests including primary)
      - `meal_preference` (text, selected meal option)
      - `dietary_restrictions` (text, any dietary requirements)
      - `message` (text, optional message to couple)
      - `created_at` (timestamp, response time)

  2. Security
    - Enable RLS on `rsvp_responses` table
    - Add policy for anyone to insert (public RSVP submission)
    - No read/update/delete policies for unauthenticated users (data is private)
*/

CREATE TABLE IF NOT EXISTS rsvp_responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  attending boolean NOT NULL,
  guest_count integer DEFAULT 1,
  meal_preference text,
  dietary_restrictions text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE rsvp_responses ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit RSVPs (INSERT only)
CREATE POLICY "Anyone can submit RSVP"
  ON rsvp_responses FOR INSERT
  TO anon
  WITH CHECK (true);
