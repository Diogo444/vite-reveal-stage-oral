/** @format */

// Styles Reveal.js
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";

// Styles Highlight.js (thème de coloration syntaxique)
import "highlight.js/styles/monokai.css";

// Révélation (moteur principal)
import Reveal from "reveal.js";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm.js";

// Langages Highlight.js à enregistrer
import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";
import javascript from "highlight.js/lib/languages/javascript";

hljs.registerLanguage("bash", bash);
hljs.registerLanguage("javascript", javascript);

// Tes fichiers SCSS persos
import "./animation.scss";
import "./clube-arcade.scss";
import "./idee.scss";
import "./amphenol.scss";
import "./presentation.scss";
import "./install.scss";

// Initialisation de Reveal.js
Reveal.initialize({
  hash: true,
  plugins: [RevealHighlight],
});
