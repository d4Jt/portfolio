import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React, { useEffect, useRef } from 'react';
import profilePic from '../../public/images/profile/avt-pic-2.jpg';
import Image from 'next/image';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';

const AnimatedNumbers = ({ value }) => {
   const ref = useRef(null);

   const motionValue = useMotionValue(0);
   const springValue = useSpring(motionValue, { duration: 3000 });
   const isInView = useInView(ref, { once: true });

   useEffect(() => {
      if (isInView) {
         motionValue.set(value);
      }
   }, [isInView, value, motionValue]);

   useEffect(() => {
      springValue.on('change', (latest) => {
         if (ref.current && latest.toFixed(0) <= value) {
            ref.current.textContent = latest.toFixed(0);
         }
      });
   }, [springValue, value]);

   return <span ref={ref}></span>;
};

const about = () => {
   return (
      <>
         <Head>
            <title> ttd4t | About Page</title>
            <meta name="description" content="Some information about me" />

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.datdev.click/" />
            <meta property="og:title" content="ttd4t | Home Page" />
            <meta
               property="og:description"
               content="Write something about my self :)"
            />
            <meta
               property="og:image"
               content="https://www.datdev.click/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favt-pic-1.9b03c7d0.jpg&w=1920&q=75"
            />

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://www.datdev.click/" />
            <meta property="twitter:title" content="ttd4t | Home Page" />
            <meta
               property="twitter:description"
               content="Write something about my self :)"
            />
            <meta
               property="twitter:image"
               content="https://www.datdev.click/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favt-pic-1.9b03c7d0.jpg&w=1920&q=75"
            />
         </Head>
         <TransitionEffect />
         <main className="flex w-full flex-col items-center justify-center dark:text-light">
            <Layout className="pt-16">
               <AnimatedText
                  text="Life must've passion and purpose!"
                  className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
               />
               <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 ">
                  <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                     <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                        Biography
                     </h2>
                     <p className="font-medium">
                        Hello, I&apos;m <strong>Dat</strong>, my nickname is{' '}
                        <strong>ttd4t</strong>, and I&apos;m a Back-End
                        developer. Why did I choose Back-End? Well, I really
                        enjoy working with logic, and logic helps to develop our
                        brains and handle tasks more efficiently. Back-End is
                        where more logic processing takes place compared to
                        frontend. While many people tend to focus on the
                        surface-level appearance, few understand what goes on
                        behind the scenes. That&apos;s what Back-End is all
                        about.{' '}
                     </p>
                     <p className="my-4 font-medium">
                        I believe that logic not only helps to develop our
                        brains, but also has great benefits for society and our
                        future.
                     </p>
                     <p className="font-medium">
                        In addition to working on Back-End development, I have
                        also studied Front-End and am aiming to become a
                        well-rounded Full-Stack developer. However, my primary
                        focus will still be on backend development. I am excited
                        about the opportunity to bring my skills and passion to
                        your next project.
                     </p>
                  </div>
                  <div className=" max-w-[480px] col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8 md:mx-auto">
                     <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
                     <Image
                        src={profilePic}
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt="ttd4t"
                        className="w-full h-auto rounded-2xl "
                     />
                  </div>
                  <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                     <div className="flex flex-col items-end justify-center xl:items-center">
                        <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                           <AnimatedNumbers value={20} />+
                        </span>
                        <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                           satisfied clients
                        </h2>
                     </div>
                     <div className="flex flex-col items-end justify-center xl:items-center">
                        <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                           <AnimatedNumbers value={10} />+
                        </span>
                        <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                           projects completed
                        </h2>
                     </div>
                     <div className="flex flex-col items-end justify-center xl:items-center">
                        <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                           <AnimatedNumbers value={1} />+
                        </span>
                        <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                           year of experience
                        </h2>
                     </div>
                  </div>
               </div>
               <Skills />
               <Experience />
               <Education />
            </Layout>
         </main>
      </>
   );
};

export default about;
