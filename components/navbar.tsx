import MobileNav from '@/components/mobile-nav';
import DesktopNav from '@/components/desktop-nav';

export default function Nav({ className }: { className: string }) {
  return (
    <nav className={`grid place-items-center ${className} relative`}>
      <MobileNav />
      <DesktopNav />
    </nav>
  );
}
