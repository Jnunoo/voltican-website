'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

/**
 * PageTransition
 * Fixes a common Framer Motion / Next.js bug: when the user navigates back
 * via the browser back button, Next.js restores pages from its soft-cache
 * WITHOUT remounting React components. This means `whileInView` animations
 * that already fired (with `once: true`) never replay.
 *
 * Solution: track route changes and force a re-key on the root element so
 * React treats it as a fresh mount, letting Framer Motion reset its state.
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const keyRef = useRef(pathname);

  useEffect(() => {
    keyRef.current = pathname;
    // Only scroll to top when there's no hash target — if there is one,
    // let the browser handle scrolling to the anchor naturally.
    if (!window.location.hash) {
      window.scrollTo({ top: 0 });
    }
  }, [pathname]);

  return <div key={keyRef.current} className="contents">{children}</div>;
}
