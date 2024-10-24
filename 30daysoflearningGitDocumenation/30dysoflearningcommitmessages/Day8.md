### **Day 8: Include Why, Not Just What**

- **Objective**: Learn the importance of not only stating what changes have been made in a commit message but also explaining why those changes were necessary. This practice provides context that can be invaluable for future reference and for other developers.

- **Task**: Practice writing commit messages that include both the action taken (what) and the reasoning behind it (why). This will help improve the clarity and usability of your commit history.

- **Why Include the Reason?**
  1. **Context**: Providing the rationale behind changes helps others (and your future self) understand the thought process and intentions behind the decisions.
  2. **Documentation**: It serves as a form of documentation, making it easier to reference the motivation for changes when revisiting the codebase later.
  3. **Collaboration**: When working in teams, understanding the "why" fosters better communication and alignment among team members.

- **Structure of the Commit Message**:
  - **Subject Line**: Start with a clear summary of what was done.
  - **Description**: Follow with a brief explanation of why the change was made.

- **Examples of Good Commit Messages**:
  ```
  Refactor authentication code to improve readability

  The previous implementation was difficult to follow and maintain,
  making it challenging for new developers to understand. This change
  simplifies the logic and improves clarity.
  ```

  ```
  Add caching for API responses to enhance performance

  Caching reduces the load on the server and improves response time,
  especially for frequently requested data.
  ```

- **Practice**: Rewrite the following commit messages to include both what was changed and why:
  1. `"Update user interface for better usability"`
  2. `"Fix crash on login page"`
  3. `"Add logging for API requests"`

- **Example Rewrites**:
  1. ```
     Update user interface for better usability

     The previous design was cluttered and confusing for users, 
     leading to high bounce rates. The new design aims to enhance
     user experience and simplify navigation.
     ```

  2. ```
     Fix crash on login page

     The crash occurred due to an unhandled error during user 
     authentication. This fix ensures that errors are properly 
     managed and provides feedback to the user.
     ```

  3. ```
     Add logging for API requests

     Implementing logging will help us track issues with 
     API calls and monitor performance over time, making
     it easier to diagnose problems.
     ```

---

This structured approach will help reinforce the practice of including the reasoning behind changes in commit messages. Let me know if you need any further adjustments!