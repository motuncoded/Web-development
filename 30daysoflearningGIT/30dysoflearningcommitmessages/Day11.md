### **Day 11: One Change Per Commit**

- **Objective**: Understand the importance of making one logical change per commit. This practice promotes clarity, easier debugging, and better collaboration within a team.

- **Task**: Learn to isolate changes to a single purpose in each commit, making your commit history cleaner and more understandable.

- **Why Make One Change Per Commit?**
  1. **Clarity**: Each commit represents a distinct change, making it easier to understand the history of modifications in the codebase.
  2. **Easier Debugging**: When issues arise, pinpointing the source of a bug is simpler if each commit addresses only one change. This isolation allows developers to revert specific changes without affecting unrelated functionality.
  3. **Better Collaboration**: In team environments, commits that focus on single changes reduce confusion and make it easier for team members to review, understand, and integrate each other’s work.

- **Examples of Poorly Structured Commits**:
  - ```
    Update user profile and fix bug in authentication
    ```
  - ```
    Add new search feature, update styles, and refactor components
    ```

- **Examples of Well-Structured Commits**:
  1. ```
     Add user profile feature

     This commit introduces the ability for users to create and
     manage their profiles within the application.
     ```
  
  2. ```
     Fix bug in authentication process

     This commit resolves an issue where users could not log in
     if they had previously logged out without clearing their session.
     ```

- **Best Practices**:
  - Break down large features or tasks into smaller, manageable pieces that can be committed separately.
  - Ensure each commit has a clear purpose and is limited to that single change.
  - Use descriptive commit messages that clearly indicate the change being made.

- **Practice**: Review the following hypothetical commits and rewrite them to reflect a single change per commit:
  1. `"Add user settings page and improve UI design."`
  2. `"Update homepage content and fix footer links."`
  3. `"Refactor database queries and optimize API responses."`

- **Example Rewrites**:
  1. ```
     Add user settings page

     This commit introduces a new settings page that allows users
     to update their preferences and account information.
     ```

     ```
     Improve UI design

     This commit enhances the user interface for better usability,
     focusing on color scheme and layout adjustments across the app.
     ```

  2. ```
     Update homepage content

     This commit refreshes the content on the homepage to reflect
     the latest promotions and features of the product.
     ```

     ```
     Fix footer links

     This commit resolves broken links in the footer, ensuring
     all links direct users to the correct pages.
     ```

  3. ```
     Refactor database queries

     This commit refactors the database queries for improved readability
     and maintainability.
     ```

     ```
     Optimize API responses

     This commit optimizes the structure of API responses to reduce
     payload size and improve response times.
     ```

---

This structured approach will help reinforce the practice of making one logical change per commit. Let me know if you need any further adjustments!