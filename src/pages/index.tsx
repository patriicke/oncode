/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "/public/favicon/logo.svg";
import github from "/public/assets/companies/github.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const HomePage: NextPage = () => {
  const links: {
    name: string;
    href: string;
  }[] = [
    {
      name: "Docs",
      href: "/docs"
    },
    {
      name: "Blog",
      href: "/blog"
    },
    {
      name: "Features",
      href: "/features"
    },
    {
      name: "Sponsors",
      href: "/sponsors"
    },
    {
      name: "About",
      href: "/about"
    }
  ];
  return (
    <>
      <Head>
        <title>OnCode</title>
      </Head>
      <div className='h-screen w-screen min-h-screen overflow-scroll overflow-x-hidden bg-home'>
        <div className='relative min-h-screen'>
          <div className='absolute h-full w-full z-0 top-0 max-w-2xl'>
            <div className='h-full w-full relative'>
              <div className='absolute flex justify-evenly h-full w-screen'>
                <div className='w-56 h-full bg-bluish bg-opacity-5 bg-gradient-to-b'></div>
                <div className='w-56 h-full bg-greenish bg-opacity-5 bg-gradient-to-b'></div>
              </div>
              <div className='absolute bottom-0 bg-red h-80 w-screen flex flex-col z-10'>
                <div className='h-1/2 w-screen overflow-hidden flex relative'>
                  {Array(100)
                    .fill("")
                    .map((text: string, index: number) => (
                      <div
                        key={index}
                        className={` ${
                          (index + 1) % 3 != 0
                            ? "border-[1px] min-w-[12em] h-full border-gray-300 border-opacity-10"
                            : `min-w-[12em] h-full blur-lg rounded-[40%] bg-opacity-30 ${
                                index % 2 == 0 ? "bg-greenish" : "bg-purple"
                              } `
                        }`}
                      ></div>
                    ))}
                </div>
                <div className='h-1/2 w-screen overflow-hidden flex'>
                  {Array(100)
                    .fill("")
                    .map((text: string, index: number) => (
                      <div
                        key={index}
                        className='border-[1px] min-w-[12em] h-full border-gray-300 border-opacity-10'
                      ></div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className='h-screen w-full z-50 absolute max-w-screen'>
            <div className='h-24 w-screen p-4 md:px-12 flex items-center justify-between'>
              <div className='w-36 h-full flex items-center'>
                <div className='hidden md:block w-full'>
                  <Image src={logo} alt='logo' />
                </div>
                <div className='flex md:hidden w-14 items-center justify-center'>
                  <FontAwesomeIcon
                    icon={faBars}
                    className='text-white text-2xl'
                  />
                </div>
              </div>
              <div className='hidden w-fit text-white md:flex gap-5 text-lg'>
                {links.map((link) => (
                  <Link href={link.href} key={link.name}>
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className='w-fit flex items-center gap-3 md:gap-6 text-lg text-white justify-center'>
                <div className='w-8 flex items-center justify-center cursor-pointer'>
                  <Image src={github} alt='GitHub' />
                </div>
                <div>
                  <Link href='/signup' className='cursor-pointer text-sm'>
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
            <div className='h-[calc(100vh_-_6rem)] min-h-[calc(100vh_-_6rem)] p-4 w-4/5 lg:w-3/5 m-auto flex items-center pt-[5em] flex-col gap-10'>
              <h1 className='text-[2.5em] md:text-[3.5em] xl:text-[3em] 2xl:text-[5em] text-white text-center'>
                Always code with Super fast cloud tooling
              </h1>
              <p className='lg:w-2/4 text-white text-[1.2em] md:text-[1.4em] text-center'>
                Super Fast, automated cloud development environments for
                collaboration,no setup, in seconds.
              </p>
              <Link href={"/signup"}>
                <button className='bg-white p-4 px-12 text-xl rounded-[3em]'>
                  Get started
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className='min-h-screen flex px-3 flex-col items-center justify-center gap-5 lg:flex-row'>
          <div className='w-full lg:w-1/2 flex flex-col justify-center items-center gap-10 text-white text-center'>
            <h1 className='font-semibold text-4xl lg:w-2/3'>
              Work on any computer - anywhere
            </h1>
            <p className='lg:w-2/3 text-lg '>
              Start with templated, standard dev environment in seconds with
              pre-configured environments or start with your personalized
              environment from any git context, everything must be distributed!
            </p>
          </div>
          <div className='w-full lg:w-1/2 flex items-center justify-center'>
            <div className='w-[30em] h-[30em] lg:w-[40em] lg:h-[40em] bg-gray-300 rounded-[3em] shadow-lg'></div>
          </div>
        </div>
        <div className='min-h-screen flex px-3 flex-col items-center justify-center gap-5 lg:flex-row bg-white rounded-t-[3em] lg:rounded-t-[6em]'>
          <div className='w-full lg:w-1/2 flex items-center justify-center'>
            <div className='w-[30em] h-[30em] lg:w-[40em] lg:h-[40em] bg-gray-300 rounded-[3em] shadow-lg'></div>
          </div>
          <div className='w-full lg:w-1/2 flex flex-col justify-center items-center gap-10 text-center text-home'>
            <h1 className='font-semibold text-4xl lg:w-2/3'>
              Development tracking has never been easier
            </h1>
            <p className='lg:w-2/3 text-lg '>
              All you need to do is create a group or share a link to the
              project and you're all set. Collaboration and monitoring
              development process have never been easier. All in real-time
            </p>
          </div>
        </div>
        <div className='min-h-screen flex px-3 flex-col items-center justify-center gap-5 lg:flex-row bg-white'>
          <div className='w-full lg:w-1/2 flex flex-col justify-center items-center gap-10 text-center text-home'>
            <h1 className='font-semibold text-4xl lg:w-2/3'>
              Development tracking has never been easier
            </h1>
            <p className='lg:w-2/3 text-lg '>
              All you need to do is create a group or share a link to the
              project and you're all set. Collaboration and monitoring
              development process have never been easier. All in real-time
            </p>
          </div>
          <div className='w-full lg:w-1/2 flex items-center justify-center'>
            <div className='w-[30em] h-[30em] lg:w-[40em] lg:h-[40em] bg-gray-300 rounded-[3em] shadow-lg'></div>
          </div>
        </div>
        <div className='min-h-screen flex px-3 flex-col items-center justify-center gap-5 lg:flex-row bg-white'>
          <div className='w-full lg:w-1/2 flex items-center justify-center'>
            <div className='w-[30em] h-[30em] lg:w-[40em] lg:h-[40em] bg-gray-300 rounded-[3em] shadow-lg'></div>
          </div>
          <div className='w-full lg:w-1/2 flex flex-col justify-center items-center gap-10 text-center text-home'>
            <h1 className='font-semibold text-4xl lg:w-2/3'>
              Where teams code together
            </h1>
            <p className='lg:w-2/3 text-lg '>
              Share running projects with your team for pair programming, use
              port forwarding or share a snapshot as a copy of your workspace
              with teammates.
            </p>
            <Link href={"/signup"}>
              <button className='bg-blue-btn p-4 px-12 text-xl rounded-[3em] text-white'>
                Get started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
