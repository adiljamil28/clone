import Image from "next/image";

export default function Logo() {
  return (
    <main classNameName="">

      {/* <div className="flex justify-center bg-blue-900 text-white ">
      <nav className="self-center w-full  ">
          <div className="flex md:flex-row flex-col  justify-between items-center md:items-start">
              <h1 className=" py-4 text-2xl font-sans font-bold px-10">Portfolio</h1>
              <ul className="flex justify-center my-4  items-center text-sm md:text-[18px] font-bold  md:px-10">
                  <li
                      className="hover:underline  underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
                      <a href="#">Home</a>
                  </li>
                  <li
                      className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
                      <a href="#">Contact</a>
                  </li>
                  <li
                      className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
                      <a href="#">Services</a>
                  </li>
                  <li
                      className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
                      <a href="#">About</a>
                  </li>

              </ul>

          </div>
      </nav>
  </div> */}

      <div className="flex justify-center  bg-blue-900 p-5 md:p-16 lg:p-28 rounded-2xl md:m-14 main-banner">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-base font-medium tracking-wider ">Welcome to my Client Template</h1>
          <span className="underline underline-offset-2 text-white -mt-3"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; </span>
          <div className="flex flex-col text-white mt-5">
            <h1 className="text-4xl md:text-[50px] font-semibold">Hello I'm John Watson</h1>
            <p className="text-xl mt-2 md:mt-4 tracking-wide">Designer - Developer - Freelancer</p>
          </div>
          <p className="mt-4 text-sm md:w-[52%] tracking-wide leading-7">Tailblocks provides best Tailwind CSS
            components. Visit our website and feel free to give feedback. With the help of Tailblocks, a user can
            build a website in a much lesser time.</p>

          {/* <div className="space-x-3 mt-6 md:mt-4">
                <a href="#"> <i
                        className="fa-brands fa-facebook-f bg-blue-600 hover:text-blue-500 hover:bg-white rounded-2xl px-3 py-[11px] w-9 h-9 text-center "></i>
                </a>
                <a href="#"> <i
                        className="fa-brands fa-twitter bg-blue-600 hover:text-red-500 hover:bg-white rounded-2xl px-[10px] py-[11px] w-9 h-9 text-center"></i>
                </a>
                <a href="#"> <i
                        className="fa-brands fa-linkedin bg-blue-600 hover:text-yellow-500 hover:bg-white rounded-2xl px-3 py-[11px] w-9 h-9 text-center"></i>
                </a>
                <a href="#"> <i
                        className="fa-brands fa-chrome bg-blue-600 hover:text-indigo-600 hover:bg-white rounded-2xl px-[10px] py-[11px] w-9 h-9 text-center"></i>
                </a>

            </div> */}
          <div className="flex mt-10 space-x-5">
            <button className="bg-white text-blue-600 px-6 py-2 hover:brightness-105 font-semibold">Read More</button>
            <button
              className="bg-blue-900 text-white border-2 border-white px-6 py-2 hover:brightness-105 font-semibold">Contact
              Me</button>

          </div>
        </div>

        <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
          <div class="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
          <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
          <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
          <div class="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
          <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png" class="dark:hidden w-[272px] h-[572px]" alt="" />
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt="" />
          </div>
        </div>


      </div>



      <div className="flex justify-center my-12 ">
        <div className="flex flex-col items-center justify-center">

          <div className="flex flex-col  justify-center items-center space-y-3 w-full ">
            <div className="flex flex-col   md:items-start items-center justify-center  space-y-3 text-center ">
              <div className="text-3xl md:text-8xl font-extrabold py-8 lg:px-24">
                Make Your Fashion Look More Charming</div>
            </div>
            <div
              className="flex flex-col lg:flex-row space-x-2 space-y-3 md:space-x-6   w-full items-center justify-center ">

              <div className="overflow-hidden rounded-xl ">
                <img src="https://source.unsplash.com/random/300x500/?man
                                    
                                                            " alt="" className="" />
              </div>
              <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center">
                <div className="overflow-hidden rounded-xl ">
                  <img src="https://source.unsplash.com/random/300x500/?man
                                    
                                                                " alt="" className="" />
                </div>
                <div className="overflow-hidden rounded-xl ">
                  <img src="https://source.unsplash.com/random/300x500/?man
                                    
                                                                " alt="" className="" />
                </div>
              </div>
              <div className="overflow-hidden rounded-xl ">
                <img src="https://source.unsplash.com/random/300x500/?man
                                    
                                                            " alt="" className="" />
              </div>
              <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center ">
                <div className="overflow-hidden rounded-xl ">
                  <img src="https://source.unsplash.com/random/300x500/?man
                                    
                                                                " alt="" className="" />
                </div>
                <div className="overflow-hidden rounded-xl ">
                  <img src="https://source.unsplash.com/random/300x500/?man
                                    
                                                                " alt="" className="" />
                </div>
              </div>
              <div className="overflow-hidden rounded-xl ">
                <img src="https://source.unsplash.com/random/300x500/?man
                                    
                                                            " alt="" className="" />
              </div>


            </div>

          </div>
        </div>
      </div>


      {/* ------------------------------------- counter section start------------------------  */}


      <div class="flex items-center justify-center">
        <div class="flex-col items-center justify-center text-gray-800 text-center">
          <div class="flex items-center justify-center">
            <div class="flex items-center justify-center md:text-8xl text-4xl lg:text-8xl font-bold px-24">Tailblocks is the best website for Tailwind CSS Blocks</div>
          </div>

          <div class="flex">

            <div class="flex md:flex-row flex-col p-4 space-x-4 justify-around w-full h-auto lg:h-60 items-center ">
              <div class=" w-[100%] md:w-1/2 bg-gray-200 py-10 rounded-2xl flex items-center justify-center ml-4">
                <div class="flex-col  items-center px-0 md:px-6">
                  <div class="text-7xl font-black bg-gradient-to-r from-blue-400 to-emerald-400  bg-clip-text text-transparent">98%</div>
                  <div class="text-md mt-8 font-bold text-gray-800">Tailblocks has gained 98% users this year</div>
                  <div class="text-xs font-medium text-gray-800">Tailblocks has more than 15k+ visitors per month.</div>
                </div>
              </div>
              <div class=" w-[100%] md:w-1/2 bg-gray-200 py-10 rounded-2xl flex items-center justify-center ml-4">
                <div class="flex-col  items-center px-0 md:px-6">
                  <div class="text-7xl font-black bg-gradient-to-l from-fuchsia-500 to-orange-500  bg-clip-text text-transparent">128%</div>
                  <div class="text-md mt-8 font-bold text-gray-800">Tailblocks has 128% new impressions this year</div>
                  <div class="text-xs font-medium text-gray-800">Tailblocks has more than 15k+ visitors per month.</div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>


      {/* ------------------------------------- counter section end------------------------  */}

      {/* -----------------------------TEAM SECTION START------------------*/}


      <div class="flex items-center justify-center text-center my-12 meet bg-[#1b1a1a] py-12">
        <div class="flex flex-col ">
          <div class="text-5xl md:text-9xl lg:text-9xl text-white my-6 font-extrabold">Meet Our Team</div>
          <div class="text-sm  md:text-xl text-white mb-6">Meet the team member who have contributed their designs for this websites.</div>


          <div class="flex items-center gap-x-28 md:flex-row flex-col">

            <div class="flex items-center">
              <div class="rounded-2xl overflow-hidden">

                <img src="https://source.unsplash.com/300x300/?man,businessman" alt="" class="" />
              </div>

            </div>
            <div class="flex items-center">
              <div class="rounded-2xl overflow-hidden">

                <img src="https://source.unsplash.com/300x300/?boy" alt="" class="" />
              </div>

            </div>
            <div class="flex items-center">
              <div class="rounded-2xl overflow-hidden">

                <img src="https://source.unsplash.com/300x300/?girl" alt="" class="" />
              </div>
            </div>

          </div>

        </div>
      </div>
      {/* -----------------------------TEAM SECTION END------------------*/}


      {/* -----------------------------AWARD BAGES SECTION START------------------*/}

      <section class="body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">

            <div class="lg:w-1/5 md:w-1/2 p-4 w-full text-center border-dashed border-2 border-r-0">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center mx-auto" src="/awardlogo2.webp" />
              </a>
              <div class="mt-4">
                <h3 class="text-black text-lg  title-font mb-1 font-bold">Top Mobile App Development Company</h3>
                <h2 class="text-black title-font text-xs font-semibold">AppFutura recognized our teams and organization for being one of the top mobile app development companies.</h2>

              </div>
            </div>

            <div class="lg:w-1/5 md:w-1/2 p-4 w-full text-center border-dashed border-2 border-r-0">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center mx-auto" src="awardlogo5.webp" />
              </a>
              <div class="mt-4">
                <h3 class="text-black text-lg  title-font mb-1 font-bold">Top Mobile App Development Company</h3>
                <h2 class="text-black title-font text-xs font-semibold">AppFutura recognized our teams and organization for being one of the top mobile app development companies.</h2>

              </div>
            </div>

            <div class="lg:w-1/5 md:w-1/2 p-4 w-full text-center border-dashed border-2 border-r-0">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center mx-auto" src="awardlogo1.webp" />
              </a>
              <div class="mt-4">
                <h3 class="text-black text-lg  title-font mb-1 font-bold">Top Mobile App Development Company</h3>
                <h2 class="text-black title-font text-xs font-semibold">AppFutura recognized our teams and organization for being one of the top mobile app development companies.</h2>

              </div>
            </div>

            <div class="lg:w-1/5 md:w-1/2 p-4 w-full text-center border-dashed border-2 border-r-0">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center mx-auto" src="awardlogo7.webp" />
              </a>
              <div class="mt-4">
                <h3 class="text-black text-lg  title-font mb-1 font-bold">Top Mobile App Development Company</h3>
                <h2 class="text-black title-font text-xs font-semibold">AppFutura recognized our teams and organization for being one of the top mobile app development companies.</h2>

              </div>
            </div>


            <div class="lg:w-1/5 md:w-1/2 p-4 w-full text-center border-dashed border-2">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center mx-auto" src="best-digital-agency.webp" />
              </a>
              <div class="mt-4">
                <h3 class="text-black text-lg  title-font mb-1 font-bold">Top Mobile App Development Company</h3>
                <h2 class="text-black title-font text-xs font-semibold">AppFutura recognized our teams and organization for being one of the top mobile app development companies.</h2>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* -----------------------------AWARD BAGES SECTION END------------------*/}

      {/* -----------------------------HALF/N/HALF SECTION SECTION START------------------*/}

      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div class="w-full sm:p-4 px-4 mb-6">
              <h1 class="title-font font-semibold text-5xl mb-6 text-white leading-normal">Moon hashtag pop-up try-hard offal truffaut</h1>
              <div class="leading-relaxed">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-white">2.7K</h2>
              <p class="leading-relaxed">Users</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-white">1.8K</h2>
              <p class="leading-relaxed">Subscribes</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-white">35</h2>
              <p class="leading-relaxed">Downloads</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-white">4</h2>
              <p class="leading-relaxed">Products</p>
            </div>
          </div>
          <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img class="object-cover object-center w-full h-full" src="/side1.jpg" alt="stats" />
          </div>
        </div>
      </section>

      {/* -----------------------------AWARD BAGES SECTION END------------------*/}


            {/* -----------------------------CTA SECTION START------------------*/}
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-white">Slow-carb next level shoinddgoitch ethical authentic, scenester sriracha forage.</h1>
            
            
            <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] ">
          <div class="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
          <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
          <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
          <div class="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
          <div class="rounded-[2rem] w-[300px] h-[150px] bg-white dark:bg-gray-800">
          <video class="vide" id="vide" autoplay="" loop="" muted=""  src="https://videos.ctfassets.net/0g2c0d4v74kt/7JddRckDmiDTFoj2zkuibz/19a06bc6173d8b205ead99ba8b0a0307/brand-vid.mp4"/>
          </div>
        </div>
          </div>
        </div>
      </section>
            {/* -----------------------------CTA SECTION END------------------*/}


    </main>
  );
}
