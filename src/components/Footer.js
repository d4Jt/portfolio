import React from 'react';
import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
   return (
      <footer className="mt-12 w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
         <Layout className="py-4 flex items-center justify-between xl:py-4 lg:py-4 lg:flex-col md:py-6 sm:py-6">
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className="flex items-center mr-36 lg:mr-0 lg:py-2">
               Build With{' '}
               <span className="text-primary text-2xl px-1">&#9825;</span>{' '}
               by&nbsp;
               <Link
                  href="https://github.com/d4Jt"
                  target={'_blank'}
                  className="underline underline-offset-2">
                  d4Jt
               </Link>
            </div>
            <Link
               href="https://www.facebook.com/t.d4Jt/"
               target={'_blank'}
               className="underline underline-offset-2">
               Say hello
            </Link>
         </Layout>
      </footer>
   );
};

export default Footer;
