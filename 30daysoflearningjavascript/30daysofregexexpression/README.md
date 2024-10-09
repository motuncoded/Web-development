# 30 Days of Learning Regex in JavaScript

## Overview

- **Duration:** 30 Days
- **Focus:** Regular Expressions (Regex) in JavaScript
- **Goals:**
  - Understand the fundamentals of regex.
  - Apply regex in various JavaScript scenarios.
  - Develop problem-solving skills using regex.
  - Build projects that utilize regex effectively.

---

## Week 1: Foundations of Regular Expressions

### Day 1: Introduction to Regular Expressions

- **Topics:**
  - What is Regex?
  - History and Use Cases
  - Basic Syntax
- **Activities:**
  - Read introductory materials.
  - Watch an introductory video on regex.
  - Explore online regex testers like [Regex101](https://regex101.com/).
- **Exercise:**
  - Identify simple patterns in sample texts.

### Day 2: Basic Literals and Metacharacters

- **Topics:**
  - Literals: Exact character matches.
  - Metacharacters: `. ^ $ * + ? { } [ ] \ | ( )`
- **Activities:**
  - Learn the purpose of common metacharacters.
- **Exercise:**
  - Write regex patterns to match specific words and phrases.

### Day 3: Character Sets and Ranges

- **Topics:**
  - Square Brackets `[]`
  - Ranges (e.g., `[a-z]`, `[0-9]`)
  - Negated Sets `[^]`
- **Activities:**
  - Practice creating character sets.
- **Exercise:**
  - Match vowels, consonants, digits, and exclude certain characters.

### Day 4: Quantifiers

- **Topics:**
  - `*` (0 or more)
  - `+` (1 or more)
  - `?` (0 or 1)
  - `{n}`, `{n,}`, `{n,m}`
- **Activities:**
  - Understand how quantifiers affect matching.
- **Exercise:**
  - Create patterns using different quantifiers to match varying string lengths.

### Day 5: Anchors and Boundaries

- **Topics:**
  - Start `^` and End `$` anchors.
  - Word boundaries `\b`.
- **Activities:**
  - Learn how to constrain matches to specific positions.
- **Exercise:**
  - Match strings that start or end with particular characters or words.

### Day 6: Grouping and Capturing

- **Topics:**
  - Parentheses `()` for grouping.
  - Capturing vs. Non-Capturing Groups `(?:)`
- **Activities:**
  - Practice grouping patterns.
- **Exercise:**
  - Extract specific parts of a string using capturing groups.

### Day 7: Review and Practice

- **Topics:**
  - Review all topics from Week 1.
- **Activities:**
  - Complete practice problems covering literals, metacharacters, sets, quantifiers, anchors, and grouping.
- **Exercise:**
  - Use an online platform like [HackerRank Regex Challenges](https://www.hackerrank.com/domains/regex) to solve regex problems.

---

## Week 2: Intermediate Regex Concepts

### Day 8: Escaping Special Characters

- **Topics:**
  - Using backslash `\` to escape metacharacters.
- **Activities:**
  - Learn when and how to escape characters.
- **Exercise:**
  - Create patterns that include special characters literally (e.g., matching email addresses with dots).

### Day 9: Shorthand Character Classes

- **Topics:**
  - `\d` (digits), `\w` (word characters), `\s` (whitespace).
  - Their uppercase counterparts `\D`, `\W`, `\S`.
- **Activities:**
  - Practice using shorthand classes.
- **Exercise:**
  - Match patterns like phone numbers, identifiers, and spaces.

### Day 10: Assertions

- **Topics:**
  - Lookaheads `(?=)` and `(?! )`
  - Lookbehinds `(?<=)` and `(?<! )` (Note: Supported in modern JS)
- **Activities:**
  - Understand positive and negative assertions.
- **Exercise:**
  - Create patterns that match based on preceding or following text without including them in the match.

### Day 11: Non-Greedy Matching

- **Topics:**
  - Greedy vs. Non-Greedy `*?`, `+?`, `??`
- **Activities:**
  - Learn how to control the extent of matches.
- **Exercise:**
  - Extract content from HTML tags without overreaching.

### Day 12: Alternation and Options

- **Topics:**
  - Using `|` for multiple possible matches.
- **Activities:**
  - Combine different patterns using alternation.
- **Exercise:**
  - Create patterns that match different file extensions or multiple keywords.

### Day 13: Unicode and Special Characters

- **Topics:**
  - Unicode properties `\p{}` and `\P{}` (with the `u` flag).
- **Activities:**
  - Learn to match Unicode characters.
- **Exercise:**
  - Match emojis, accented characters, or symbols.

### Day 14: Review and Practice

- **Topics:**
  - Review all topics from Week 2.
- **Activities:**
  - Complete practice problems covering escaping, shorthand classes, assertions, non-greedy matching, alternation, and Unicode.
- **Exercise:**
  - Use [Regex Golf](https://alf.nu/RegexGolf) to practice writing efficient regex patterns.

---

## Week 3: Applying Regex in JavaScript

### Day 15: Regex in JavaScript Basics

- **Topics:**
  - Creating regex patterns using literals `/pattern/flags` and `RegExp` constructor.
  - Flags: `g`, `i`, `m`, `u`, `y`, `s`.
- **Activities:**
  - Learn different ways to instantiate regex in JavaScript.
- **Exercise:**
  - Write regex patterns with various flags and test their behaviors.

### Day 16: String Methods with Regex

- **Topics:**
  - `test()`, `exec()`, `match()`, `matchAll()`, `replace()`, `search()`, `split()`.
- **Activities:**
  - Explore how each method works with regex.
- **Exercise:**
  - Use different string methods to perform searches, replacements, and splits based on regex patterns.

### Day 17: Capturing Groups and Backreferences in JS

- **Topics:**
  - Accessing captured groups.
  - Using backreferences in replacements.
- **Activities:**
  - Practice capturing and utilizing groups in JavaScript.
- **Exercise:**
  - Extract and rearrange parts of strings, such as swapping first and last names.

### Day 18: Advanced Replacement Techniques

- **Topics:**
  - Using replacement functions.
  - Conditional replacements.
- **Activities:**
  - Learn to perform dynamic replacements based on matches.
- **Exercise:**
  - Create a function that formats phone numbers or sanitizes user input.

### Day 19: Validation with Regex in JavaScript

- **Topics:**
  - Validating user input (emails, URLs, passwords).
- **Activities:**
  - Implement validation functions using regex.
- **Exercise:**
  - Build simple form validations for email and password fields.

### Day 20: Performance Considerations

- **Topics:**
  - Optimizing regex patterns.
  - Avoiding catastrophic backtracking.
- **Activities:**
  - Learn best practices for writing efficient regex.
- **Exercise:**
  - Refactor complex regex patterns for better performance.

### Day 21: Review and Practice

- **Topics:**
  - Review all topics from Week 3.
- **Activities:**
  - Complete JavaScript-specific regex exercises.
- **Exercise:**
  - Implement regex-based validations and transformations in small JavaScript snippets.

---

## Week 4: Advanced Topics and Projects

### Day 22: Lookbehinds in JavaScript

- **Topics:**
  - Advanced lookbehind assertions.
- **Activities:**
  - Practice using lookbehinds for complex matching scenarios.
- **Exercise:**
  - Match patterns based on preceding characters without including them.

### Day 23: Named Capturing Groups

- **Topics:**
  - Using named groups for better readability.
- **Activities:**
  - Implement named groups in regex patterns.
- **Exercise:**
  - Extract data with named groups and access them in JavaScript.

### Day 24: Regex in Data Parsing

- **Topics:**
  - Parsing logs, CSVs, or other structured data with regex.
- **Activities:**
  - Learn techniques for extracting structured information.
- **Exercise:**
  - Parse a sample log file to extract timestamps and messages.

### Day 25: Regex and Asynchronous Operations

- **Topics:**
  - Using regex in async functions and promises.
- **Activities:**
  - Integrate regex operations within asynchronous JavaScript code.
- **Exercise:**
  - Fetch data from an API and process it using regex.

### Day 26: Testing and Debugging Regex in JavaScript

- **Topics:**
  - Strategies for testing regex patterns.
  - Debugging common regex issues.
- **Activities:**
  - Utilize tools and techniques to ensure regex accuracy.
- **Exercise:**
  - Debug and fix faulty regex patterns in provided code snippets.

### Day 27: Security Considerations

- **Topics:**
  - Understanding regex-related security vulnerabilities.
- **Activities:**
  - Learn how to write secure regex patterns to avoid issues like ReDoS (Regular Expression Denial of Service).
- **Exercise:**
  - Review existing patterns and optimize them for security.

### Day 28: Final Project: Regex Application

- **Project:**
  - Build a project that utilizes regex for a practical application (e.g., a text processor, a form validator, or a data parser).
- **Activities:**
  - Apply everything learned to create a functional application.

### Day 29: Project Review and Refinement

- **Activities:**
  - Review your project, identify areas for improvement, and refine your regex patterns and code.

### Day 30: Reflection and Future Learning

- **Activities:**
  - Reflect on what you've learned over the past month.
  - Identify areas for further study and potential applications of regex.
