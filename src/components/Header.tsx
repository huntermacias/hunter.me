import { useRouter } from 'next/router';
import { useRef } from 'react';

import { Avatar } from './Avatar';
import { AvatarContainer } from './AvatarContainer';
import { Container } from './Container';
import { MobileNavigation, DesktopNavigation } from './Navigation';
import { ThemeToggle } from './ThemeToggle';

/* ===================== CSS VAR HELPERS ===================== */

const cssVarPosition = (variable: string): React.CSSProperties => ({
  position: `var(${variable})` as React.CSSProperties['position'],
});

/* ===================== HOME AVATAR ===================== */

const HomeAvatar = ({ avatarRef }: { avatarRef: React.RefObject<HTMLDivElement> }) => (
  <>
    <div
      ref={avatarRef}
      className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"
    />

    <Container
      className="top-0 order-last -mb-3 pt-3"
      style={cssVarPosition('--header-position')}
    >
      <div
        className="top-[var(--avatar-top,theme(spacing.3))] w-full"
        style={cssVarPosition('--header-inner-position')}
      >
        <div className="relative">
          <AvatarContainer
            className="absolute left-0 top-3 origin-left transition-opacity"
            style={{
              opacity: 'var(--avatar-border-opacity, 0)',
              transform: 'var(--avatar-border-transform)',
            }}
          />
          <Avatar
            large
            className="block h-16 w-16 origin-left"
            style={{ transform: 'var(--avatar-image-transform)' }}
          />
        </div>
      </div>
    </Container>
  </>
);

/* ===================== HEADER ===================== */

export const Header = () => {
  const { pathname } = useRouter();
  const isHomePage = pathname === '/';

  const headerRef = useRef<HTMLDivElement | null>(null);
  const avatarRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <header
        ref={headerRef}
        className="pointer-events-none relative z-50 flex flex-col"
        style={{
          height: 'var(--header-height)',
          marginBottom: 'var(--header-mb)',
        }}
      >
        {isHomePage && <HomeAvatar avatarRef={avatarRef} />}

        <div
          className="top-0 z-10 h-16 pt-6"
          style={cssVarPosition('--header-position')}
        >
          <Container
            className="top-[var(--header-top,theme(spacing.6))] w-full"
            style={cssVarPosition('--header-inner-position')}
          >
            <div className="relative flex gap-4">
              {/* Left */}
              <div className="flex flex-1">
                {!isHomePage && (
                  <AvatarContainer>
                    <Avatar />
                  </AvatarContainer>
                )}
              </div>

              {/* Center */}
              <div className="flex flex-1 justify-end md:justify-center">
                <MobileNavigation className="pointer-events-auto md:hidden" />
                <DesktopNavigation className="pointer-events-auto hidden md:block" />
              </div>

              {/* Right */}
              <div className="flex justify-end md:flex-1">
                <div className="pointer-events-auto">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>

      {isHomePage && <div style={{ height: 'var(--content-offset)' }} />}
    </>
  );
};
