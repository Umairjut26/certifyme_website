-- ============================================
-- CertifyMe.pk Database Schema
-- Version: 1.0
-- Description: Complete database setup for CertifyMe.pk IT Certification Platform
-- ============================================

-- Create Database
CREATE DATABASE IF NOT EXISTS certifyme;
USE certifyme;

-- ============================================
-- ADMINS TABLE
-- Stores admin user credentials for CMS access
-- ============================================
CREATE TABLE IF NOT EXISTS admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- CERTIFICATIONS TABLE
-- Stores IT certification course details
-- ============================================
CREATE TABLE IF NOT EXISTS certifications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    vendor VARCHAR(100),
    price VARCHAR(50),
    exam_fee VARCHAR(50),
    duration VARCHAR(50),
    difficulty VARCHAR(50),
    icon VARCHAR(255),
    description TEXT,
    prerequisites TEXT,
    topics TEXT COMMENT 'Stored as JSON or comma separated',
    next_batches VARCHAR(255) COMMENT 'Stored as JSON or comma separated',
    who_should_take TEXT,
    career_outcomes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- TESTIMONIALS TABLE
-- Stores customer testimonials and reviews
-- ============================================
CREATE TABLE IF NOT EXISTS testimonials (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    role VARCHAR(100),
    certification VARCHAR(100),
    quote TEXT,
    rating INT,
    photo VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- SUCCESS STORIES TABLE
-- Stores student success stories and career transitions
-- ============================================
CREATE TABLE IF NOT EXISTS success_stories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    before_role VARCHAR(100),
    after_role VARCHAR(100),
    certification VARCHAR(100),
    salary_increase VARCHAR(50),
    story TEXT,
    image VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- FAQS TABLE
-- Stores frequently asked questions
-- ============================================
CREATE TABLE IF NOT EXISTS faqs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- BLOGS TABLE
-- Stores blog posts and articles
-- ============================================
CREATE TABLE IF NOT EXISTS blogs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    excerpt TEXT,
    date VARCHAR(50),
    category VARCHAR(50),
    image VARCHAR(255),
    full_content LONGTEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- LEADS TABLE
-- Stores contact form submissions
-- ============================================
CREATE TABLE IF NOT EXISTS leads (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    certification VARCHAR(255),
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- DEFAULT ADMIN USER
-- Username: admin | Password: admin123
-- ============================================
INSERT INTO admins (username, password) VALUES 
('admin', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi')
ON DUPLICATE KEY UPDATE username = username;

-- ============================================
-- SAMPLE DATA (Optional)
-- ============================================

-- Sample FAQs
INSERT INTO faqs (question, answer) VALUES
('What certifications do you offer?', 'We offer a wide range of IT certifications including AWS, Azure, CompTIA, Cisco, Google Cloud, and many more.'),
('How long does it take to complete a certification?', 'Duration varies by certification. Most courses range from 4-8 weeks depending on the complexity.'),
('Do you provide job placement support?', 'Yes! We provide complete job placement assistance including resume building, interview preparation, and company referrals.'),
('What is the mode of training?', 'We offer both online and in-person training sessions. You can choose the mode that suits you best.'),
('Are there any prerequisites for courses?', 'Prerequisites vary by course. Beginner courses like CompTIA A+ have no prerequisites, while advanced courses may require prior experience.')
ON DUPLICATE KEY UPDATE question = question;

-- Sample Certifications
INSERT INTO certifications (name, vendor, price, exam_fee, duration, difficulty, description, prerequisites, career_outcomes) VALUES
('AWS Certified Solutions Architect - Associate', 'Amazon Web Services', 'PKR 35,000', 'PKR 15,000', '6 weeks', 'Intermediate', 'Learn to design distributed systems on AWS cloud platform', 'Basic IT knowledge, 1+ year experience recommended', 'Cloud Architect, Solutions Architect, DevOps Engineer'),
('Microsoft Azure Administrator', 'Microsoft', 'PKR 38,000', 'PKR 16,000', '6 weeks', 'Intermediate', 'Master Azure administration and cloud infrastructure management', 'Understanding of cloud concepts and Azure services', 'Azure Administrator, Cloud Engineer, Infrastructure Specialist'),
('CompTIA Security+', 'CompTIA', 'PKR 32,000', 'PKR 14,000', '5 weeks', 'Intermediate', 'Foundational cybersecurity certification for IT professionals', 'Basic networking and IT fundamentals', 'Security Analyst, Security Administrator, SOC Analyst'),
('Google Cloud Associate Engineer', 'Google Cloud', 'PKR 36,000', 'PKR 15,000', '6 weeks', 'Intermediate', 'Deploy and manage applications on Google Cloud Platform', 'Basic cloud computing knowledge', 'Cloud Engineer, GCP Specialist, DevOps Engineer'),
('Cisco CCNA', 'Cisco', 'PKR 40,000', 'PKR 18,000', '8 weeks', 'Intermediate', 'Network fundamentals and Cisco routing/switching', 'Basic computer literacy', 'Network Engineer, Network Administrator, Systems Engineer'),
('CompTIA A+', 'CompTIA', 'PKR 28,000', 'PKR 12,000', '4 weeks', 'Beginner', 'Entry-level IT support and troubleshooting certification', 'None - perfect for beginners', 'IT Support Technician, Help Desk Analyst, Desktop Support')
ON DUPLICATE KEY UPDATE name = name;

-- ============================================
-- End of Schema
-- ============================================
