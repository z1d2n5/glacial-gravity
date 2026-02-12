# Data Analyst & Web Developer Portfolio

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. Designed to highlight skills in both Data Analysis and Web Development.

## 🚀 Features

- **Modern Design**: Clean, minimal, and professional aesthetic.
- **Dark Mode**: Fully supported with a toggle switch.
- **Responsive**: Perfection on all devices (Mobile, Tablet, Desktop).
- **Animations**: Smooth entrance animations using Framer Motion.
- **Project Filtering**: Filter projects by technology/category.
- **Contact Form**: Functional UI with validation states.

## 🛠️ Tech Stack

- **React** (Vite)
- **Tailwind CSS** (Styling)
- **Framer Motion** (Animations)
- **Lucide React** (Icons)
- **React Scroll** (Smooth scrolling)

## 📦 Installation & Setup

Since this project was generated without a local Node.js environment, follow these steps to get started:

1.  **Install Node.js**: Ensure you have Node.js installed on your machine. [Download here](https://nodejs.org/).
2.  **Open Terminal**: Navigate to the project folder.
3.  **Install Dependencies**:
    ```bash
    npm install
    ```
4.  **Start Development Server**:
    ```bash
    npm run dev
    ```
5.  **Build for Production**:
    ```bash
    npm run build
    ```

## 🎨 Customization

### Updating Data
- **Skills**: Edit `src/data/skills.js` to update your technical skills and proficiency levels.
- **Projects**: Edit `src/data/projects.js` to add your own projects, links, and images.

### Personal Info
- **Hero Section**: Update your name, title, and bio in `src/components/Hero.jsx`.
- **Contact Info**: Update email, phone, and location in `src/components/Contact.jsx`.

### Colors & Theme
- **Tailwind Config**: You can customize the color palette in `tailwind.config.js` under `theme.extend.colors`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔄 Integration into an Existing Project

If you want to add this portfolio to an existing React application:

1.  **Copy Folders**: Copy the `src/components` and `src/data` folders into your project's `src` directory.
2.  **Install Dependencies**:
    ```bash
    npm install framer-motion lucide-react react-scroll clsx tailwind-merge
    ```
    *Ensure Tailwind CSS is already set up in your project.*
3.  **Update Tailwind Config**: Copy the `theme.extend` section from this project's `tailwind.config.js` to your configuration to preserve the colors.
4.  **Import Components**: Import and use the components in your desired page or route.
    ```jsx
    import Navbar from './components/Navbar';
    import Hero from './components/Hero';
    // ... import other components
    ```

