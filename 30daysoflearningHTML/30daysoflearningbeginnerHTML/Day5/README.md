# Day 5: Working with Images and Media in HTML

## Concepts and Explanation

On **Day 5**, we will explore how to include images in HTML documents. Images play a vital role in enhancing the visual appeal and user experience of a webpage.

### 1. The Image Tag (`<img>`)

The `<img>` tag is used to embed images in an HTML document. It is a self-closing tag that does not require an ending tag.

---

### Key Elements

1. Embedding Images

The `<img>` tag is used to embed images in an HTML document.
Syntax:

```html
<img src="image-url" alt="description of image" />
```

**Attributes**:

- src: Specifies the path to the image file.
- alt: Provides alternative text for screen readers and displays when the image cannot be loaded.

**Image Formats**

- JPEG (.jpg): Best for photographs and images with many colors. Supports lossy compression.
- PNG (.png): Supports transparency and lossless compression. Ideal for images requiring transparency and for simple graphics.
- SVG (.svg): Scalable vector graphics that are resolution-independent. Great for logos and icons.

2. Responsive Images
   To make images responsive (adjusting to different screen sizes), use CSS or the srcset attribute.

```html
<img
  src="small.jpg"
  alt="Responsive image"
  srcset="medium.jpg 600w, large.jpg 1200w"
  sizes="(max-width: 600px) 100vw, 50vw"
/>
```

3 . Media: Audio and Video
a. Audio
To embed audio, use the `<audio>` tag. You can include multiple audio sources for better browser compatibility.

```html
<audio controls>
  <source src="audio-file.mp3" type="audio/mpeg" />
  <source src="audio-file.ogg" type="audio/ogg" />
  Your browser does not support the audio tag.
</audio>
```

- controls: Displays play/pause controls.
- `<source>`: Specifies the audio file.

```html
<audio controls>
  <source src="song.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>
```

b. Video
To embed video, use the `<video>` tag. Similar to audio, you can specify multiple video sources.

```html
<video controls width="600">
  <source src="video-file.mp4" type="video/mp4" />
  <source src="video-file.webm" type="video/webm" />
  Your browser does not support the video tag.
</video>
```

controls: Displays play/pause controls.
width: Specifies the width of the video.

```html
<video controls width="600">
  <source src="movie.mp4" type="video/mp4" />
  <source src="movie.webm" type="video/webm" />
  Your browser does not support the video element.
</video>
```

3. Embedding External Media
   You can also embed external media using the <iframe> tag, often used for videos from platforms like YouTube.

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="YouTube video player"
  frameborder="0"
  allowfullscreen
></iframe>
```

### Best Practices

- Use Alt Text: Always include alt text for images to improve accessibility and SEO.
- Optimize Images: Use compressed image formats to improve loading times.
- Use Responsive Techniques: Ensure images and media adapt to different screen sizes for a better user experience.
- Test Across Browsers: Make sure audio and video work across different browsers and devices.
