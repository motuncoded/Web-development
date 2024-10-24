### **Day 28: Use Verbose Messages for Reverts**

- **Objective**: Learn the importance of using detailed commit messages when reverting changes in a codebase. A well-explained revert message helps clarify the reasons for the rollback and provides context for future reference.

- **Task**: When performing a revert using Git, write a verbose commit message that explains what change is being reverted and why. This practice ensures that team members understand the context behind the decision to undo a previous commit.

- **Why it Matters**: Reverting changes can happen for various reasons, such as introducing bugs, performance issues, or regressions. Providing a clear explanation in the commit message helps prevent confusion and ensures that everyone on the team understands the rationale behind the revert. This documentation is valuable for future contributors who may encounter the revert in the commit history.

- **When to Use**:
  - Whenever you need to revert a commit due to bugs or issues introduced by that change.
  - When the functionality added in the previous commit is not working as intended or needs to be temporarily removed.
  - When you want to clearly communicate the decision to undo a change to the rest of the team.

- **Best Practices**:
  - Include the commit hash of the reverted commit in your message for easy reference.
  - Explain why the revert was necessary, detailing any issues caused by the original commit.
  - Mention any related discussions or decisions that led to the revert, if applicable.

- **Example**:
  Instead of a vague revert message, such as:
  ```bash
  Revert "Added user profile feature"
  ```

  Use a more descriptive message:
  ```bash
  revert: undo "Added user profile feature" due to breaking change
  ```

  **Body Example**:
  - Reverted commit abc1234, which introduced the user profile feature.
  - The addition caused issues with the existing user dashboard functionality, resulting in broken links and unexpected behavior.
  - This revert allows us to investigate and fix the underlying issues before reintroducing the feature.

Using verbose commit messages for reverts helps maintain clarity in the project’s history, making it easier for the team to understand past decisions. This practice not only enhances communication within the team but also aids in troubleshooting future issues by providing context about what was reverted and why. A well-documented history fosters better collaboration and contributes to the overall quality of the codebase.