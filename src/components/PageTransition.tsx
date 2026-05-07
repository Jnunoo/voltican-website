'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * PageTransition
 * Fixes a common Framer Motion / Next.js bug: when the user navigates back
 * via the browser back button, Next.js restores pages from its soft-cache
 * WITHOUT remounting React components. This means `whileInView` animations
 * that already fired (with `once: true`) never replay.
 *
 * Solution: track route changes via useState (not useRef) so React sees the
 * key change synchronously during render and treats the subtree as a fresh
 * mount, resetting Framer Motion state.
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [renderKey, setRenderKey] = useState(pathname);

  useEffect(() => {
    setRenderKey(pathname);
    // Only scroll to top when there's no hash target — if there is one,
    // let the browser handle scrolling to the anchor naturally.
    if (!window.location.hash) {
      window.scrollTo({ top: 0 });
    }
  }, [pathname]);

  return <div key={renderKey} className="contents">{children}</div>;
}
