// Data
const certifications = [
    {
        name: "AWS Certified Solutions Architect - Associate",
        vendor: "Amazon Web Services",
        price: "PKR 35,000",
        exam_fee: "PKR 15,000",
        duration: "6 weeks",
        difficulty: "Intermediate",
        icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
        description: "Learn to design distributed systems on AWS cloud platform",
        prerequisites: "Basic IT knowledge, 1+ year experience recommended",
        topics: [
            "AWS Core Services (EC2, S3, RDS, VPC)",
            "High Availability & Fault Tolerance",
            "Security & Compliance",
            "Cost Optimization Strategies",
            "Migration & Deployment"
        ],
        next_batches: ["Jan 15, 2026", "Feb 5, 2026", "Mar 1, 2026"],
        who_should_take: "IT professionals, system administrators, and developers looking to validate their AWS skills",
        career_outcomes: "Cloud Architect, Solutions Architect, DevOps Engineer"
    },
    {
        name: "Microsoft Azure Administrator",
        vendor: "Microsoft",
        price: "PKR 38,000",
        exam_fee: "PKR 16,000",
        duration: "6 weeks",
        difficulty: "Intermediate",
        icon: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
        description: "Master Azure administration and cloud infrastructure management",
        prerequisites: "Understanding of cloud concepts and Azure services",
        topics: [
            "Azure Virtual Machines & Networking",
            "Storage Management",
            "Identity & Access Management",
            "Monitoring & Backup Solutions",
            "Azure Resource Manager"
        ],
        next_batches: ["Jan 20, 2026", "Feb 10, 2026", "Mar 5, 2026"],
        who_should_take: "System administrators and cloud professionals",
        career_outcomes: "Azure Administrator, Cloud Engineer, Infrastructure Specialist"
    },
    {
        name: "CompTIA Security+",
        vendor: "CompTIA",
        price: "PKR 32,000",
        exam_fee: "PKR 14,000",
        duration: "5 weeks",
        difficulty: "Intermediate",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/comptia.svg",
        description: "Foundational cybersecurity certification for IT professionals",
        prerequisites: "Basic networking and IT fundamentals",
        topics: [
            "Threats, Attacks & Vulnerabilities",
            "Security Architecture & Tool Sets",
            "Identity & Access Management",
            "Risk Management",
            "Cryptography & PKI"
        ],
        next_batches: ["Jan 18, 2026", "Feb 8, 2026", "Mar 3, 2026"],
        who_should_take: "IT professionals entering cybersecurity field",
        career_outcomes: "Security Analyst, Security Administrator, SOC Analyst"
    },
    {
        name: "Google Cloud Associate Engineer",
        vendor: "Google Cloud",
        price: "PKR 36,000",
        exam_fee: "PKR 15,000",
        duration: "6 weeks",
        difficulty: "Intermediate",
        icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
        description: "Deploy and manage applications on Google Cloud Platform",
        prerequisites: "Basic cloud computing knowledge",
        topics: [
            "Google Compute Engine",
            "Cloud Storage Solutions",
            "Networking in GCP",
            "Kubernetes Engine",
            "Cloud Security Best Practices"
        ],
        next_batches: ["Jan 25, 2026", "Feb 15, 2026", "Mar 10, 2026"],
        who_should_take: "Cloud engineers and developers",
        career_outcomes: "Cloud Engineer, GCP Specialist, DevOps Engineer"
    },
    {
        name: "Cisco CCNA",
        vendor: "Cisco",
        price: "PKR 40,000",
        exam_fee: "PKR 18,000",
        duration: "8 weeks",
        difficulty: "Intermediate",
        icon: "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg",
        description: "Network fundamentals and Cisco routing/switching",
        prerequisites: "Basic computer literacy",
        topics: [
            "Network Fundamentals",
            "IP Connectivity & Services",
            "Security Fundamentals",
            "Automation & Programmability",
            "Cisco IOS Configuration"
        ],
        next_batches: ["Jan 22, 2026", "Feb 12, 2026", "Mar 8, 2026"],
        who_should_take: "Network administrators and engineers",
        career_outcomes: "Network Engineer, Network Administrator, Systems Engineer"
    },
    {
        name: "CompTIA A+",
        vendor: "CompTIA",
        price: "PKR 28,000",
        exam_fee: "PKR 12,000",
        duration: "4 weeks",
        difficulty: "Beginner",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/comptia.svg",
        description: "Entry-level IT support and troubleshooting certification",
        prerequisites: "None - perfect for beginners",
        topics: [
            "Hardware & Operating Systems",
            "Networking Basics",
            "Mobile Devices",
            "Troubleshooting Methodologies",
            "Security Fundamentals"
        ],
        next_batches: ["Jan 12, 2026", "Feb 2, 2026", "Feb 25, 2026"],
        who_should_take: "IT beginners and career changers",
        career_outcomes: "IT Support Technician, Help Desk Analyst, Desktop Support"
    }
];

const testimonials = [
    {
        name: "Daniyal Tariq",
        role: "Cloud Engineer at Systems Limited",
        certification: "AWS Solutions Architect",
        quote: "CertifyMe helped me transition from support role to cloud engineering. The instructors are experienced and the testing center is world-class.",
        rating: 4,
        photo: "./assets/image/download (9).png"
    },
    {
        name: "Fatima Ali",
        role: "Azure Administrator at Avery Global",
        certification: "Microsoft Azure Admin",
        quote: "Best investment in my career! I passed Azure exam on first attempt and got 40% salary increase within 2 months.",
        rating: 5,
        photo: "./assets/image/testimage.jpeg"
    },
    {
        name: "Zaid Lajpal",
        role: "Security Analyst at MCB Bank",
        certification: "CompTIA Security+",
        quote: "The hands-on labs and real-world scenarios prepared me perfectly for the exam and my new role in cybersecurity.",
        rating: 4,
        photo: "./assets/image/image.png"
    }
];

const successStories = [
    {
        name: "Umair",
        before: "Computer Science Graduate",
        after: "DevOps Engineer at Netsol",
        certification: "AWS Solutions Architect",
        salary_increase: "85%",
        story: "Fresh graduate with no experience to DevOps Engineer earning PKR 120,000/month in 4 months",
        image: "./assets/umair.jfif"
    },
    {
        name: "Faizan",
        before: "IT Support Technician",
        after: "Cloud Infrastructure Engineer",
        certification: "Azure Administrator",
        salary_increase: "60%",
        story: "Career transformation from PKR 45,000 to PKR 95,000 monthly salary",
        image: "./assets/faizan.jfif"
    },
    {
        name: "Uzair",
        before: "Fresh Graduate",
        after: "Security Analyst at Bank Alfalah",
        certification: "CompTIA Security+",
        salary_increase: "100%",
        story: "From jobless to earning PKR 80,000/month in the cybersecurity field",
        image: "./assets/uzair.png"
    },
];

