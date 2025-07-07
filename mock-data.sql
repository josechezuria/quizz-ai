
-- Table to track user sessions
CREATE TABLE sessions (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Questions table
CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  prompt TEXT NOT NULL
);

-- Options for each question
CREATE TABLE options (
  id SERIAL PRIMARY KEY,
  question_id INTEGER NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  label VARCHAR(1) NOT NULL,
  content TEXT NOT NULL,
  is_correct BOOLEAN NOT NULL DEFAULT false
);

-- Table to store submitted answers per session
CREATE TABLE answers (
  id SERIAL PRIMARY KEY,
  session_id INTEGER NOT NULL REFERENCES sessions(id) ON DELETE CASCADE,
  question_id INTEGER NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  selected_option_id INTEGER NOT NULL REFERENCES options(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Optional: Clear existing data
TRUNCATE options, questions RESTART IDENTITY CASCADE;

-- Insert mock questions
INSERT INTO questions (prompt) VALUES
('What is the capital of ✨slay✨?'),
('Which one is NOT a real job in the metaverse?'),
('What do plants crave in 2505 according to Idiocracy?'),
('What is Shrek’s favorite drink?'),
('What’s the national animal of Gen Z?'),
('Which of these is legally a fruit?'),
('Who is the CEO of swag?'),
('What causes brainrot in large doses?'),
('Which of these is NOT a flavor of LaCroix?'),
('How do you summon a Discord mod?'),
('What’s faster than light?'),
('Who lives in a society?'),
('Where do you keep your trauma?'),
('What’s the opposite of Sigma male?'),
('What is the correct response to “ratio”?'),
('Why did the chicken cross the road in 2025?'),
('Which programming language is most likely to gaslight you?'),
('What happens if you microwave a spoon?'),
('Which of these is the final form of evolution?'),
('How many tabs can one Chrome user open before it crashes?');

-- Insert options
INSERT INTO options (question_id, label, content, is_correct) VALUES
(1, 'A', 'Paris Hilton', false),
(1, 'B', 'Ohio', false),
(1, 'C', 'The mitochondria is the powerhouse of the cell', true),
(1, 'D', 'Slaydelphia', false),

(2, 'A', 'NFT janitor', false),
(2, 'B', 'Virtual shoe shiner', true),
(2, 'C', 'Metaverse DJ', false),
(2, 'D', 'VR barista', false),

(3, 'A', 'Electrolytes', true),
(3, 'B', 'Wi-Fi', false),
(3, 'C', 'Juul pods', false),
(3, 'D', 'Tears of your ex', false),

(4, 'A', 'Swamp Water™', true),
(4, 'B', 'Red Bull', false),
(4, 'C', 'Monster Energy Ogre Edition', false),
(4, 'D', 'Donkey juice', false),

(5, 'A', 'Capybara', true),
(5, 'B', 'Honey Badger', false),
(5, 'C', 'E-girl', false),
(5, 'D', 'Sad Frog', false),

(6, 'A', 'Avocado', false),
(6, 'B', 'Tomato', true),
(6, 'C', 'Cucumber', false),
(6, 'D', 'Bread', false),

(7, 'A', 'Elon Musk', false),
(7, 'B', 'Lil Nas X', false),
(7, 'C', 'You', true),
(7, 'D', 'A 14-year-old on TikTok', false),

(8, 'A', 'TikTok', false),
(8, 'B', 'Reddit', false),
(8, 'C', 'Rewatching the same show for the 7th time', true),
(8, 'D', 'News notifications', false),

(9, 'A', 'Lime', false),
(9, 'B', 'Pamplemousse', false),
(9, 'C', 'Sadness', true),
(9, 'D', 'Berry cringe', false),

(10, 'A', '/modhelp', false),
(10, 'B', 'Sacrifice a Funko Pop', true),
(10, 'C', 'Say "uwu" 3 times', false),
(10, 'D', 'Send feet pics', false),

(11, 'A', 'Elon’s tweets', false),
(11, 'B', 'Drama', false),
(11, 'C', 'That one rumor you heard in 6th grade', false),
(11, 'D', 'Gossip at light speed', true),

(12, 'A', 'Gamers', false),
(12, 'B', 'Jokers', true),
(12, 'C', 'Society', false),
(12, 'D', 'Jeff Bezos', false),

(13, 'A', 'In a jar', false),
(13, 'B', 'In a playlist', false),
(13, 'C', 'In memes', false),
(13, 'D', 'In the group chat', true),

(14, 'A', 'Delta male', false),
(14, 'B', 'Omega soy latte male', true),
(14, 'C', 'Alpha alpha', false),
(14, 'D', 'Venmo male', false),

(15, 'A', 'L + you fell off', true),
(15, 'B', 'Counter-ratio', false),
(15, 'C', 'Silence', false),
(15, 'D', 'Touch grass', false),

(16, 'A', 'To flex on the other side', false),
(16, 'B', 'Because the simulation glitched', true),
(16, 'C', 'Gas prices', false),
(16, 'D', 'He got a DoorDash notification', false),

(17, 'A', 'Python', false),
(17, 'B', 'JavaScript', true),
(17, 'C', 'Java', false),
(17, 'D', 'Rust', false),

(18, 'A', '5G powers up', false),
(18, 'B', 'Time travel', false),
(18, 'C', 'Explosion™', true),
(18, 'D', 'Unlimited ramen', false),

(19, 'A', 'Shiny Charizard', false),
(19, 'B', 'Quantum programmer', false),
(19, 'C', 'Dark mode user', false),
(19, 'D', 'Sigma Chad AI overlord', true),

(20, 'A', '10', false),
(20, 'B', '23', false),
(20, 'C', '42', false),
(20, 'D', 'One more than you should', true);