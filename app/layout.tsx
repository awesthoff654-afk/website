import './globals.css';
export const metadata = { title: 'VÆST — Alexandra Westhoff', description: 'An architectural exhibition in motion. A 100 square metre virtual gallery.' };
export default function Layout({children}:{children:React.ReactNode}) { return <html lang="en"><head><link rel="preload" as="image" href="/artworks/originals/painting-01.avif" fetchPriority="high"/></head><body>{children}</body></html>; }
