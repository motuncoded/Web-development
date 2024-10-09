# Day 30: Build and Deploy a Web Page

The final step in your journey of learning HTML is to build and deploy a complete web page. Today, we’ll cover how to organize your project files, create a simple website, and deploy it to the web using platforms like GitHub Pages, Netlify, or Vercel.

## 1. Building Your Web Page

### a. Project Structure
Start by organizing your project folder. A typical folder structure for a simple web page might look like this:

```bash
Copy code
/my-website
  /images
    - logo.png
  /css
    - styles.css
  /js
    - script.js
```

index.html
### b. HTML Structure (index.html)
Here’s a basic HTML page that combines what you’ve learned:

```html
Copy code
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="A simple website to showcase my HTML skills."
    />
    <title>My Website</title>
    <link rel="stylesheet" href="css/styles.css" />
  </head>
  <body>
    <header>
      <img src="images/logo.png" alt="My Website Logo" />
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section id="home">
        <h1>Welcome to My Website</h1>
        <p>This is a sample website built using HTML, CSS, and JavaScript.</p>
      </section>

      <section id="about">
        <h2>About Me</h2>
        <p>
          I’m a web developer learning HTML and building interactive websites.
        </p>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <form action="#" method="post">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <button type="submit">Submit</button>
        </form>
      </section>
    </main>

    <footer>
      <p>&copy; 2024 My Website</p>
    </footer>

    <script src="js/script.js"></script>
  </body>
</html>
```

### c. Styling (styles.css)

```css
Copy code
/* Basic styling for the website */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

header {
  background-color: #333;
  color: #fff;
  padding: 10px 0;
  text-align: center;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  display: inline;
  margin: 0 15px;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
}

footer {
  text-align: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
}

h1,
h2 {
  color: #333;
}
```

### d. JavaScript (script.js)

```javascript
Copy code
// Example of basic interactivity
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thank you for submitting your email!');
});
```

## 2. Deploying Your Web Page

There are several platforms where you can deploy your website for free. Below are three popular options:

### a. GitHub Pages

GitHub Pages allows you to host static websites directly from your GitHub repository.

Steps:
Create a GitHub Repository: Push your project to a GitHub repository.
Enable GitHub Pages:
Go to the repository’s settings.
Scroll down to the "GitHub Pages" section.
Select the branch where your HTML file is (usually the main branch) and save.
Access your site: Your website will be live at https://username.github.io/repository-name/.

### b. Netlify

Netlify is a popular platform for deploying static websites with ease. It also supports continuous integration with GitHub.

Steps:
Sign up: Create an account on Netlify.
Deploy from GitHub:
Connect your GitHub repository to Netlify.
Follow the setup wizard to deploy your website.
Custom Domain: Netlify allows you to set up a custom domain or use their default subdomain.

### c. Vercel

Vercel is another powerful platform for hosting websites. It’s especially popular for frontend projects.

Steps:
Sign up: Create an account on Vercel.
Deploy from GitHub:
Connect your GitHub repository to Vercel.
Vercel will automatically build and deploy your project.
Custom Domain: You can add your custom domain or use Vercel’s default subdomain.

## 3. Best Practices for Deployment

- Test locally: Before deploying, make sure your website works as expected on your local machine.
- Optimize images: Compress and optimize your images for faster load times.
- Use responsive design: Ensure your website is mobile-friendly by using responsive design techniques like media queries.
- Meta tags: Include meta tags for SEO and social sharing.
  Keep your code clean: Comment and format your HTML, CSS, and JavaScript code properly.

## 4. Conclusion

By building and deploying your first web page, you’ve now completed the core aspects of HTML development! You can now experiment with more advanced features, continue learning JavaScript, or explore frameworks like React.
