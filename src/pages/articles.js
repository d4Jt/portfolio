import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import { motion, useMotionValue } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';

import beatingHeart from '../../public/images/articles/beating-heart.png';
import tabsUI from '../../public/images/articles/tabs-ui.png';
import musicPlayer from '../../public/images/articles/music-player.png';
import validationForm from '../../public/images/articles/validation-form.png';
import TransitionEffect from '@/components/TransitionEffect';

const FramerImage = motion(Image);
const MovingImg = ({ title, img, link }) => {
   const x = useMotionValue(0);
   const y = useMotionValue(0);
   const imgRef = useRef(null);

   const handleMouse = (e) => {
      imgRef.current.style.display = 'inline-block';
      x.set(e.pageX);
      y.set(-10);
   };
   const handleMouseLeave = (e) => {
      imgRef.current.style.display = 'none';
      x.set(0);
      y.set(0);
   };

   return (
      <Link
         href={link}
         target="_blank"
         onMouseMove={handleMouse}
         onMouseLeave={handleMouseLeave}>
         <h2 className="capitalize text-xl font-semibold hover:underline">
            {title}
         </h2>
         <FramerImage
            style={{ x: x, y: y }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
            ref={imgRef}
            src={img}
            alt={title}
            className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
         />
      </Link>
   );
};

const Article = ({ img, title, date, link }) => {
   return (
      <motion.li
         initial={{ y: 150 }}
         whileInView={{
            y: 0,
            transition: { duration: 0.5, ease: 'easeInOut' },
         }}
         viewport={{ once: true }}
         className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
         sm:flex-col">
         <MovingImg title={title} img={img} link={link} />
         <span className="text-primary font-semibold pl-4 dark:text-primary sm:self-start sm:pl-0 xs:text-sm">
            {date}
         </span>
      </motion.li>
   );
};

const FeaturedArticles = ({ img, title, time, summary, link }) => {
   return (
      <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative dark:bg-dark dark:border-light">
         <div className="absolute top-0 -right-3 -z-10 w-[100.8%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light" />
         <Link
            href={link}
            target="_blank"
            className="w-full inline-block cursor-pointer overflow-hidden rounded-lg flex justify-center">
            <FramerImage
               src={img}
               alt={title}
               priority
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
               className="w-full h-auto"
               whileHover={{ scale: 1.05 }}
               transition={{ duration: 0.2 }}
            />
         </Link>
         <Link href={link} target="_blank">
            <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
               {title}
            </h2>
         </Link>
         <p className="text-sm mb-2">{summary}</p>
         <span className="text-primary font-semibold dark:text-primary">
            {time}
         </span>
      </li>
   );
};

const articles = () => {
   return (
      <>
         <Head>
            <title> d4Jt | Articles Page</title>
            <meta name="description" content="Some articles made by me" />

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.datdev.click/" />
            <meta property="og:title" content="d4Jt | Home Page" />
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
            <meta property="twitter:title" content="d4Jt | Home Page" />
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
         <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
            <Layout className="pt-16">
               <AnimatedText
                  text="Language can alter the perception of everything!"
                  className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
               />
               <ul className="grid grid-cols-2 gap-16 place-items-center lg:gap-8 md:gap-y-16 md:grid-cols-1">
                  <FeaturedArticles
                     title="Beating heart"
                     summary="Create a beating heart using CSS and HTML to show your love for someone."
                     time="8/11/2022"
                     link="https://github.com/d4Jt/beating-heart"
                     img={beatingHeart}
                  />
                  <FeaturedArticles
                     title="Tabs UI"
                     summary="Create a beating heart using CSS and HTML to show your love for someone."
                     time="2/6/2022"
                     link="https://github.com/d4Jt/tabsUI"
                     img={tabsUI}
                  />
               </ul>

               <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
                  All Articles
               </h2>
               <ul>
                  <Article
                     title="Create a beating heart to show your love for someone."
                     img={beatingHeart}
                     date="8/11/2022"
                     link="https://github.com/d4Jt/beating-heart"
                  />
                  <Article
                     title="Ceate a validation form using HTML, CSS and Javascript."
                     img={validationForm}
                     date="7/6/2022"
                     link="https://github.com/d4Jt/learnFormValidation2"
                  />
                  <Article
                     title="Create a music player using HTML, CSS and Javascript to learn Javascript."
                     img={musicPlayer}
                     date="5/6/2022"
                     link="https://github.com/d4Jt/music-player"
                  />
                  <Article
                     title="Create tabs UI using HTML, CSS and Javascript."
                     img={tabsUI}
                     date="2/6/2022"
                     link="https://github.com/d4Jt/tabsUI"
                  />
               </ul>
            </Layout>
         </main>
      </>
   );
};

export default articles;
