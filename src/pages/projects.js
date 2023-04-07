import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icon';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import projectDiscord from '../../public/images/projects/discordv14_thumbnail.png';
import projectAPIXSMB from '../../public/images/projects/xsmb_thumbnail.png';
import projectAPIEbook from '../../public/images/projects/ebook_thumnail.png.png';
import projectAPILetsFood from '../../public/images/projects/letsfood_thumbnail.png';
import projectOnePiece from '../../public/images/projects/one_piece_thumbnail.gif';
import projectConan from '../../public/images/projects/conan_thumbnail.gif';
import projectWFMG from '../../public/images/projects/wfmg_thumbnail.png';
import TransitionEffect from '@/components/TransitionEffect';

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
   return (
      <div className="flex justify-center">
         <article
            className=" max-w-[1280px] w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light
         lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
            <div
               className="absolute top-0 -right-3 -z-10 w-[100.8%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light
            xs:-right-2 sm:h-[102%] md:w-[101.7%] sm:w-[102.2%] xs:w-[101.8%] xs:rounded-[1.5rem]"
            />
            <Link
               href={link}
               target="_blank"
               className="w-1/2 cursor-pointer overflow-hidden rounded-lg flex justify-center lg:w-full">
               <FramerImage
                  src={img}
                  alt={title}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  className="w-full h-auto md:max-w-[480px]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
               />
            </Link>

            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
               <span className="text-primary font-medium text-xl dark:text-primary xs:text-base">
                  {type}
               </span>
               <Link
                  href={link}
                  target="_blank"
                  className="hover:underline underline-offset-2">
                  <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
                     {title}
                  </h2>
               </Link>
               <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
                  {summary}
               </p>
               <div className="mt-2 flex items-center">
                  <Link href={github} target="_blank" className="w-10">
                     {' '}
                     <GithubIcon />
                  </Link>
                  <Link
                     href={link}
                     target="_blank"
                     className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
                     sm:px-4 sm:text-base">
                     {' '}
                     Visit Project
                  </Link>
               </div>
            </div>
         </article>
      </div>
   );
};

const Project = ({ title, type, img, link, github }) => {
   return (
      <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
         <div
            className="absolute top-0 -right-3 -z-10 w-[101.5%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light
         md:-right-2 md:w-[103.2%] sm:w-[101.3%] xs:h-[102%] xs:rounded-[1.5rem]"
         />
         <Link
            href={link}
            target="_blank"
            className="w-full cursor-pointer overflow-hidden rounded-lg flex justify-center">
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

         <div className="w-full flex flex-col items-start justify-between mt-4">
            <span className="text-primary font-medium text-lg dark:text-primary lg:text-lg md:text-base">
               {type}
            </span>
            <Link
               href={link}
               target="_blank"
               className="hover:underline underline-offset-2">
               <h2 className="w-full text-left text-2xl font-bold lg:text-2xl">
                  {title}
               </h2>
            </Link>

            {/* <p className="my-2 font-medium text-dark">{summary}</p> */}

            <div className="w-full flex items-center justify-between">
               <Link
                  href={link}
                  target="_blank"
                  className="text-lg font-semibold underline md:text-base">
                  {' '}
                  Visit
               </Link>
               <Link href={github} target="_blank" className="w-8 md:w-6">
                  {' '}
                  <GithubIcon />
               </Link>
            </div>
         </div>
      </article>
   );
};

const projects = () => {
   return (
      <>
         <Head>
            <title> ttd4t | Projects Page</title>
            <meta name="description" content="Some projects made by me" />

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
         <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
            <Layout className="pt-16 flex flex-col justify-center items-center">
               <AnimatedText
                  text="Learning must go hand in hand with practice!"
                  className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
               />

               <div className="max-w-7xl grid grid-cols-8 gap-y-16 xl:gap-x-16 lg:gap-x-8 sm:gap-x-0 gap-x-8">
                  <div className="col-span-8">
                     <FeaturedProject
                        title="Discord Bot version 14"
                        img={projectDiscord}
                        summary="The project is created from discord.js to create a bot with many functions used in Discord (the most commonly used function is playing music). This project is quite popular among Discord users."
                        link="https://discord.com/api/oauth2/authorize?client_id=903232960415805510&permissions=8&scope=bot%20applications.commands"
                        type="Featured Project (use for Discord)"
                        github="https://github.com/ttd4t/discord-bot-v14"
                     />
                  </div>

                  {/* <div className="col-span-2 sm:col-span-4 flex justify-center">
                  </div> */}
                  <div className="col-span-4 sm:col-span-8 flex justify-center">
                     <Project
                        title="API XSMB"
                        img={projectAPIXSMB}
                        link="https://api-xsmb.cyclic.app/v1"
                        type="Featured Project API"
                        github="https://github.com/ttd4t/api-xsmb-today"
                     />
                  </div>
                  <div className="col-span-4 sm:col-span-8 flex justify-center">
                     <Project
                        title="API One Piece"
                        img={projectOnePiece}
                        link="https://api-one-piece.cyclic.app/api/v1"
                        type="Featured Project API"
                        github="https://github.com/ttd4t/api-one-piece"
                     />
                  </div>
                  {/* <div className="col-span-2 sm:col-span-4 flex justify-center">
                  </div> */}

                  <div className="col-span-8">
                     <FeaturedProject
                        title="API for website Ebook"
                        img={projectAPIEbook}
                        summary={`The project is created from Typescript along with NodeJS to create an API for a book-selling website. The project uses the MVC and client-server model. It was carried out by two people.`}
                        link="https://ban-sach-truc-tuyen.vercel.app"
                        type="Featured Project API"
                        github="https://github.com/ttd4t/api-web-ban-sach"
                     />
                  </div>

                  <div className="col-span-4 sm:col-span-8 flex justify-center">
                     <Project
                        title="API Conan Detective"
                        img={projectConan}
                        link="https://api-conan.cyclic.app/api"
                        type="Featured Project API"
                        github="https://github.com/ttd4t/api-conan-detective"
                     />
                  </div>
                  <div className="col-span-4 sm:col-span-8 flex justify-center">
                     <Project
                        title="API website Let's food"
                        img={projectAPILetsFood}
                        link="https://letsfood.click/"
                        type="Featured Project"
                        github="https://github.com/ttd4t/Lets-Food"
                     />
                  </div>

                  <div className="col-span-8">
                     <FeaturedProject
                        title="WFMG website"
                        img={projectWFMG}
                        summary={`"This project was created to assist users in managing personal tasks. It utilizes the MVC model and a NodeJS-ReactJS client-server architecture. This project is built using NodeJS, ExpressJS, MongoDB, and ReactJS, collectively referred to as the MERN stack.`}
                        link="https://wfmg.vercel.app"
                        type="Featured Project Web"
                        github="https://github.com/ttd4t/web-workflow-management"
                     />
                  </div>
                  <div className="col-span-8">
                     <FeaturedProject
                        title="API for WFMG website"
                        img={projectWFMG}
                        summary={`"This project was created to assist users in managing personal tasks. It utilizes the MVC model and a NodeJS-ReactJS client-server architecture. This project is built using NodeJS, ExpressJS, MongoDB, and ReactJS, collectively referred to as the MERN stack.`}
                        link="https://wfmg.vercel.app"
                        type="Featured Project API"
                        github="https://github.com/ttd4t/api-workflow-management"
                     />
                  </div>
               </div>
            </Layout>
         </main>
      </>
   );
};

export default projects;
