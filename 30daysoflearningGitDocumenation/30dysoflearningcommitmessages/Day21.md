### **Day 21: Prefix with Perf for Performance Improvements**

- **Objective**: Clearly identify commits that focus on enhancing the performance of an application or system. This helps differentiate performance-related changes from functional updates, making it easier for the team to track optimizations and their impact on system efficiency.

- **Task**: Use the `perf` prefix when your commit is related to improving the performance of the application, such as optimizing algorithms, reducing load times, improving memory usage, or making processes faster and more efficient.

- **Why it Matters**: Performance improvements can significantly impact user experience and system efficiency, especially for large-scale applications. By using the `perf` prefix, developers can easily identify which commits are dedicated to boosting performance and can reference them when assessing or troubleshooting performance issues. It also helps in code reviews, as performance changes are often non-trivial and need careful attention.

- **When to Use**:
  - When optimizing code for speed or efficiency (e.g., reducing algorithm complexity, using more efficient data structures).
  - When reducing memory usage or addressing performance bottlenecks.
  - When improving load times or response times for certain features.
  - When improving database queries for faster retrieval of data.

- **Best Practices**:
  - Use the `perf` prefix to clearly mark performance-related improvements.
  - Include a detailed explanation in the commit body about what was optimized, how it improves performance, and any potential trade-offs (e.g., increased complexity for faster execution).
  - Where possible, include performance metrics or benchmarks before and after the improvement.

- **Example**:
  ```bash
  perf: optimize database queries for faster user retrieval
  ```

  **Body Example**:
  - Refactored database queries to reduce the number of joins and optimize index usage.
  - Improved user retrieval time by 30% during peak loads.
  - Verified changes with performance benchmarking to ensure improvements in production environments.

By prefixing commits with `perf`, you ensure that performance-related improvements are easily trackable, which is essential for understanding the evolution of system efficiency. This also makes performance optimizations more visible during code reviews and provides clear documentation for future debugging or further tuning efforts.