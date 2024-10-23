### **Day 23: Use WIP for Work-in-Progress Commits**

- **Objective**: Indicate that a commit is a work in progress and not yet ready for production or final review. This practice helps communicate to your team that the changes are still being developed and may not represent complete or stable functionality.

- **Task**: Use the `WIP` prefix in your commit messages to mark commits that are still in progress. This signals to other developers that the changes are not finalized and are subject to further modifications.

- **Why it Matters**: By using the `WIP` prefix, you can prevent misunderstandings about the state of your code. It helps avoid premature reviews, merges, or deployments of incomplete features or fixes. This practice fosters better collaboration within teams, allowing members to focus on completed work while being aware of ongoing tasks.

- **When to Use**:
  - When committing changes that are not fully functional or complete.
  - When you want to share your current progress with the team, such as when pairing on a task.
  - When you need to save your work temporarily but plan to make additional changes before finalizing.

- **Best Practices**:
  - Use `WIP` in the subject line followed by a brief description of the work.
  - Include a commit body that explains what is incomplete and what still needs to be done.
  - Remove the `WIP` prefix in subsequent commits when the work is finalized and ready for review or merge.

- **Example**:
  ```bash
  WIP: start implementing user authentication flow
  ```

  **Body Example**:
  - Began the implementation of the user authentication flow.
  - Currently working on integrating the login API and handling errors.
  - Still need to add tests and finalize error handling.

Using `WIP` in your commit messages helps manage expectations and communicates the status of your work clearly. It allows your team to stay informed about ongoing tasks and helps maintain a clean project history by indicating which commits are still subject to change. This practice can be particularly valuable in collaborative environments where multiple developers are working on the same codebase.