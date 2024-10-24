### 30 Days of Git Commit Messages

In this 30-day challenge, you'll learn how to write meaningful and structured Git commit messages to improve the clarity and quality of your codebase. Each day introduces a best practice or concept related to writing better commit messages.

---

### **Day 1: Why Commit Messages Matter**
- **Task**: Understand why clear commit messages are important for collaboration, future reference, and project maintenance.
- **Example**: `"Initial commit with project structure"`



---

### **Day 2: The Anatomy of a Commit Message**
- **Task**: Learn the standard format of a commit message: a short summary, an optional description, and a footer.
- **Example**:
  ```
  feat: add user login functionality

  - Implemented login form
  - Added validation and error handling
  ```

---

### **Day 3: Use Imperative Mood**
- **Task**: Write commit messages in the imperative mood, as if giving instructions.
- **Example**: `"Add validation for user input"`

---

### **Day 4: Limit the Subject Line to 50 Characters**
- **Task**: Practice writing concise subject lines with a character limit of 50.
- **Example**: `"Fix broken link in the footer"`

---

### **Day 5: Capitalize the Subject Line**
- **Task**: Always capitalize the first word of your commit message.
- **Example**: `"Update README with installation steps"`

---

### **Day 6: Skip the Period in the Subject Line**
- **Task**: Avoid ending the subject line with a period.
- **Example**: `"Refactor code to improve readability"`

---

### **Day 7: Use Present Tense**
- **Task**: Commit messages should be written in the present tense.
- **Example**: `"Remove deprecated API calls"`

---

### **Day 8: Include Why, Not Just What**
- **Task**: Provide context for why changes were made in the commit description.
- **Example**:
  ```
  fix: prevent form submission on invalid input

  This prevents users from submitting the form if fields are empty,
  ensuring data integrity.
  ```

---

### **Day 9: Separate Subject and Body with a Blank Line**
- **Task**: Use a blank line between the commit subject and the body.
- **Example**:
  ```
  feat: add dark mode support

  This feature allows users to switch to a dark theme, improving
  accessibility and user experience.
  ```

---

### **Day 10: Write Descriptive Bodies for Complex Changes**
- **Task**: Use the commit body to describe larger or more complex changes.
- **Example**:
  ```
  refactor: clean up dashboard components

  The dashboard was getting cluttered, so I broke it down into smaller
  reusable components to improve maintainability.
  ```

---

### **Day 11: One Change Per Commit**
- **Task**: Commit only one logical change per commit to keep history clean.
- **Example**: `"Add error handling to user registration flow"`

---

### **Day 12: Use the Conventional Commits Specification**
- **Task**: Follow the Conventional Commits standard (`feat`, `fix`, `chore`, etc.).
- **Example**: `"fix: correct navbar layout issue on mobile devices"`

---

### **Day 13: Prefix with Feat for New Features**
- **Task**: Use `feat:` prefix for new features.
- **Example**: `"feat: implement search functionality"`

---

### **Day 14: Prefix with Fix for Bug Fixes**
- **Task**: Use `fix:` prefix for bug fixes.
- **Example**: `"fix: resolve issue with image upload"`

---

### **Day 15: Prefix with Chore for Maintenance**
- **Task**: Use `chore:` prefix for general maintenance tasks that don’t modify the code's behavior.
- **Example**: `"chore: update dependencies"`

---

### **Day 16: Prefix with Refactor for Code Improvements**
- **Task**: Use `refactor:` when making changes to the code without altering its behavior.
- **Example**: `"refactor: optimize loop for performance"`

---

### **Day 17: Prefix with Test for Adding or Modifying Tests**
- **Task**: Use `test:` for changes related to testing.
- **Example**: `"test: add unit tests for user authentication module"`

---

### **Day 18: Prefix with Docs for Documentation Updates**
- **Task**: Use `docs:` when changing or adding documentation.
- **Example**: `"docs: update API documentation for new endpoints"`

---

### **Day 19: Prefix with Style for Formatting Changes**
- **Task**: Use `style:` for code style updates that don’t affect logic.
- **Example**: `"style: format code to match linter rules"`

---

### **Day 20: Prefix with Build for Build-Related Changes**
- **Task**: Use `build:` for changes to the build system or dependencies.
- **Example**: `"build: update webpack config for production mode"`

---

### **Day 21: Prefix with Perf for Performance Improvements**
- **Task**: Use `perf:` for performance optimizations.
- **Example**: `"perf: reduce memory usage in data processing"`

---

### **Day 22: Prefix with CI for Continuous Integration**
- **Task**: Use `ci:` for CI-related changes.
- **Example**: `"ci: configure GitHub Actions for automated testing"`

---

### **Day 23: Use WIP for Work-in-Progress Commits**
- **Task**: Use `WIP:` for incomplete or in-progress work, to be refined later.
- **Example**: `"WIP: implement initial draft of login form"`

---

### **Day 24: Use Verbose Commit Messages for Merges**
- **Task**: Write detailed messages when merging branches.
- **Example**: `"merge: merge feature/search into develop"`

---

### **Day 25: Rebase to Avoid Merge Commits**
- **Task**: Rebase your branches to avoid unnecessary merge commits and keep history linear.
- **Example**: `"rebase feature/dashboard onto develop"`

---

### **Day 26: Squash Commits for a Clean History**
- **Task**: Use `git rebase -i` to squash related commits into one for a cleaner history.
- **Example**: `"feat: complete user profile page"`

---

### **Day 27: Avoid “Fixes” or “Updates” in Isolation**
- **Task**: Avoid vague messages like "fixes" or "updates." Be specific.
- **Example**: `"fix: handle edge case in date parsing"`

---

### **Day 28: Use Verbose Messages for Reverts**
- **Task**: Be explicit about the reason when reverting commits.
- **Example**: `"revert: undo recent changes to login logic due to bug"`

---

### **Day 29: Write for Your Team**
- **Task**: Write commit messages with your team or future developers in mind.
- **Example**: `"chore: improve logging for easier debugging in production"`

---

### **Day 30: Final Project**
- **Task**: Go through a real project and revise or rewrite unclear commit messages. Use the principles you've learned in this challenge.