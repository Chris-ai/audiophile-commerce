import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Wrapper from '@/components/wrapper';
import CategoryList from '@/components/category-list';
import Bestsellers from '@/components/bestsellers';
import About from '@/components/about';

export default function Home() {
  //TODO:: Instead of data.json use prisma and custom db
  return (
    <>
      <Navbar className={'bg-[#191919]'} />
      <Hero
        title='XX99 Mark II Headphones'
        desc='Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.'
        slug='xx99-mark-two-headphones'
      />
      <Wrapper>
        <CategoryList />
        <Bestsellers />
        <About />
      </Wrapper>
    </>
  );
}
