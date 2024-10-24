### **Day 26: Squash Commits for a Clean History**

- **Objective**: Learn the practice of squashing commits to condense multiple related commits into a single commit. This helps maintain a clean and understandable commit history, making it easier for collaborators to follow the evolution of the project.

- **Task**: Use the `git rebase` command with the `-i` (interactive) option to squash commits on your branch before merging into the main branch. This practice is particularly useful for grouping related changes and removing unnecessary or trivial commits.

- **Why it Matters**: A clean commit history enhances the readability of the project’s development timeline. Squashing commits allows you to highlight significant changes while discarding minor or redundant commits that may clutter the history. This is especially beneficial in collaborative projects, as it helps future contributors understand the purpose and scope of changes more easily.

- **When to Use**:
  - When finalizing a feature branch with several incremental commits before merging into the main branch.
  - When you want to group related commits that address a specific feature or bug fix into a single commit.
  - When your commit history contains too many small or insignificant commits that can be consolidated for clarity.

- **Best Practices**:
  - Review your commit history before squashing to ensure you group related changes together.
  - Use clear and descriptive commit messages when creating the squashed commit, summarizing the changes made.
  - Test your code after squashing to ensure that no functionality is broken during the process.
  - Be cautious when squashing commits on shared branches, as this can rewrite history and affect other collaborators.

- **Example Commands**:
  1. Start an interactive rebase:
     ```bash
     git rebase -i HEAD~N
     ```
     (Replace `N` with the number of commits you want to squash.)

  2. In the interactive editor, change `pick` to `squash` (or `s`) for the commits you want to squash into the previous commit.

  3. Save and close the editor. You will then be prompted to edit the commit message for the squashed commit. Provide a clear, consolidated message.

  4. Complete the rebase:
     ```bash
     git push --force
     ```

By squashing commits, you can significantly improve the clarity of your commit history. This practice not only benefits your current team but also aids future contributors in understanding the project’s evolution, making it easier to navigate and maintain the codebase over time. A well-organized history fosters better collaboration and enhances the overall quality of the project.