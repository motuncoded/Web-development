### Day 30: Final Project

#### **Objective:**
Put your knowledge of HTML and CSS into practice by creating a complete, responsive webpage layout that incorporates various elements and techniques learned throughout the course.

---

### **Project Requirements:**
Your final project will consist of a personal portfolio website that showcases your skills, projects, and contact information. Here are the key components you should include:

1. **Header:**
   - Include your name and a navigation menu with links to different sections of the website (e.g., About, Projects, Contact).

2. **Main Content:**
   - **About Section:** A brief introduction about yourself and your skills.
   - **Projects Section:** A showcase of at least three projects you’ve worked on, including images, descriptions, and links to live demos or GitHub repositories.
   - **Contact Section:** A form that allows users to send you messages (name, email, message).

3. **Sidebar (optional):**
   - Include links to your social media profiles or other relevant information.

4. **Footer:**
   - Include copyright information and any additional links you want to share.

5. **Responsive Design:**
   - Ensure the layout works well on both desktop and mobile devices. Use media queries to adjust styles as necessary.

### **Example Structure:**

Here's a basic structure for your portfolio website:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name - Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Your Name</h1>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="about">
            <h2>About Me</h2>
            <p>Brief introduction about yourself and your skills.</p>
        </section>

        <section id="projects">
            <h2>Projects</h2>
            <article>
                <h3>Project Title 1</h3>
                <img src="project1.jpg" alt="Project 1">
                <p>Description of the project.</p>
                <a href="https://github.com/yourusername/project1">View on GitHub</a>
            </article>
            <article>
                <h3>Project Title 2</h3>
                <img src="project2.jpg" alt="Project 2">
                <p>Description of the project.</p>
                <a href="https://github.com/yourusername/project2">View on GitHub</a>
            </article>
            <article>
                <h3>Project Title 3</h3>
                <img src="project3.jpg" alt="Project 3">
                <p>Description of the project.</p>
                <a href="https://github.com/yourusername/project3">View on GitHub</a>
            </article>
        </section>

        <section id="contact">
            <h2>Contact Me</h2>
            <form action="/submit" method="POST">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                
                <input type="submit" value="Send Message">
            </form>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Your Name. All rights reserved.</p>
    </footer>
</body>
</html>
```

### **CSS Styles (styles.css):**

Customize your CSS styles to create a cohesive design. Here’s a starting point:

```css
* {
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

header {
    background: #007bff;
    color: white;
    padding: 15px;
    text-align: center;
}

nav ul {
    list-style-type: none;
}

nav ul li {
    display: inline;
    margin: 0 10px;
}

main {
    padding: 20px;
}

section {
    margin: 20px 0;
}

footer {
    text-align: center;
    padding: 10px;
    background: #333;
    color: white;
}
```

### **Tips for Completing Your Project:**
- **Plan Your Content:** Outline the content for each section before you start coding to ensure a clear structure.
- **Use Responsive Techniques:** Implement media queries and flexible layouts to adapt your design to different screen sizes.
- **Test Your Website:** Check for accessibility, usability, and responsiveness across various devices and browsers.
- **Iterate and Improve:** After your initial design, take time to refine and improve the layout and styles.

### **Submission:**
Once you've completed your project, host it on a platform like GitHub Pages or Netlify and share the link for review.

---

### **Final Thoughts:**
Congratulations on reaching the end of this course! By completing this project, you’ve solidified your knowledge of HTML and CSS and are now equipped to create your own web pages. Keep building, experimenting, and learning as you continue your journey in web development!

If you have any questions or need further assistance, feel free to ask!