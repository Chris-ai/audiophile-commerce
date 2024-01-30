import Image from 'next/image';
import LogoImage from '../public/audiophile.svg';

export default function Logo() {
  return <Image src={LogoImage} alt='logo' height={25} width={143} />;
}
