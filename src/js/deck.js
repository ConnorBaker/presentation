import Reveal from 'reveal.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.esm';
import RevealNotes from "reveal.js/plugin/notes/notes.esm";
import RevealMath from "reveal.js/plugin/math/math.esm";

Reveal.initialize({
    hash: true,
    transition: 'slide',
    backgroundTransition: 'fade',
    transitionSpeed: 'slow',
    autoAnimateEasing: 'ease-out',
    autoAnimateDuration: 1.5,
    autoAnimateUnmatched: true,
    width: 1920,
    height: 1080,
    margin: 0,
    plugins: [
        RevealHighlight,
        RevealMarkdown,
        RevealNotes,
        RevealMath.MathJax3
    ]
});
