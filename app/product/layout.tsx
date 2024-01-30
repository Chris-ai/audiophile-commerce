import About from '@/components/about';
import CategoryList from '@/components/category-list';
import Navbar from '@/components/navbar';
import SubpageHero from '@/components/subpage-hero';
import Wrapper from '@/components/wrapper';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar className={'bg-black'} />
      <Wrapper>
        {children}
        <CategoryList />
      </Wrapper>
      <About />
    </>
  );
}