const faqs = [
    {
        question: "How long does it take to complete a certification?",
        answer: "Most certifications take 4-8 weeks depending on the complexity. We offer flexible schedules including evening and weekend batches."
    },
    {
        question: "What is the exam pass guarantee?",
        answer: "While we don't guarantee pass, our students have 85%+ first-attempt pass rate. We offer free exam retake training if you don't pass."
    },
    {
        question: "Can I pay in installments?",
        answer: "Yes! We offer 2-3 month installment plans for courses above PKR 30,000. Contact us for details."
    },
    {
        question: "Do you provide job placement support?",
        answer: "Yes, we have partnerships with 15+ IT companies. We provide resume review, interview prep, and direct referrals to hiring partners."
    },
    {
        question: "Are you an authorized testing center?",
        answer: "Yes, we are authorized by Pearson VUE and Prometric to conduct official certification exams in our secure testing facility."
    },
    {
        question: "What is included in the training course?",
        answer: "Our training includes live interactive sessions, recorded lectures, hands-on lab access, practice exams, study materials, and lifetime course access."
    }
];

const blogPosts = [
    {
        title: "Top 5 IT Certifications for 2026 in Pakistan",
        excerpt: "Discover which certifications are most in-demand by Pakistani employers and offer the best ROI for your career.",
        date: "November 20, 2025",
        category: "Career Advice",
        image: "./assets/image/pexels-pixabay-261662.jpg",
        fullContent: `
            <p>The IT industry in Pakistan is booming, and certified professionals are in high demand. If you're looking to advance your career or break into the tech field, getting certified is one of the best investments you can make. Here are the top 5 IT certifications that Pakistani employers are actively seeking in 2026.</p>

            <h2>1. AWS Certified Solutions Architect - Associate</h2>
            <p>Cloud computing dominates the IT landscape, and Amazon Web Services (AWS) leads the pack. This certification validates your ability to design distributed systems on AWS and is highly valued by both local and international companies operating in Pakistan.</p>
            <p><strong>Average Salary:</strong> PKR 80,000 - 150,000/month</p>
            <p><strong>Best For:</strong> IT professionals, system administrators, developers</p>

            <h2>2. Microsoft Azure Administrator</h2>
            <p>With Microsoft's strong presence in Pakistan's enterprise sector, Azure skills are increasingly sought after. This certification demonstrates your expertise in implementing, monitoring, and maintaining Microsoft Azure solutions.</p>
            <p><strong>Average Salary:</strong> PKR 85,000 - 160,000/month</p>
            <p><strong>Best For:</strong> System administrators, cloud engineers</p>

            <h2>3. CompTIA Security+</h2>
            <p>Cybersecurity is no longer optional for businesses. As cyber threats increase, demand for security professionals has skyrocketed. Security+ is the perfect entry point into the cybersecurity field.</p>
            <p><strong>Average Salary:</strong> PKR 70,000 - 140,000/month</p>
            <p><strong>Best For:</strong> IT professionals entering security, network administrators</p>

            <h2>4. Cisco CCNA</h2>
            <p>Networking remains fundamental to IT infrastructure. CCNA certification proves your skills in installing, configuring, and troubleshooting medium-size routed and switched networks.</p>
            <p><strong>Average Salary:</strong> PKR 60,000 - 120,000/month</p>
            <p><strong>Best For:</strong> Network administrators, support engineers</p>

            <h2>5. Google Cloud Associate Engineer</h2>
            <p>Google Cloud Platform (GCP) is gaining traction in Pakistan's startup ecosystem and among digital agencies. This certification validates your ability to deploy applications and monitor operations on GCP.</p>
            <p><strong>Average Salary:</strong> PKR 75,000 - 145,000/month</p>
            <p><strong>Best For:</strong> Developers, DevOps engineers, cloud engineers</p>

            <h2>Return on Investment</h2>
            <p>On average, certified IT professionals in Pakistan earn 40-60% more than their non-certified peers. The initial investment in training and certification typically pays for itself within 3-6 months through increased salary or new job opportunities.</p>

            <blockquote>
                "Getting my AWS certification through CertifyMe.pk changed my career trajectory completely. Within 2 months, I moved from a support role earning PKR 45,000 to a cloud engineer position at PKR 95,000." - Ahmed K., Cloud Engineer
            </blockquote>

            <h2>Next Steps</h2>
            <p>Ready to get certified? Choose the certification that aligns with your career goals and start your journey today. At CertifyMe.pk, we provide comprehensive training, hands-on labs, and exam preparation support to ensure your success.</p>
        `
    },
    {
        title: "How to Prepare for AWS Solutions Architect Exam",
        excerpt: "A comprehensive 6-week study plan with free resources and practice tips from our certified instructors.",
        date: "November 18, 2025",
        category: "Exam Prep",
        image: "./assets/image/imgi_1_th.png",
        fullContent: `
            <p>The AWS Certified Solutions Architect - Associate (SAA-C03) exam is one of the most popular cloud certifications globally. With proper preparation, you can pass this exam on your first attempt. Here's your complete 6-week study plan.</p>

            <h2>Week 1-2: Core AWS Services</h2>
            <p>Focus on understanding the fundamental AWS services that form the backbone of the exam:</p>
            <ul>
                <li><strong>EC2:</strong> Instance types, pricing models, Auto Scaling, Load Balancers</li>
                <li><strong>S3:</strong> Storage classes, versioning, lifecycle policies, encryption</li>
                <li><strong>VPC:</strong> Subnets, route tables, NAT gateways, security groups</li>
                <li><strong>IAM:</strong> Users, groups, roles, policies, and best practices</li>
                <li><strong>RDS:</strong> Database engines, Multi-AZ deployments, read replicas</li>
            </ul>

            <h2>Week 3-4: Advanced Services & Architecture</h2>
            <p>Dive deeper into architectural patterns and additional services:</p>
            <ul>
                <li>High Availability and Fault Tolerance design patterns</li>
                <li>CloudFront and content delivery</li>
                <li>Route 53 for DNS management</li>
                <li>Lambda and serverless architectures</li>
                <li>DynamoDB and NoSQL concepts</li>
                <li>SQS, SNS, and messaging services</li>
            </ul>

            <h2>Week 5: Practice Exams & Weak Areas</h2>
            <p>Take full-length practice exams to identify your weak areas. Focus on:</p>
            <ul>
                <li>Reviewing incorrect answers thoroughly</li>
                <li>Understanding WHY the correct answer is right</li>
                <li>Revisiting AWS documentation for challenging topics</li>
                <li>Creating flashcards for key concepts</li>
            </ul>

            <h2>Week 6: Final Review & Exam Strategy</h2>
            <p>In your final week, focus on:</p>
            <ul>
                <li>Taking 2-3 more practice exams</li>
                <li>Reviewing AWS Well-Architected Framework</li>
                <li>Understanding exam question patterns</li>
                <li>Practicing time management (130 minutes for 65 questions)</li>
            </ul>

            <h2>Recommended Free Resources</h2>
            <ul>
                <li><strong>AWS Documentation:</strong> Official AWS docs are your best friend</li>
                <li><strong>AWS Skill Builder:</strong> Free courses directly from AWS</li>
                <li><strong>AWS FAQs:</strong> Essential reading for each service</li>
                <li><strong>AWS Whitepapers:</strong> Focus on Well-Architected Framework</li>
            </ul>

            <h2>Exam Day Tips</h2>
            <ol>
                <li>Get a good night's sleep before the exam</li>
                <li>Arrive 30 minutes early to the testing center</li>
                <li>Read each question carefully - watch for keywords like "MOST cost-effective" or "LEAST operational overhead"</li>
                <li>Eliminate obviously wrong answers first</li>
                <li>Flag difficult questions and return to them later</li>
                <li>Don't second-guess yourself too much</li>
            </ol>

            <blockquote>
                "Following this study plan and using CertifyMe.pk's practice labs, I passed my AWS exam with a score of 890/1000 on my first attempt!" - Fatima A., Solutions Architect
            </blockquote>

            <h2>Join Our AWS Training Program</h2>
            <p>At CertifyMe.pk, our AWS Solutions Architect course includes hands-on labs, real-world scenarios, and unlimited practice exams. Our students have an 85%+ first-attempt pass rate.</p>
        `
    },
    {
        title: "Cloud Computing Jobs in Pakistan: Salary Guide 2026",
        excerpt: "Detailed analysis of cloud engineer salaries across major Pakistani cities and how certifications impact earning potential.",
        date: "November 15, 2025",
        category: "Industry News",
        image: "./assets/image/imgi_4_t_500x300.png",
        fullContent: `
            <p>Cloud computing has revolutionized Pakistan's IT job market. With the rise of remote work and global hiring, Pakistani cloud professionals now have access to both local and international opportunities. Let's dive into the salary landscape for 2026.</p>

            <h2>Entry-Level Cloud Engineers (0-2 years)</h2>
            <h3>Karachi</h3>
            <p><strong>Without Certification:</strong> PKR 40,000 - 60,000/month</p>
            <p><strong>With Certification:</strong> PKR 65,000 - 90,000/month</p>

            <h3>Lahore</h3>
            <p><strong>Without Certification:</strong> PKR 38,000 - 55,000/month</p>
            <p><strong>With Certification:</strong> PKR 60,000 - 85,000/month</p>

            <h3>Islamabad</h3>
            <p><strong>Without Certification:</strong> PKR 42,000 - 65,000/month</p>
            <p><strong>With Certification:</strong> PKR 70,000 - 95,000/month</p>

            <h2>Mid-Level Cloud Engineers (2-5 years)</h2>
            <h3>Karachi</h3>
            <p><strong>Without Certification:</strong> PKR 80,000 - 120,000/month</p>
            <p><strong>With Certification:</strong> PKR 120,000 - 180,000/month</p>

            <h3>Lahore</h3>
            <p><strong>Without Certification:</strong> PKR 75,000 - 110,000/month</p>
            <p><strong>With Certification:</strong> PKR 115,000 - 170,000/month</p>

            <h3>Islamabad</h3>
            <p><strong>Without Certification:</strong> PKR 85,000 - 130,000/month</p>
            <p><strong>With Certification:</strong> PKR 130,000 - 190,000/month</p>

            <h2>Senior Cloud Architects (5+ years)</h2>
            <h3>Karachi</h3>
            <p><strong>Without Certification:</strong> PKR 150,000 - 250,000/month</p>
            <p><strong>With Certification:</strong> PKR 220,000 - 400,000/month</p>

            <h3>Lahore</h3>
            <p><strong>Without Certification:</strong> PKR 140,000 - 230,000/month</p>
            <p><strong>With Certification:</strong> PKR 200,000 - 380,000/month</p>

            <h3>Islamabad</h3>
            <p><strong>Without Certification:</strong> PKR 160,000 - 270,000/month</p>
            <p><strong>With Certification:</strong> PKR 240,000 - 420,000/month</p>

            <h2>Remote International Opportunities</h2>
            <p>Pakistani cloud professionals working remotely for international companies can earn significantly more:</p>
            <ul>
                <li><strong>Entry-Level:</strong> $800 - $1,500/month (PKR 220,000 - 420,000)</li>
                <li><strong>Mid-Level:</strong> $2,000 - $4,000/month (PKR 560,000 - 1,120,000)</li>
                <li><strong>Senior-Level:</strong> $4,500 - $8,000/month (PKR 1,260,000 - 2,240,000)</li>
            </ul>

            <h2>Impact of Certifications</h2>
            <p>The data clearly shows that certified professionals earn 40-80% more than their non-certified counterparts. Here's the average salary boost by certification:</p>
            <ul>
                <li><strong>AWS Certified Solutions Architect:</strong> +55% average salary increase</li>
                <li><strong>Microsoft Azure Administrator:</strong> +60% average salary increase</li>
                <li><strong>Google Cloud Engineer:</strong> +50% average salary increase</li>
                <li><strong>Multiple Certifications:</strong> +75-100% average salary increase</li>
            </ul>

            <h2>Top Hiring Companies in Pakistan</h2>
            <p>These companies are actively hiring cloud professionals in Pakistan:</p>
            <ul>
                <li>Systems Limited</li>
                <li>NetSol Technologies</li>
                <li>Arbisoft</li>
                <li>Tkxel</li>
                <li>Folio3</li>
                <li>VentureDive</li>
                <li>10Pearls</li>
                <li>Contour Software</li>
            </ul>

            <h2>Future Outlook</h2>
            <p>Cloud computing jobs in Pakistan are projected to grow by 35% annually through 2028. The demand far exceeds the supply of qualified professionals, making this the perfect time to upskill and get certified.</p>

            <blockquote>
                "After getting AWS certified through CertifyMe.pk, I received three job offers within one month. My salary jumped from PKR 50,000 to PKR 110,000. The certification opened doors I never thought possible." - Hassan R., Cloud Engineer
            </blockquote>

            <h2>Ready to Boost Your Earning Potential?</h2>
            <p>Don't let this opportunity pass. Invest in your certification today and unlock the high-paying cloud computing career you deserve.</p>
        `
    },
    {
        title: "CompTIA Security+ vs CEH: Which Certification is Right for You?",
        excerpt: "Compare two leading cybersecurity certifications and find out which one aligns best with your career goals in Pakistan's security industry.",
        date: "November 10, 2025",
        category: "Career Advice",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
        fullContent: `
            <p>Cybersecurity is one of the fastest-growing fields in Pakistan's IT sector. With increasing cyber threats, companies are desperately seeking qualified security professionals. Two certifications stand out: CompTIA Security+ and Certified Ethical Hacker (CEH). Let's compare them to help you make the right choice.</p>

            <h2>CompTIA Security+</h2>
            <p>Security+ is a vendor-neutral certification that covers fundamental cybersecurity concepts. It's recognized globally and serves as an excellent entry point into the security field.</p>
            
            <h3>Key Topics:</h3>
            <ul>
                <li>Threats, attacks, and vulnerabilities</li>
                <li>Technologies and tools</li>
                <li>Architecture and design</li>
                <li>Identity and access management</li>
                <li>Risk management</li>
                <li>Cryptography and PKI</li>
            </ul>

            <p><strong>Best For:</strong> IT professionals transitioning to security, help desk staff moving up, system administrators</p>
            <p><strong>Average Salary in Pakistan:</strong> PKR 70,000 - 140,000/month</p>
            <p><strong>Training Duration:</strong> 5-6 weeks</p>
            <p><strong>Exam Cost:</strong> PKR 14,000</p>

            <h2>Certified Ethical Hacker (CEH)</h2>
            <p>CEH focuses on offensive security - teaching you to think like a hacker to better defend systems. It's more hands-on and penetration testing focused than Security+.</p>

            <h3>Key Topics:</h3>
            <ul>
                <li>Footprinting and reconnaissance</li>
                <li>Scanning networks and enumeration</li>
                <li>Vulnerability analysis</li>
                <li>System hacking and exploitation</li>
                <li>Malware threats and sniffing</li>
                <li>Social engineering and penetration testing</li>
            </ul>

            <p><strong>Best For:</strong> Security analysts, penetration testers, security consultants</p>
            <p><strong>Average Salary in Pakistan:</strong> PKR 90,000 - 180,000/month</p>
            <p><strong>Training Duration:</strong> 8-10 weeks</p>
            <p><strong>Exam Cost:</strong> PKR 45,000</p>

            <h2>Side-by-Side Comparison</h2>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                <tr style="background: var(--light-gray);">
                    <th style="padding: 12px; text-align: left;">Factor</th>
                    <th style="padding: 12px; text-align: left;">Security+</th>
                    <th style="padding: 12px; text-align: left;">CEH</th>
                </tr>
                <tr>
                    <td style="padding: 12px; border-top: 1px solid #ddd;">Difficulty</td>
                    <td style="padding: 12px; border-top: 1px solid #ddd;">Intermediate</td>
                    <td style="padding: 12px; border-top: 1px solid #ddd;">Advanced</td>
                </tr>
                <tr>
                    <td style="padding: 12px; border-top: 1px solid #ddd;">Prerequisites</td>
                    <td style="padding: 12px; border-top: 1px solid #ddd;">Basic IT knowledge</td>
                    <td style="padding: 12px; border-top: 1px solid #ddd;">2+ years security experience</td>
                </tr>
                <tr>
                    <td style="padding: 12px; border-top: 1px solid #ddd;">Focus</td>
                    <td style="padding: 12px; border-top: 1px solid #ddd;">Defensive security</td>
                    <td style="padding: 12px; border-top: 1px solid #ddd;">Offensive security</td>
                </tr>
                <tr>
                    <td style="padding: 12px; border-top: 1px solid #ddd;">Job Demand</td>
                    <td style="padding: 12px; border-top: 1px solid #ddd;">Very High</td>
                    <td style="padding: 12px; border-top: 1px solid #ddd;">High</td>
                </tr>
            </table>

            <h2>Which Should You Choose?</h2>
            <p><strong>Choose Security+ if:</strong></p>
            <ul>
                <li>You're new to cybersecurity</li>
                <li>You want a solid foundation in security concepts</li>
                <li>You're on a limited budget</li>
                <li>You want faster certification (5-6 weeks)</li>
            </ul>

            <p><strong>Choose CEH if:</strong></p>
            <ul>
                <li>You have some security experience</li>
                <li>You want to specialize in penetration testing</li>
                <li>You're interested in offensive security roles</li>
                <li>You have budget for higher investment</li>
            </ul>

            <blockquote>
                "I started with Security+ to build my foundation, then got CEH after 1 year. This progression helped me land a penetration tester role at PKR 150,000/month." - Ali M., Security Consultant
            </blockquote>

            <h2>The Best Path Forward</h2>
            <p>Many professionals start with Security+ to build a strong foundation, then pursue CEH to specialize. Both certifications are highly valued in Pakistan's job market and can significantly boost your career prospects.</p>
        `
    },
    {
        title: "From Zero to Cloud Engineer: Complete Roadmap for Pakistani Students",
        excerpt: "A step-by-step guide for fresh graduates and career changers to break into cloud computing without prior experience.",
        date: "November 5, 2025",
        category: "Career Advice",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
        fullContent: `
            <p>Cloud computing offers incredible career opportunities in Pakistan, but many students and fresh graduates don't know where to start. This comprehensive roadmap will take you from zero experience to job-ready cloud engineer in 6-12 months.</p>

            <h2>Phase 1: Build IT Fundamentals (Months 1-2)</h2>
            <p>Before diving into cloud, you need a solid IT foundation:</p>

            <h3>Learn These Basics:</h3>
            <ul>
                <li><strong>Networking Basics:</strong> IP addressing, DNS, DHCP, routing, TCP/IP</li>
                <li><strong>Operating Systems:</strong> Linux command line, Windows Server basics</li>
                <li><strong>Virtualization:</strong> Understanding VMs and hypervisors</li>
                <li><strong>Basic Scripting:</strong> Bash, PowerShell fundamentals</li>
            </ul>

            <p><strong>Free Resources:</strong></p>
            <ul>
                <li>Professor Messer's Network+ videos (YouTube)</li>
                <li>Linux Journey website</li>
                <li>Microsoft Learn platform</li>
            </ul>

            <p><strong>Optional Certification:</strong> CompTIA A+ or Network+ (not required but helpful)</p>

            <h2>Phase 2: Choose Your Cloud Platform (Month 3)</h2>
            <p>Pick ONE cloud platform to start with. Don't try to learn all three at once.</p>

            <h3>AWS (Most Popular in Pakistan):</h3>
            <ul>
                <li>Largest market share globally</li>
                <li>Most job opportunities in Pakistan</li>
                <li>Best for startups and tech companies</li>
            </ul>

            <h3>Azure (Enterprise Favorite):</h3>
            <ul>
                <li>Strong in enterprise/corporate sector</li>
                <li>Great for Windows-focused environments</li>
                <li>Banks and large corporations prefer Azure</li>
            </ul>

            <h3>Google Cloud (Growing Presence):</h3>
            <ul>
                <li>Strong in data/ML applications</li>
                <li>Popular with digital agencies</li>
                <li>Fewer jobs but growing rapidly</li>
            </ul>

            <p><strong>Recommendation:</strong> Start with AWS if unsure - it has the most opportunities.</p>

            <h2>Phase 3: Cloud Fundamentals (Months 4-5)</h2>
            <p>Master core cloud concepts and services:</p>

            <h3>Core Services to Learn:</h3>
            <ul>
                <li>Compute: EC2 (AWS), Virtual Machines (Azure), Compute Engine (GCP)</li>
                <li>Storage: S3, Azure Blob, Cloud Storage</li>
                <li>Networking: VPCs, subnets, security groups</li>
                <li>Databases: RDS, Azure SQL, Cloud SQL</li>
                <li>Identity: IAM and access management</li>
            </ul>

            <p><strong>Hands-On Practice:</strong> Create a free tier account and build projects!</p>

            <h3>Project Ideas:</h3>
            <ol>
                <li>Host a static website using S3/Azure Storage</li>
                <li>Deploy a WordPress site on EC2/VM</li>
                <li>Set up a database and connect to an application</li>
                <li>Create a VPC with public and private subnets</li>
            </ol>

            <h2>Phase 4: Get Certified (Months 6-8)</h2>
            <p>Certification is CRUCIAL for landing your first cloud job in Pakistan without experience.</p>

            <h3>Recommended First Certifications:</h3>
            <ul>
                <li><strong>AWS:</strong> Certified Solutions Architect - Associate</li>
                <li><strong>Azure:</strong> Azure Administrator Associate (AZ-104)</li>
                <li><strong>GCP:</strong> Associate Cloud Engineer</li>
            </ul>

            <p>Invest in quality training - it's worth it. Self-study takes 3-4 months, structured training takes 6-8 weeks.</p>

            <h2>Phase 5: Build Your Portfolio (Months 9-10)</h2>
            <p>Create projects that showcase your skills:</p>

            <h3>Portfolio Projects:</h3>
            <ol>
                <li><strong>Three-Tier Web Application:</strong> Frontend, backend, database on cloud</li>
                <li><strong>CI/CD Pipeline:</strong> Automated deployment using GitHub Actions</li>
                <li><strong>Infrastructure as Code:</strong> Terraform or CloudFormation templates</li>
                <li><strong>Monitoring Setup:</strong> CloudWatch/Azure Monitor dashboards</li>
            </ol>

            <p>Document everything on GitHub with clear README files.</p>

            <h2>Phase 6: Job Hunt Strategy (Months 11-12)</h2>
            <p>Time to land your first cloud engineering role:</p>

            <h3>Resume Tips:</h3>
            <ul>
                <li>List certification prominently at the top</li>
                <li>Include your portfolio projects with GitHub links</li>
                <li>Mention hands-on labs and practical experience</li>
                <li>Quantify achievements (e.g., "Built 5 cloud projects")</li>
            </ul>

            <h3>Where to Apply:</h3>
            <ul>
                <li>LinkedIn Jobs (set alerts for "cloud engineer")</li>
                <li>Rozee.pk, Indeed Pakistan</li>
                <li>Company websites directly (Systems Limited, NetSol, etc.)</li>
                <li>Network on LinkedIn with cloud professionals</li>
            </ul>

            <h3>Realistic Salary Expectations:</h3>
            <ul>
                <li><strong>Fresh Graduate with Certification:</strong> PKR 60,000 - 85,000/month</li>
                <li><strong>After 6 months experience:</strong> PKR 90,000 - 120,000/month</li>
                <li><strong>After 1-2 years:</strong> PKR 130,000 - 180,000/month</li>
            </ul>

            <h2>Common Mistakes to Avoid</h2>
            <ul>
                <li>❌ Trying to learn multiple cloud platforms at once</li>
                <li>❌ Only watching videos without hands-on practice</li>
                <li>❌ Skipping certification (it's essential in Pakistan)</li>
                <li>❌ Not building a portfolio of projects</li>
                <li>❌ Giving up after a few rejections</li>
            </ul>

            <blockquote>
                "I followed this exact roadmap. Started in January 2025 as a fresh CS graduate with no experience. By August, I got my AWS certification through CertifyMe.pk. In October, I landed my first cloud engineer job at PKR 75,000/month at VentureDive!" - Saad K., Cloud Engineer
            </blockquote>

            <h2>Ready to Start Your Journey?</h2>
            <p>The cloud computing field in Pakistan is booming, and there's never been a better time to get started. With dedication and the right roadmap, you can transition from zero experience to a well-paid cloud engineer in less than a year.</p>
        `
    },
    {
        title: "Azure vs AWS: Which Cloud Platform Pays More in Pakistan?",
        excerpt: "In-depth salary comparison and market analysis to help you choose between AWS and Azure certifications for maximum earning potential.",
        date: "October 28, 2025",
        category: "Industry News",
       image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
        fullContent: `
            <p>Choosing between AWS and Azure certifications is one of the biggest decisions for aspiring cloud professionals in Pakistan. Both platforms offer excellent career opportunities, but which one pays better? Let's break down the numbers and market dynamics.</p>

            <h2>Current Market Share in Pakistan</h2>
            <p><strong>AWS:</strong> 45% of cloud deployments in Pakistan</p>
            <p><strong>Azure:</strong> 35% of cloud deployments in Pakistan</p>
            <p><strong>Google Cloud:</strong> 12% of cloud deployments</p>
            <p><strong>Others:</strong> 8%</p>

            <h2>Entry-Level Salaries (0-2 years experience)</h2>
            
            <h3>AWS Certified Solutions Architect Associate:</h3>
            <p><strong>Karachi:</strong> PKR 65,000 - 95,000/month</p>
            <p><strong>Lahore:</strong> PKR 60,000 - 90,000/month</p>
            <p><strong>Islamabad:</strong> PKR 70,000 - 100,000/month</p>
            <p><strong>Average:</strong> PKR 78,000/month</p>

            <h3>Azure Administrator Associate (AZ-104):</h3>
            <p><strong>Karachi:</strong> PKR 70,000 - 100,000/month</p>
            <p><strong>Lahore:</strong> PKR 65,000 - 95,000/month</p>
            <p><strong>Islamabad:</strong> PKR 75,000 - 105,000/month</p>
            <p><strong>Average:</strong> PKR 85,000/month</p>

            <p><strong>Winner:</strong> Azure (9% higher average salary)</p>

            <h2>Mid-Level Salaries (2-5 years experience)</h2>

            <h3>AWS Solutions Architect / Cloud Engineer:</h3>
            <p><strong>Karachi:</strong> PKR 120,000 - 180,000/month</p>
            <p><strong>Lahore:</strong> PKR 110,000 - 170,000/month</p>
            <p><strong>Islamabad:</strong> PKR 130,000 - 190,000/month</p>
            <p><strong>Average:</strong> PKR 150,000/month</p>

            <h3>Azure Solutions Architect / Cloud Engineer:</h3>
            <p><strong>Karachi:</strong> PKR 130,000 - 190,000/month</p>
            <p><strong>Lahore:</strong> PKR 120,000 - 180,000/month</p>
            <p><strong>Islamabad:</strong> PKR 140,000 - 200,000/month</p>
            <p><strong>Average:</strong> PKR 162,000/month</p>

            <p><strong>Winner:</strong> Azure (8% higher average salary)</p>

            <h2>Senior-Level Salaries (5+ years experience)</h2>

            <h3>AWS Cloud Architect / DevOps Lead:</h3>
            <p><strong>Karachi:</strong> PKR 220,000 - 380,000/month</p>
            <p><strong>Lahore:</strong> PKR 200,000 - 350,000/month</p>
            <p><strong>Islamabad:</strong> PKR 240,000 - 400,000/month</p>
            <p><strong>Average:</strong> PKR 298,000/month</p>

            <h3>Azure Cloud Architect / DevOps Lead:</h3>
            <p><strong>Karachi:</strong> PKR 240,000 - 400,000/month</p>
            <p><strong>Lahore:</strong> PKR 220,000 - 370,000/month</p>
            <p><strong>Islamabad:</strong> PKR 260,000 - 420,000/month</p>
            <p><strong>Average:</strong> PKR 318,000/month</p>

            <p><strong>Winner:</strong> Azure (7% higher average salary)</p>

            <h2>Why Does Azure Pay Slightly More?</h2>

            <h3>1. Enterprise Sector Dominance:</h3>
            <p>Banks, telecom companies, and large corporations in Pakistan predominantly use Azure due to its Microsoft integration. These enterprises typically pay higher salaries.</p>

            <h3>2. Less Competition:</h3>
            <p>Fewer Azure professionals means higher demand and better negotiating power for those who have the skills.</p>

            <h3>3. Microsoft Partner Ecosystem:</h3>
            <p>Many Pakistani IT companies are Microsoft Gold Partners, creating consistent demand for Azure expertise.</p>

            <h2>But AWS Has More Job Openings</h2>
            <p>While Azure pays slightly more, AWS has significantly more job postings:</p>
            <ul>
                <li><strong>AWS Jobs:</strong> ~450 openings (LinkedIn Pakistan, November 2025)</li>
                <li><strong>Azure Jobs:</strong> ~320 openings (LinkedIn Pakistan, November 2025)</li>
            </ul>

            <p>AWS has 40% more job opportunities, making it easier to find employment quickly.</p>

            <h2>Industry Breakdown</h2>

            <h3>Startups & Tech Companies → AWS</h3>
            <ul>
                <li>Careem, Bykea, Zameen.com</li>
                <li>Most SaaS companies</li>
                <li>Digital agencies</li>
            </ul>

            <h3>Banks & Enterprises → Azure</h3>
            <ul>
                <li>All major Pakistani banks</li>
                <li>Telecom companies (Jazz, Telenor, Zong)</li>
                <li>Government contracts</li>
            </ul>

            <h3>Hybrid (Both AWS & Azure):</h3>
            <ul>
                <li>Systems Limited, NetSol, Arbisoft</li>
                <li>Large IT services companies</li>
            </ul>

            <h2>Remote International Work</h2>

            <h3>AWS Remote Roles:</h3>
            <p><strong>Entry-Level:</strong> $1,000 - $1,800/month</p>
            <p><strong>Mid-Level:</strong> $2,500 - $4,500/month</p>
            <p><strong>Senior:</strong> $5,000 - $9,000/month</p>

            <h3>Azure Remote Roles:</h3>
            <p><strong>Entry-Level:</strong> $900 - $1,600/month</p>
            <p><strong>Mid-Level:</strong> $2,300 - $4,200/month</p>
            <p><strong>Senior:</strong> $4,800 - $8,500/month</p>

            <p>For international remote work, AWS has a slight edge with more opportunities and marginally better pay.</p>

            <h2>The Verdict: Which Should You Choose?</h2>

            <h3>Choose AWS if:</h3>
            <ul>
                <li>You want more job opportunities</li>
                <li>You're interested in startups and tech companies</li>
                <li>You prefer working with cutting-edge technologies</li>
                <li>You want remote international opportunities</li>
            </ul>

            <h3>Choose Azure if:</h3>
            <ul>
                <li>You want slightly higher salaries locally</li>
                <li>You prefer enterprise/corporate environments</li>
                <li>You have Windows/Microsoft background</li>
                <li>You want to work in banking or telecom sectors</li>
            </ul>

            <h3>Best Strategy: Get Both!</h3>
            <p>Many successful cloud professionals start with one platform, then add the second certification within 12-18 months. This makes you highly versatile and can increase your salary by 30-50%.</p>

            <h2>Multi-Certification Salaries</h2>
            <p>Professionals with both AWS and Azure certifications earn significantly more:</p>
            <ul>
                <li><strong>Entry-Level (Both):</strong> PKR 95,000 - 125,000/month</li>
                <li><strong>Mid-Level (Both):</strong> PKR 180,000 - 250,000/month</li>
                <li><strong>Senior (Both):</strong> PKR 350,000 - 500,000/month</li>
            </ul>

            <blockquote>
                "I started with AWS certification and got a job at PKR 80,000/month. After 1 year, I added Azure certification through CertifyMe.pk. Within 2 months, I switched to a new role paying PKR 165,000/month - more than double my starting salary!" - Zainab T., Multi-Cloud Engineer
            </blockquote>

            <h2>Final Recommendation</h2>
            <p>Start with whichever platform aligns with your target industry. AWS for tech startups, Azure for enterprises. Once you have 12-18 months of experience, add the second certification to maximize your earning potential.</p>

            <p>Either way, both platforms offer excellent career opportunities in Pakistan's booming cloud market. The key is to get started, get certified, and gain hands-on experience.</p>
        `
    }
];

