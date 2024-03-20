import Link from "next/link";
import Image from "next/image";

const MainSection = () => {
  return (
    <div className="bg-white flex flex-wrap overflow-x-hidden overscroll-x-none justify-center md:justify-around my-2">
      {/* Left Section */}
      <div className="flex flex-col">
        <div className="md:mt-12 mt-6 mb-[-1.5rem] md:ml-[-2rem] ml-[-1.2rem]">
          <Image
            src="https://somraj-s3-bucket.s3.us-east-2.amazonaws.com/portfolio/hello.svg"
            alt="Logo"
            width={80}
            height={56}
            className="h-14"
          />
        </div>
        <div className="text-left">
          <h1 className="text-5xl tracking-[5px] leading-tight font-bold">
            I am <br /> Developing🧑‍💻
            <br /> Deploying🚀 <br />
            Designing🎨
          </h1>
        </div>
        <p className="flex items-center mt-2">
          <Image
            src="https://somraj-s3-bucket.s3.us-east-2.amazonaws.com/portfolio/arrow.svg"
            alt="Arrow"
            width={39}
            height={2}
          />
          <span className="ml-2 ">
            From Pixels to Pipelines: Development,
            <br />
            DevOps, and Design in Harmony. 🚀
          </span>
        </p>
        <div className="flex mt-4">
          <Link href="#contact">
            <button className="flex items-center justify-center bg-indigo-600 hvr-call-action text-white font-bold py-4 px-6 mt-4 rounded-[20px] ">
              Let's Talk
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="24"
                  viewBox="0 0 28 24"
                  fill="none"
                >
                  <path
                    d="M26.9141 3.16466e-05C26.7499 0.00119853 26.5883 0.0344977 26.4415 0.0973858L0.595417 11.1741C0.429309 11.2453 0.287496 11.3521 0.183747 11.4841C0.0799981 11.6161 0.0178386 11.7689 0.00330403 11.9276C-0.0112306 12.0863 0.0223536 12.2455 0.100796 12.3898C0.179238 12.5341 0.299872 12.6585 0.450986 12.751L5.19056 15.6536L7.23362 20.9071C7.29579 21.0669 7.40777 21.2091 7.55745 21.3182C7.70713 21.4274 7.88879 21.4994 8.08277 21.5263C8.27675 21.5533 8.47564 21.5343 8.65791 21.4714C8.84019 21.4084 8.99889 21.3039 9.11683 21.1692L10.6341 19.4348L17.6733 23.823C17.8102 23.9085 17.9687 23.9651 18.136 23.9882C18.3032 24.0113 18.4745 24.0003 18.6358 23.9561C18.7972 23.9118 18.9441 23.8355 19.0646 23.7335C19.1851 23.6314 19.2758 23.5064 19.3293 23.3686L27.9447 1.21516C27.9989 1.07577 28.0135 0.927308 27.9874 0.782105C27.9612 0.636902 27.8949 0.499154 27.7941 0.380313C27.6933 0.261471 27.5609 0.164969 27.4078 0.0988272C27.2547 0.0326855 27.0855 -0.00118483 26.9141 3.16466e-05ZM23.9778 5.57566L17.7504 21.5874L11.9704 17.9853L23.9778 5.57566ZM18.4557 5.58408L6.07116 13.9241L3.15731 12.1393L18.4557 5.58408ZM19.736 7.06843L9.58938 17.5562C9.58798 17.5574 9.58658 17.5586 9.58518 17.5598L9.58097 17.5646C9.56989 17.576 9.55914 17.5877 9.54872 17.5995C9.53711 17.6121 9.52589 17.6249 9.51506 17.638L8.62745 18.6512L7.36403 15.4L19.736 7.06843Z"
                    fill="white"
                  />
                </svg>
              </span>
            </button>
          </Link>
          <Link href="/services">
            <button className="flex items-center text-black justify-center bg-white hover:bg-pink-300 font-bold py-4 px-6 mt-4 rounded-[20px]  ml-4">
              Services
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <path
                    d="M16.0005 0.706961C15.8457 0.558911 15.6348 0.481516 15.4124 0.491214L4.13632 0.980613C4.02275 0.983234 3.90918 1.00853 3.80224 1.05503C3.6953 1.10152 3.59716 1.16828 3.51355 1.25139C3.42995 1.3345 3.36256 1.43229 3.31534 1.53904C3.26811 1.64579 3.24201 1.75935 3.23854 1.87306C3.23508 1.98678 3.25433 2.09836 3.29517 2.20129C3.336 2.30421 3.3976 2.39641 3.47636 2.47247C3.55512 2.54854 3.64946 2.60694 3.75384 2.64426C3.85822 2.68159 3.97056 2.69708 4.08427 2.68984L13.298 2.28995L1.10608 14.6405C1.0225 14.723 0.954939 14.8201 0.907333 14.9262C0.859727 15.0324 0.833025 15.1453 0.828774 15.2586C0.824524 15.3719 0.842811 15.4833 0.882576 15.5862C0.922339 15.6892 0.982786 15.7816 1.0604 15.8582C1.13802 15.9349 1.23126 15.9941 1.3347 16.0325C1.43814 16.071 1.54972 16.0878 1.66296 16.0821C1.7762 16.0764 1.88883 16.0482 1.99431 15.9993C2.0998 15.9503 2.19604 15.8815 2.27742 15.7968L14.4694 3.44625L14.1886 12.6644C14.1829 12.7782 14.1998 12.8903 14.2385 12.9942C14.2771 13.0981 14.3368 13.1917 14.4138 13.2695C14.4909 13.3472 14.5839 13.4076 14.6873 13.4471C14.7908 13.4866 14.9026 13.5044 15.0163 13.4995C15.1299 13.4946 15.2431 13.467 15.3493 13.4184C15.4554 13.3698 15.5523 13.3012 15.6343 13.2165C15.7164 13.1318 15.7818 13.0328 15.8269 12.9253C15.8721 12.8177 15.8959 12.7039 15.897 12.5903L16.2406 1.30875C16.2441 1.19445 16.2247 1.0823 16.1834 0.978934C16.1422 0.875568 16.08 0.783087 16.0005 0.706961Z"
                    fill="black"
                  />
                </svg>
              </span>
            </button>
          </Link>
        </div>
        <div className="flex items-center md:mt-8 py-4 md:py-0 justify-center md:justify-start">
          <p className="mr-2 font-semibold">Reach Out To My Accounts - </p>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/somraj2929"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2"
            >
              <Image
                src="https://somraj-s3-bucket.s3.us-east-2.amazonaws.com/portfolio/github.png"
                alt="GitHub"
                width={48}
                height={48}
                className="h-9 w-auto"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/somraj29/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://somraj-s3-bucket.s3.us-east-2.amazonaws.com/portfolio/linkedin.png"
                alt="LinkedIn"
                width={48}
                height={48}
                className="h-8 w-auto"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex mb-8 ">
        <div className="relative flex-wrap hidden md:block">
          {/* SomrajPP image */}
          <Image
            src="https://somraj-s3-bucket.s3.us-east-2.amazonaws.com/portfolio/SomrajPP.svg"
            alt="Hero"
            width={774}
            height={845}
            className="w-[30rem] bg-transparent"
          />

          {/* Paragraph text - Top Right */}
          <div className="absolute top-2 mr-[-2rem] right-0 p-8 text-white text-right">
            <p className="text-xl font-semibold text-black text-left">
              "Simplicity is the <br /> &nbsp;&nbsp;soul of efficiency.”
            </p>
          </div>

          {/* About Me image - Centered at the Bottom */}
          <div className="absolute bottom-6 ml-[-1.5em] left-1/2 transform -translate-x-1/2 p-6 ">
            <Link href="services">
              <Image
                src="https://somraj-s3-bucket.s3.us-east-2.amazonaws.com/portfolio/aboutme.svg"
                alt="About Me"
                width={240}
                height={112}
                className="h-28 about-me mx-auto"
              />
            </Link>
          </div>
        </div>
        <div className="right-0 absolute mr-4 hidden md:block">
          <Image
            src="https://somraj-s3-bucket.s3.us-east-2.amazonaws.com/portfolio/scrolldown.svg"
            alt="Scroll Down"
            width={25}
            height={548}
          />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
