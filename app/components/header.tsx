import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-black p-4 ">
      <div className="container mx-auto flex items-center justify-center">
        <Link href="http://localhost:3000/" className='text-white text-2xl font-bold flex items-center'>
          <Image
            src="/blog.jpg"
            width={100}
            height={100}
            alt="Picture of the author"
            className="w-10 h-10 mr-2"
          />
          Blog Eliti
        </Link>
      </div>
    </header>
  );
};

export default Header;