// State
let currentTestimonial = 0;
let testimonialInterval;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderCertifications();
    renderTestimonials();
    renderFAQs();
    renderSuccessStories();
    renderBlogPosts();
    initNavigation();
    initStatCounters();
    initTestimonialCarousel();
    initContactForm();
    initSmoothScroll();
});

// Navigation
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');

    // Hamburger menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when link clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Render Certifications
function renderCertifications() {
    const grid = document.getElementById('certificationsGrid');
    const displayCerts = certifications.slice(0, 6);
    
    grid.innerHTML = displayCerts.map((cert, idx) => {
        const actualIndex = certifications.indexOf(cert);
        return `
        <div class="certification-card" onclick="showCertificationModal(${actualIndex})" style="cursor: pointer;">
            <img src="${cert.icon}" alt="${cert.name}" class="cert-icon">
            <div class="cert-vendor">${cert.vendor}</div>
            <h3 class="cert-name">${cert.name}</h3>
            <div class="cert-meta">
                <div class="cert-meta-item">
                    <span>💰</span>
                    <span>${cert.price}</span>
                </div>
                <div class="cert-meta-item">
                    <span>⏱️</span>
                    <span>${cert.duration}</span>
                </div>
            </div>
            <span class="difficulty-badge difficulty-${cert.difficulty.toLowerCase()}">${cert.difficulty}</span>
        </div>
    `}).join('');
}

