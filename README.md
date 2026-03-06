# CertifyMe.pk - IT Certification Platform

Pakistan's premier IT certification and training platform website. This project provides a complete solution for managing certifications, training courses, testimonials, blogs, and lead management.

## 🚀 Features

- **Landing Page** - Modern responsive design with multiple sections
- **Admin Panel** - Full CMS for content management
- **Lead Management** - Contact form with database storage
- **Blog System** - Dynamic blog posts with individual pages
- **Certifications** - Manage IT certifications catalog
- **Testimonials** - Customer reviews and success stories
- **FAQ Management** - Dynamic FAQ section

## 📁 Project Structure

```
certifyme-website/
├── index.php                 # Main landing page
├── blogs.php                 # Blog listing page
├── blog-page.php             # Individual blog page
├── submit_contact.php        # Contact form handler (AJAX)
├── db.php                    # Database connection
│
├── admin/                    # Admin Panel
│   ├── index.php             # Dashboard with statistics
│   ├── login.php             # Admin authentication
│   ├── logout.php            # Logout handler
│   ├── setup_db.php          # Database setup script
│   ├── blogs.php             # Blog management
│   ├── certifications.php    # Certifications CRUD
│   ├── testimonials.php      # Testimonials management
│   ├── success_stories.php   # Success stories CRUD
│   ├── faqs.php              # FAQ management
│   ├── leads.php             # View contact form leads
│   └── includes/             # Admin shared components
│       ├── db.php
│       ├── header.php
│       └── footer.php
│
├── includes/                 # Frontend shared components
│   ├── db_connect.php        # Database connection
│   └── page-parts/           # Reusable page sections
│       ├── header.php
│       ├── footer.php
│       ├── hero.php
│       ├── contact.php
│       ├── faq.php
│       ├── popularcertifications.php
│       ├── testimonialsection.php
│       ├── successstories.php
│       ├── whychooseus.php
│       ├── trainingcourses.php
│       ├── testingcenter.php
│       ├── ctasection.php
│       ├── successstatistics.php
│       └── blogs/
│           └── blog.php
│
├── assets/                   # Static assets
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── image/
│
└── database/                 # Database files
    └── certifyme.sql         # Complete database schema
```

## 🛠️ Tech Stack

- **Backend:** PHP
- **Database:** MySQL
- **Frontend:** HTML5, CSS3, JavaScript
- **Fonts:** Google Fonts (Poppins, Roboto)
- **Icons:** Font Awesome 6.5

## ⚙️ Installation

### Prerequisites
- XAMPP or any PHP server with MySQL
- PHP 7.4 or higher
- MySQL 5.7 or higher

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/certifyme-website.git
   ```

2. **Move to XAMPP htdocs**
   ```bash
   mv certifyme-website C:/xampp/htdocs/
   ```

3. **Start XAMPP**
   - Start Apache and MySQL services

4. **Setup Database**
   
   **Option 1: Using PHP Script**
   - Open browser and navigate to:
   ```
   http://localhost/certifyme-website/admin/setup_db.php
   ```
   
   **Option 2: Using SQL File (Recommended)**
   - Open phpMyAdmin: `http://localhost/phpmyadmin`
   - Click "Import" tab
   - Select `database/certifyme.sql` file
   - Click "Go" to import

   This will create the `certifyme` database with all required tables and sample data.

5. **Access the website**
   - Frontend: `http://localhost/certifyme-website/`
   - Admin Panel: `http://localhost/certifyme-website/admin/`

## 📊 Database Schema

The following tables are created:

| Table | Purpose |
|-------|---------|
| `admins` | Admin user authentication |
| `certifications` | IT certification courses |
| `blogs` | Blog posts |
| `testimonials` | Customer testimonials |
| `success_stories` | Success stories |
| `faqs` | Frequently asked questions |
| `leads` | Contact form submissions |

## 🔧 Configuration

Database configuration is in `includes/db_connect.php` and `admin/includes/db.php`:

```php
$host = 'localhost';
$user = 'root';
$pass = '';
$db = 'certifyme';
```

## 📱 Features by Section

### Landing Page Sections
- Hero section with CTA
- Popular certifications showcase
- Why choose us
- Success statistics counter
- Customer testimonials
- FAQ accordion
- Training courses
- Testing center info
- Success stories
- Latest blogs
- Contact form

### Admin Panel Features
- Dashboard with quick stats
- CRUD operations for all content types
- Lead management and tracking
- Secure authentication

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the terms included in the [LICENSE](LICENSE) file.

## 📞 Contact

For inquiries about CertifyMe.pk, visit the website or use the contact form.

---
**CertifyMe.pk** - Get Certified. Get Hired.
