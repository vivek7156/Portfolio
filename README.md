# Portfolio Website

This is a personal portfolio website for Vivek Singh, a Full-stack developer. The website showcases projects, skills, and contact information.

## Demo

You can view the live demo of the portfolio website https://viveksingh-portfolio.vercel.app.

## Features

- Responsive design
- Smooth scrolling and animations
- Project showcase with detailed descriptions
- Contact form with email integration
- Social media links

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/vivek7156/portfolio-website.git
    cd portfolio-website
    ```

2. **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the root directory and add the necessary environment variables.

4. **Run the development server**:
    ```bash
    npm run dev
    # or
    yarn run dev
    ```

5. **Open your browser**:
    Navigate to `http://localhost:3000` to view the website.

## Project Structure
```
portfolio-website/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── public/
├── README.md
├── src/
│   ├── App.jsx
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Button.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── FooterText.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Skill.jsx
│   │   ├── SkillCard.jsx
│   │   ├── SocialLinks.jsx
│   │   ├── ui/
│   │   │   └── 3d-card.jsx
│   │   └── Work.jsx
│   ├── data/
│   │   └── index.js
│   ├── index.css
│   ├── lib/
│   │   └── utils.js
│   ├── main.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ProjectPage.jsx
│   │   └── Projects.jsx
├── tailwind.config.js
└── vite.config.js
```
