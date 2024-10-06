# Day 20: HTML Entities
HTML entities are special codes used to represent characters that have specific meanings in HTML or characters that are not easily typed using a keyboard. These entities are commonly used to ensure that certain symbols and characters are displayed correctly in a web browser, even when they have a special function in HTML (like <, >, or &).

Today, we will learn how to use HTML entities to display special characters, symbols, and reserved HTML characters safely and correctly.
----

## 1. What Are HTML Entities?
An HTML entity starts with an ampersand (&), followed by the entity's name or number, and ends with a semicolon (;).

Basic Example:
```html
Copy code
&copy; 2024
The &copy; entity displays the copyright symbol (©).
```

### 2. Commonly Used HTML Entities
Here’s a list of some common HTML entities:

Character	HTML Entity Name	HTML Entity Number	Description
| &	&amp;	&#38;	Ampersand
| <	&lt;	&#60;	Less than
| >	&gt;	&#62;	Greater than
| "	&quot;	&#34;	Double quotation
| '	&apos;	&#39;	Apostrophe (single quote)
| ©	&copy;	&#169;	Copyright symbol
| ®	&reg;	&#174;	Registered trademark
| €	&euro;	&#8364;	Euro sign
| £	&pound;	&#163;	British Pound sign
| ¥	&yen;	&#165;	Yen sign
| ©	&copy;	&#169;	Copyright symbol
| –	&ndash;	&#8211;	En dash
| —	&mdash;	&#8212;	Em dash
|   &nbsp;	&#160; Non-breaking space
 
# 3. Why Use HTML Entities?
There are several reasons why you should use HTML entities in your web pages:

- Reserved Characters: Certain characters have special meanings in HTML. For example, the less-than sign < is used to define tags. If you want to display this character in the browser instead of using it as an HTML tag, you must use the &lt; entity.

- Special Symbols: Characters like ©, ®, and currency symbols (€, £, ¥) may not be available on your keyboard. HTML entities allow you to include these characters easily.

- Non-breaking Spaces: The &nbsp; entity is used to create a space that does not break into a new line. This is useful for formatting text where you want to prevent line breaks.

## 4. Using Named Entities vs Numeric Entities
You can write HTML entities using either a named entity or a numeric entity.

- Named Entity:
Named entities are easier to read and remember.

```html
Copy code
&copy; <!-- Displays: © -->
```
- Numeric Entity:
Numeric entities use the character’s Unicode value, and are more universally supported across all browsers.

```html
Copy code
&#169; <!-- Displays: © -->
```
There are two types of numeric entities:

- Decimal: Uses the decimal code point of the character (e.g., &#169;).
- Hexadecimal: Uses the hexadecimal code point of the character (e.g., &#xA9;).

## 5. Example: Displaying HTML Code Safely
If you want to display HTML code in a webpage (e.g., for a code tutorial), you need to convert special characters like <, >, and & into HTML entities to avoid breaking the structure of the page.

Example:

```html
Copy code
<p>The syntax for a paragraph tag is: &lt;p&gt;Your text here&lt;/p&gt;</p>
```
This displays the following on the page:

less
Copy code
The syntax for a paragraph tag is: <p>Your text here</p>
---

# 6. Special Characters in Forms
If you're using special characters in form inputs or URLs, it's important to encode them using HTML entities to prevent issues with data processing. For example, a user might submit a string with an ampersand (&), which could be misinterpreted by the server if not properly encoded.

Example:
```html
Copy code
<input type="text" value="Tom &amp; Jerry">
```
This ensures that the form value is correctly submitted as "Tom & Jerry".

## 7. Non-breaking Space (&nbsp;)
The non-breaking space (&nbsp;) is an invisible character that prevents an automatic line break in places where a regular space would. This is particularly useful for formatting, such as keeping two words together on the same line.

Example:
```html
Copy code
<p>Hello&nbsp;World!</p>
```
In this example, "Hello World!" will always appear on the same line, even if the text overflows the container width.

## 8. Lesser-known HTML Entities
Beyond the common symbols, there are some lesser-known HTML entities for mathematical symbols, accented characters, and more.

Mathematical Symbols:
Multiplication sign: `&times;` (×)
Division sign: `&divide;` (÷)
Less than or equal to: `&le;` (≤)
Greater than or equal to: `&ge;` (≥)
Accented Characters:
É: `&Eacute;` (É)
è: `&egrave;` (è)
ñ: `&ntilde;` (ñ)
ü: `&uuml;` (ü)
You can use these entities to display characters from different languages and scripts in your HTML content.

## 9. Full List of HTML Entities
For a full reference of HTML entities, you can check out:

- W3Schools List of HTML Entities
- MDN HTML Entity Reference







