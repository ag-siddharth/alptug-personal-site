# Alptug Guven - Personal Homepage (Project 1)

**Author:** Alptug Guven  
**Course:** CS 5610: Web Development (Online) - Spring 2026  
**License:** MIT License
**Live Website:** (https://alptugguven24-ctrl.github.io/alptug-personal-site/)

## 🎯 Project Objective
The objective of this project is to build a responsive, interactive personal homepage using vanilla HTML5, CSS3, and ES6+ JavaScript. The site demonstrates semantic web architecture, an original CSS Grid layout, and component separation without the use of libraries like Bootstrap or jQuery. 

## 📸 Screenshot
![Homepage Screenshot](./images/homepage-screenshot.png)

## 🛠️ Instructions to Build/Run
This is a front-end only static site. To run it locally:
1. Clone or download the repository.
2. Open the project folder in Visual Studio Code.
3. Use the **Live Server** extension to open `index.html`. 
4. Navigate through the site using the header links.

## 🔌 VS Code Extensions Used
To maintain high code quality and streamline development, the following VS Code extensions were utilized:
* **Live Server:** For real-time, local browser reloading during development.
* **Prettier - Code Formatter:** To ensure consistent code style and indentation.
* **ESLint:** For identifying and fixing semantic JavaScript errors.
* **JSON Formatter:** For structuring data and ensuring proper configurations in files like `package.json`.

---

## 🤖 GenAI Usage Disclosure
In accordance with the CS 5610 academic integrity and GenAI policy, the use of Generative AI tools in this project is disclosed below:

* **Tool Used:** Google Gemini (Version: Jan 2026)
* **Pages/Components:** `media.html` (HTML structure) and the hover-overlay CSS logic.
* **Prompt Used:** *"Create a responsive HTML grid layout for a 'Media Hub' page. Each item should be a card displaying a movie/show poster. Implement a 'hover-to-reveal' effect where a dark overlay with review text fades in when the mouse goes over the image. Use my existing CSS variables (--bg-midnight, --accent-sunflower) for styling."*
* **How it was used:** Gemini was used to brainstorm the grid layout and generate the specific CSS transition properties for the interactive movie cards. 
* **Validation:** I understand that LLMs do not truly "understand" their output and can act like a "clever parrot." Therefore, all generated code was manually reviewed, integrated into my existing ES6 module system, and validated through the W3C checker to ensure standard tag usage.

---

## ✨ Original Component
* **Dynamic Quiz Scoring (`main.js` & `quiz.html`):** An original JavaScript ES6 module that dynamically calculates compatibility scores based on the total number of questions, utilizing `FormData` loops to avoid hard-coded logic.
* **Interactive Media Grid (`media.html`):** A responsive grid system featuring hover-to-reveal overlays.

## 🚀 Future Work
While the current site meets all static requirements, future iterations will focus on dynamic data integration:
* **Last.fm API Integration:** I plan to replace the static music recommendations on the Media Hub page with a live fetch to the Last.fm API, displaying my real-time listening habits and "recently played" tracks dynamically.