// Show All Certifications
function showAllCertifications(event) {
    event.preventDefault();
    const grid = document.getElementById('certificationsGrid');
    
    grid.innerHTML = certifications.map((cert, index) => `
        <div class="certification-card" onclick="showCertificationModal(${index})" style="cursor: pointer;">
            <img src="${cert.icon}" alt="${cert.name}" class="cert-icon">
            <div class="cert-vendor">${cert.vendor}</div>
            <h3 class="cert-name">${cert.name}</h3>
            <div class="cert-meta">
                <div class="cert-meta-item">
                    <span>💰</span>
                    <span>${cert.price}</span>
                </div>
                <div class="cert-meta-item">
                    <span>⏱️</span>
                    <span>${cert.duration}</span>
                </div>
            </div>
            <span class="difficulty-badge difficulty-${cert.difficulty.toLowerCase()}">${cert.difficulty}</span>
        </div>
    `).join('');
    
    event.target.style.display = 'none';
}

// Certification Modal
function showCertificationModal(index) {
    try {
        const cert = certifications[index];
        const modal = document.getElementById('certificationModal');
        const modalBody = document.getElementById('modalBody');
        
        if (!modal || !modalBody || !cert) return;
        
        modalBody.innerHTML = `
        <div class="modal-header">
            <img src="${cert.icon}" alt="${cert.name}" class="modal-icon">
            <h2 class="modal-title">${cert.name}</h2>
            <p class="modal-vendor">${cert.vendor}</p>
        </div>
        
        <div class="modal-tabs">
            <button class="tab-btn active" onclick="switchTab(event, 'overview')">Overview</button>
            <button class="tab-btn" onclick="switchTab(event, 'curriculum')">Curriculum</button>
            <button class="tab-btn" onclick="switchTab(event, 'pricing')">Pricing</button>
            <button class="tab-btn" onclick="switchTab(event, 'schedule')">Schedule</button>
        </div>
        
        <div id="overview" class="tab-content active">
            <h3>About This Certification</h3>
            <p>${cert.description}</p>
            
            <h4 style="margin-top: 25px;">Prerequisites</h4>
            <p>${cert.prerequisites}</p>
            
            <h4 style="margin-top: 25px;">Who Should Take This?</h4>
            <p>${cert.who_should_take}</p>
            
            <h4 style="margin-top: 25px;">Career Outcomes</h4>
            <p>${cert.career_outcomes}</p>
        </div>
        
        <div id="curriculum" class="tab-content">
            <h3>Course Curriculum</h3>
            <ul class="curriculum-list">
                ${cert.topics.map(topic => `<li class="curriculum-item">${topic}</li>`).join('')}
            </ul>
        </div>
        
        <div id="pricing" class="tab-content">
            <h3>Investment Details</h3>
            <div class="pricing-table">
                <div class="pricing-row">
                    <span>Training Course</span>
                    <strong>${cert.price}</strong>
                </div>
                <div class="pricing-row">
                    <span>Official Exam Fee</span>
                    <strong>${cert.exam_fee}</strong>
                </div>
                <div class="pricing-row">
                    <span>Duration</span>
                    <strong>${cert.duration}</strong>
                </div>
            </div>
            <p style="margin-top: 20px; color: var(--text-gray);">💡 Installment plans available for courses above PKR 30,000</p>
        </div>
        
        <div id="schedule" class="tab-content">
            <h3>Upcoming Batches</h3>
            <div class="schedule-list">
                ${cert.next_batches.map(batch => `
                    <div class="schedule-item">
                        <span>📅 ${batch}</span>
                        <a href="#contact" class="btn btn-primary" onclick="closeModal()">Reserve Seat</a>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="sticky-enroll">
            <a href="#contact" class="btn btn-primary btn-large" onclick="closeModal()">Enroll Now</a>
        </div>
    `;
        
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    } catch(error) {
        console.error('Error in showCertificationModal:', error);
    }
}

function closeModal() {
    const modal = document.getElementById('certificationModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

function switchTab(event, tabId) {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    event.target.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

// Testimonials
function renderTestimonials() {
    const wrapper = document.getElementById('testimonialsWrapper');
    const dots = document.getElementById('carouselDots');
    
    wrapper.innerHTML = testimonials.map((testimonial, index) => `
        <div class="testimonial-card ${index === 0 ? 'active' : ''}">
            <img src="${testimonial.photo}" alt="${testimonial.name}" class="testimonial-photo">
            <h3 class="testimonial-name">${testimonial.name}</h3>
            <p class="testimonial-role">${testimonial.role}</p>
            <p class="testimonial-quote">"${testimonial.quote}"</p>
            <div class="testimonial-rating">${'⭐'.repeat(testimonial.rating)}</div>
        </div>
    `).join('');
    
    dots.innerHTML = testimonials.map((_, index) => `
        <div class="carousel-dot ${index === 0 ? 'active' : ''}" onclick="goToTestimonial(${index})"></div>
    `).join('');
}

function initTestimonialCarousel() {
    testimonialInterval = setInterval(() => {
        moveCarousel(1);
    }, 5000);
}

function moveCarousel(direction) {
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.carousel-dot');
    
    cards[currentTestimonial].classList.remove('active');
    dots[currentTestimonial].classList.remove('active');
    
    currentTestimonial = (currentTestimonial + direction + testimonials.length) % testimonials.length;
    
    cards[currentTestimonial].classList.add('active');
    dots[currentTestimonial].classList.add('active');
    
    clearInterval(testimonialInterval);
    initTestimonialCarousel();
}

function goToTestimonial(index) {
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.carousel-dot');
    
    cards[currentTestimonial].classList.remove('active');
    dots[currentTestimonial].classList.remove('active');
    
    currentTestimonial = index;
    
    cards[currentTestimonial].classList.add('active');
    dots[currentTestimonial].classList.add('active');
    
    clearInterval(testimonialInterval);
    initTestimonialCarousel();
}

// Statistics Counter
function initStatCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    const options = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    statNumbers.forEach(stat => observer.observe(stat));
}

function animateCounter(element) {
    const target = parseFloat(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target % 1 === 0 ? target + '+' : target.toFixed(1) + '/5';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// FAQs
function renderFAQs() {
    const accordion = document.getElementById('faqAccordion');
    
    accordion.innerHTML = faqs.map((faq, index) => `
        <div class="faq-item">
            <div class="faq-question" onclick="toggleFAQ(${index})">
                <span>${faq.question}</span>
                <span class="faq-icon">▼</span>
            </div>
            <div class="faq-answer">
                <div class="faq-answer-content">${faq.answer}</div>
            </div>
        </div>
    `).join('');
}

function toggleFAQ(index) {
    const items = document.querySelectorAll('.faq-item');
    const item = items[index];
    
    item.classList.toggle('active');
}

// Success Stories
function renderSuccessStories() {
    const grid = document.getElementById('successStoriesGrid');
    
    grid.innerHTML = successStories.map((story, index) => `
        <div class="success-story-card" onclick="showSuccessStoryModal(${index})">
            <img src="${story.image}" alt="${story.name}" class="success-story-image">
            <div class="success-story-content">
                <h3 class="success-story-name">${story.name}</h3>
                <p class="success-story-transition">${story.before} → ${story.after}</p>
                <div class="success-story-highlight">
                    <strong>${story.salary_increase}</strong>
                    <span>Salary Increase</span>
                </div>
                <span class="success-cert">${story.certification}</span>
            </div>
        </div>
    `).join('');
}

function showSuccessStoryModal(index) {
    const story = successStories[index];
    const modal = document.getElementById('successStoryModal');
    const modalBody = document.getElementById('successModalBody');
    
    modalBody.innerHTML = `
        <img src="${story.image}" alt="${story.name}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 15px; margin-bottom: 30px;">
        <h2 style="font-size: 32px; margin-bottom: 15px;">${story.name}</h2>
        <div style="display: flex; justify-content: center; gap: 30px; margin-bottom: 30px; flex-wrap: wrap;">
            <div style="text-align: center;">
                <strong style="display: block; font-size: 18px; color: var(--primary-blue);">Before</strong>
                <p style="margin: 5px 0;">${story.before}</p>
            </div>
            <div style="font-size: 32px; color: var(--growth-green);">→</div>
            <div style="text-align: center;">
                <strong style="display: block; font-size: 18px; color: var(--primary-blue);">After</strong>
                <p style="margin: 5px 0;">${story.after}</p>
            </div>
        </div>
        <div style="background: linear-gradient(135deg, var(--primary-blue) 0%, var(--growth-green) 100%); color: white; padding: 30px; border-radius: 15px; text-align: center; margin-bottom: 30px;">
            <h3 style="font-size: 48px; margin-bottom: 10px;">${story.salary_increase}</h3>
            <p style="font-size: 18px; margin: 0;">Salary Increase</p>
        </div>
        <div style="background: var(--light-gray); padding: 25px; border-radius: 15px; margin-bottom: 30px;">
            <strong style="display: block; margin-bottom: 10px; color: var(--primary-blue);">Certification Achieved:</strong>
            <p style="margin: 0; font-size: 18px;">${story.certification}</p>
        </div>
        <p style="font-size: 18px; line-height: 1.8; color: var(--dark-charcoal);">${story.story}</p>
        <div style="text-align: center; margin-top: 40px;">
            <a href="#contact" class="btn btn-primary btn-large" onclick="closeSuccessModal()">Start Your Journey</a>
        </div>
    `;
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeSuccessModal() {
    const modal = document.getElementById('successStoryModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

// Blog Posts
function renderBlogPosts() {
    const grid = document.getElementById('blogGrid');

    // Show only the first 3 posts
    const limitedPosts = blogPosts.slice(0, 3);

    grid.innerHTML = limitedPosts.map((post, index) => `
        <div class="blog-card" onclick="window.location.href='blog-page.php?id=${index}'" style="cursor: pointer;">
            <img src="${post.image}" alt="${post.title}" class="blog-image">
            <div class="blog-content">
                <span class="blog-category">${post.category}</span>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="blog-meta">
                    <span>📅 ${post.date}</span>
                </div>
            </div>
        </div>
    `).join('');
}


// Contact Form
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            const formData = new FormData(form);
            fetch('submit_contact.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    form.style.display = 'none';
                    document.getElementById('formSuccess').classList.add('show');
                    setTimeout(() => {
                        form.reset();
                        form.style.display = 'block';
                        document.getElementById('formSuccess').classList.remove('show');
                    }, 3000);
                } else {
                    alert(data.msg);
                }
            })
            .catch(() => {
                alert('Error submitting form. Please try again.');
            });
        }
    });
}

function validateForm() {
    let isValid = true;
    
    // Name validation
    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (name.value.trim().length < 3) {
        nameError.textContent = 'Name must be at least 3 characters';
        isValid = false;
    } else {
        nameError.textContent = '';
    }
    
    // Email validation
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        emailError.textContent = 'Please enter a valid email address';
        isValid = false;
    } else {
        emailError.textContent = '';
    }
    
    // Phone validation
    const phone = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');
    const phoneRegex = /^[0-9+\-\s()]{10,}$/;
    if (!phoneRegex.test(phone.value)) {
        phoneError.textContent = 'Please enter a valid phone number';
        isValid = false;
    } else {
        phoneError.textContent = '';
    }
    
    // Message validation
    const message = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    if (message.value.trim().length < 10) {
        messageError.textContent = 'Message must be at least 10 characters';
        isValid = false;
    } else {
        messageError.textContent = '';
    }
    
    return isValid;
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#certifications-page') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offset = 80;
                    const targetPosition = target.offsetTop - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Close modals when clicking outside
window.addEventListener('click', function(e) {
    const certModal = document.getElementById('certificationModal');
    const successModal = document.getElementById('successStoryModal');
    
    if (e.target === certModal) {
        closeModal();
    }
    if (e.target === successModal) {
        closeSuccessModal();
    }
});