import { renderToStaticMarkup } from 'react-dom/server';
import LandingForge from './components/forge/LandingForge';

/*
  Build-time prerender entry. Renders the home page to static HTML so search
  engines and AI crawlers receive real content (H1, copy, links, schema) instead
  of an empty #root. The client (main.tsx) still mounts and takes over on load.
*/
export function render(): string {
  return renderToStaticMarkup(<LandingForge />);
}
