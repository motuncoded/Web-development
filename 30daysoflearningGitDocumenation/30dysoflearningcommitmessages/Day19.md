### **Day 19: Prefix with Style for Formatting Changes**

- **Objective**: Ensure that commits related to code formatting or stylistic changes are clearly identifiable. This helps differentiate formatting updates from functional changes, making it easier for the team to review the project's commit history and focus on important modifications.

- **Task**: Use the `style` prefix in your commit messages when the changes involve purely formatting or stylistic updates to the codebase. This includes adjusting indentation, fixing linting errors, improving code readability, or updating style guides, without altering the behavior of the code.

- **Why it Matters**: Consistent code formatting improves readability and maintainability across the project. By marking commits with the `style` prefix, you help the team identify changes that don't impact functionality, reducing confusion during code reviews and merges. It also signals that these commits focus on enhancing the code's appearance and adherence to style guidelines, rather than introducing new features or bug fixes.

- **When to Use**:
  - When fixing indentation, line spacing, or other visual elements.
  - When applying changes suggested by a linter (without affecting logic).
  - When updating comments or adjusting code structure for readability.

- **Best Practices**:
  - Keep the subject line brief, using the `style` prefix to indicate non-functional changes.
  - Avoid combining formatting updates with feature changes in the same commit to maintain clarity.
  - Explain in the commit body what style improvements were made and why they were necessary (e.g., to comply with coding standards).

- **Example**:
  ```bash
  style: fix indentation and spacing in authentication module
  ```

  **Body Example**:
  - Corrected inconsistent indentation in the authentication module.
  - Updated spacing for better readability.
  - No functional changes were made to the logic.

By using the `style` prefix, you make it clear that these changes are purely cosmetic or format-related. This helps your team quickly understand the nature of the commit and prioritize their focus on functional changes during reviews. It also improves the overall quality and consistency of the codebase.