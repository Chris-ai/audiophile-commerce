import Navbar from '@/components/navbar';
import Wrapper from '@/components/wrapper';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar className={'bg-black'} />
      <Wrapper>{children}</Wrapper>
    </>
  );
}
