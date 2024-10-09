# Day 14: Embedding Media (Audio, Video, Iframe)

In today's lesson, we will explore how to embed media content like audio, video, and iframes in HTML5. Media embedding allows you to enrich your webpages by incorporating interactive and multimedia elements, enhancing the user experience.

## 1. Embedding Audio

HTML5 introduced the `<audio>` element, which allows you to embed audio files directly into your webpages. The element supports multiple file formats such as MP3, WAV, and OGG.

```html
Copy code
<audio controls>
  <source src="path-to-your-audio-file.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>
```

Explanation:

- controls: Adds the default audio controls like play, pause, and volume.
- `<source>`: Allows you to specify different formats for browser compatibility.
- Fallback text: This will be displayed if the browser doesn't support the `<audio>` element.

Example:

```html
Copy code
<audio controls>
  <source src="audio/music.mp3" type="audio/mpeg" />
  <source src="audio/music.ogg" type="audio/ogg" />
  Your browser does not support the audio element.
</audio>
```

## 2. Embedding Video

The `<video>` element allows you to embed videos directly in your HTML, and just like the `<audio>` element, it supports multiple formats like **MP4**, **WebM**, and **OGG**.

Basic Syntax

```html
Copy code
<video controls>
  <source src="path-to-your-video-file.mp4" type="video/mp4" />
  Your browser does not support the video element.
</video>
```

Explanation:

- controls: Adds controls for play, pause, volume, and full-screen options.
- `<source>`: Just like in audio, this allows multiple video formats for compatibility.
- Fallback text: Text shown if the browser does not support the `<video>` element.

Example:

```html
Copy code
<video controls width="600">
  <source src="video/sample.mp4" type="video/mp4" />
  <source src="video/sample.ogg" type="video/ogg" />
  Your browser does not support the video element.
</video>
```

### Additional Attributes:

- autoplay: Automatically starts playing the video as soon as it's ready.
- loop: The video will loop (start over) after it finishes.
- muted: Mutes the video by default.
- poster: Specifies an image to show before the video plays.

Example:

```html
<video
  controls
  autoplay
  loop
  muted
  poster="images/video-poster.jpg"
  width="600"
>
  <source src="video/sample.mp4" type="video/mp4" />
  <source src="video/sample.ogg" type="video/ogg" />
  Your browser does not support the video element.
</video>
```

## 3. Embedding External Content with Iframes

The `<iframe>` element is used to embed another HTML page, a video, a map, or other external content within the current webpage. It's commonly used to embed YouTube videos, Google Maps, or social media content.

Basic Syntax

```html
Copy code <iframe src="https://example.com" width="600" height="400"></iframe>
```

Explanation:

- src: The URL of the external content you want to embed.
- width and height: Specifies the size of the embedded content.

Example 1: Embedding a YouTube Video

````html
Copy code
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  frameborder="0"
  allowfullscreen
></iframe
>``` Example 2: Embedding Google Maps ```html Copy code
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093705!2d144.9630578153167!3d-37.8136279797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d4faec9d9400!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1633087242950!5m2!1sen!2sus"
  width="600"
  height="450"
  allowfullscreen=""
  loading="lazy"
></iframe>
````

### Tips for Media Embedding

Format Compatibility: Always provide multiple media formats (MP3, OGG, MP4, WebM) to ensure compatibility across different browsers.
Responsive Media: Use CSS to make your embedded media responsive. For instance, setting a percentage width (width: 100%) will ensure that the media scales to fit the screen size.
Accessibility: Provide text alternatives, such as captions for videos and transcripts for audio files, to make your content accessible.
