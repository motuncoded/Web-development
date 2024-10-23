### **Day 14: Prefix with Fix for Bug Fixes**

- **Objective**: Understand the importance of prefixing commit messages with "fix" when addressing bugs in your codebase. This practice enhances clarity and consistency in documenting the history of changes.

- **Task**: Practice writing commit messages for bug fixes using the "fix" prefix in line with the Conventional Commits specification.

- **Why Use "fix"?**
  1. **Clarity**: Prefixing with "fix" clearly indicates that the commit resolves a bug, making it easy for team members to understand the purpose of the change.
  2. **Organized History**: It helps in creating a well-organized commit history, which is useful for tracking bugs and understanding the evolution of the codebase.
  3. **Facilitates Collaboration**: Using standardized prefixes promotes better communication among developers regarding the nature of changes.

- **Structure of a "fix" Commit Message**:
  ```
  fix(<scope>): <description>
  ```

- **Examples of "fix" Commit Messages**:
  - ```
    fix(auth): resolve login failure for users with special characters
    ```
  - ```
    fix(cart): correct calculation of total price in the shopping cart
    ```

- **Practice**: Rewrite the following commit messages to include the "fix" prefix where applicable:
  1. `"Correct the typo in the email validation logic."`
  2. `"Fix issue with the date formatting in reports."`
  3. `"Change background color of the header."` (Note: This is a style change, not a bug fix)

- **Example Rewrites**:
  1. ```
     fix(validation): correct the typo in the email validation logic
     ```

  2. ```
     fix(report): fix issue with the date formatting in reports
     ```

  3. ```
     style(header): change background color of the header
     ```

---

This structured approach will help reinforce the practice of prefixing commit messages with "fix" when addressing bugs. Let me know if you need any further adjustments!