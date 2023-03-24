import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { GitBucket, GitHub, GitLab } from "../common/components/icons/Icons";
import logo from "/public/favicon/logo.svg";
import logo1 from "/public/favicon/favicon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Signup: NextPage = () => {
  const displayText = [
    "Always ready",
    "Automated development setup",
    "Continues project prebuild",
    "Team collaboration"
  ];
  return (
    <>
      <Head>
        <title>OnCode - Join The Community Of Online Coders</title>
      </Head>
      <div className='h-screen w-screen overflow-x-hidden flex'>
        <div className='w-2/6 h-full px-16 pt-24 flex flex-col gap-10'>
          <div className='flex items-center gap-4'>
            <h1 className='text-4xl font-normal'>Welcome to</h1>
            <Image src={logo} alt='logo' />
          </div>
          <p className='text-xl w-4/5'>
            Super Fast, automated cloud development environments for
            collaboration,no setup, in seconds.
          </p>
          <div className='flex flex-col gap-3'>
            <p className='text-lg text-gray-600'>
              Start with your favorite git client
            </p>
            <div className='flex flex-col gap-3 w-4/5'>
              <button className='bg-gray-300 py-2 rounded-lg flex items-center px-10 gap-2'>
                <GitHub width={"37"} height={"37"} />
                <span>Continue with GitHub</span>
              </button>
              <button className='bg-indigo-600 py-2 rounded-lg flex items-center px-10 gap-2'>
                <GitLab width='37' height='37' />
                <span className='text-white'>Continue with GitLab</span>
              </button>
              <button className='bg-blue-600 py-2 rounded-lg flex items-center px-10 gap-2'>
                <GitBucket width='37' height='37' />
                <span className='text-white'>Continue with BitBucket</span>
              </button>
            </div>
            <p className='absolute bottom-5'>@oncode 2022</p>
          </div>
        </div>
        <div className='w-4/6 h-full bg-blue-50'>
          <div className='h-[15em] w-full flex flex-wrap overflow-hidden gap-[2px]'>
            {Array(100)
              .fill(1)
              .map((num, index) => (
                <div
                  key={index}
                  className='border w-16 h-14'
                  draggable={false}
                ></div>
              ))}
          </div>
          <div className='px-14 py-4 flex flex-col gap-3'>
            <div>
              <Image src={logo1} alt='logo' />
            </div>
            <h1 className='text-4xl font-medium w-1/2 text-blue-600'>
              Ready to Code Every time, Everywhere
            </h1>
            <div className='py-4 flex flex-col gap-3'>
              {displayText.map((text) => (
                <span key={text} className='flex gap-3 items-center'>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className='text-green-500 text-3xl'
                  />
                  <p className='text-2xl'> {text}</p>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
