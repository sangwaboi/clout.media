import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './forge.css';
import LandingForge from './components/forge/LandingForge.tsx';
import ForgeManifesto from './components/forge/ForgeManifesto.tsx';

/*
  CloutSync — Forge theme (single theme). Simple path-based routing:
    /            → home
    /manifesto   → manifesto
    (anything)   → 404
  Links are plain anchors (full navigation). For production, vercel.json rewrites
  all paths to index.html so deep links like /manifesto resolve to this SPA.
*/

function NotFound() {
  return (
    <div className="forge-root" style={{ minHeight: '100svh', display: 'grid', placeItems: 'center', textAlign: 'center', padding: '2rem' }}>
      <div>
        <p className="fg-mono">404</p>
        <h1 className="fg-mhead" style={{ fontSize: 'clamp(2.5rem,8vw,5rem)', marginTop: '1rem' }}>that page doesn&rsquo;t exist.</h1>
        <a href="/" className="fg-btn fg-btn--solid" style={{ marginTop: '2rem' }}>back home</a>
      </div>
    </div>
  );
}

function route() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  if (path === '/manifesto') return <ForgeManifesto />;
  if (path === '/') return <LandingForge />;
  return <NotFound />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>{route()}</StrictMode>,
);
