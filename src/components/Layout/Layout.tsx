import Head from 'next/head';
import Link from 'next/link';
import InstagramIcon from '../Icons/InstagramIcon';
import WhatsappIcon from '../Icons/WhatsappIcon';
import Header from './Header';

type LayoutProps = {
  children: JSX.Element;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='py-2 px-2'>
      <Head>
        <title>Bormey & Daughter</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>
        <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
          {/* Replace with your content */}
          <div className='px-4 py-6 sm:px-0'>{children}</div>
          {/* /End replace */}
        </div>
      </main>
      <div className='ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50 w-full' />
      <footer className='flex flex-1 py-2 bottom-0 justify-center items-center w-full'>
        <Link  href='https://wa.me/c/447379500804'>
          <a
            target='_blank'
            rel='noopener noreferrer'
          >
            <WhatsappIcon className='fill-gray-600' />
          </a>
        </Link>
        <Link href='https://instagram.com/bormeyanddaughter?utm_medium=copy_link'>
          <a target='_blank' rel='noopener noreferrer'>
            <InstagramIcon className='fill-gray-600' />
          </a>
        </Link>
      </footer>
    </div>
  );
};

export default Layout;