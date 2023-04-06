import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import profilePic from '../../public/images/profile/avt-pic-1.jpg';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icon';
import HireMe from '@/components/HireMe';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';

export default function Home() {
   return (
      <>
         <Head>
            <title>ttd4t | Home Page</title>
            <meta name="title" content="ttd4t | Home Page" />
            <meta
               name="description"
               content="Write something about my self :)"
            />

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
         <main className="m-0 flex items-center text-dark w-full dark:text-light">
            <Layout className="pt-0 flex flex-col items-center">
               <div className="max-w-[1400px] translate-y-14 flex items-center justify-between w-full">
                  <div className="w-1/2">
                     <Image
                        src={profilePic}
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                        alt="ttd4t"
                        className="ml-12 w-[63%] h-auto rounded-[50%]"
                     />
                  </div>
                  <div className="w-1/2 flex flex-col items-center self-center">
                     <AnimatedText
                        text="Make the future into reality with code and logic."
                        className="!text-6xl !text-left"
                     />
                     <p className="my-5 text-base font-medium">
                        As a skilled Back-End developer, I do my best with my
                        brain to turn ideas into logical code.Explore my latest
                        projects and articles, showcasing my expertise in
                        Node.js & JS and web development.
                     </p>
                     <div className="flex items-center self-start mt-2">
                        <Link
                           href="/cv_ttd.pdf"
                           target={'_blank'}
                           className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-primary hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-primary hover:dark:text-light hover:dark:border-light"
                           download={true}>
                           Resume <LinkArrow className={'w-6 ml-1'} />
                        </Link>
                        <Link
                           href="mailto:jsmsj04@gmail.com"
                           target={'_blank'}
                           className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light">
                           Contact
                        </Link>
                     </div>
                  </div>
               </div>
            </Layout>
            <HireMe />
            <div className="absolute right-8 bottom-24 inline-block w-24">
               <Image src={lightBulb} alt="ttd4t" className="w-full h-auto" />
            </div>
         </main>
      </>
   );
}
