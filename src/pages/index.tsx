import type { NextPage } from 'next';
import Image from 'next/image';

import ServiceCard from '~components/Card/ServiceCard';

const Home: NextPage = () => {

  return (
    <div className='flex flex-col justify-center items-center'>
      <section className='h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-[600px] relative'>
        <Image
          src='/images/banner.jpg'
          alt='grill'
          layout='fill'
          objectFit='cover'
        />
      </section>
      <article>
        <p className='text-xl text-justify'>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry&lsquo;s standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </article>
      <section className='w-full flex flex-col mt-10 justify-center'>
        <div className='flex justify-center mb-3'>
          <h1 className='text-2xl'>Our Services</h1>
        </div>
        <ServiceCard
          title='Catering'
          image='/images/catering-girl700px.jpg'
          description='When an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.'
        />
        <ServiceCard
          title='Grocery store'
          image='/images/grocery-store700px.jpg'
          description='When an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.'
        />
      </section>
    </div>
  );
};

export default Home;