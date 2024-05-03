import { Span } from "next/dist/trace";
import Image from "next/image";

export default function Home() {
  return (
    <main classNameName="">

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medixl text-center text-gray-900 mb-20">Raw Denim Heirloom Man Braid
            <br className="hidden sm:block" />Selfies Wayfarers
          </h1>

          <div className="grid grid-cols-4">
            <div className="ser border p-4 py-16 hover:text-white hover:bg-black">
              <div className="icon-name flex flex-col-2 items-center pb-8" >
                <div className="w-12 h-12 mr-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>

                <h2 className="text-2xl font-bold mb-2">Mobile Application</h2>
              </div>

              <p className="leading-relaxed text-sm">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
            </div>

            <div className="ser border p-4 py-16 hover:text-white hover:bg-black">
              <div className="icon-name flex flex-col-2 items-center pb-8" >
                <div className="w-12 h-12 mr-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>

                <h2 className="text-2xl font-bold mb-2">Mobile Application</h2>
              </div>

              <p className="leading-relaxed text-sm">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
            </div>

            <div className="ser border p-4 py-16 hover:text-white hover:bg-black">
              <div className="icon-name flex flex-col-2 items-center pb-8" >
                <div className="w-12 h-12 mr-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>

                <h2 className="text-2xl font-bold mb-2">Mobile Application</h2>
              </div>

              <p className="leading-relaxed text-sm">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
            </div>

            <div className="ser border p-4 py-16 hover:text-white hover:bg-black">
              <div className="icon-name flex flex-col-2 items-center pb-8" >
                <div className="w-12 h-12 mr-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>

                <h2 className="text-2xl font-bold mb-2">Mobile Application</h2>
              </div>

              <p className="leading-relaxed text-sm">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
            </div>

          </div>
        </div>
      </section>


      <section className="technology">
        <div className="container mx-auto md:w-[60%]">
          <div className="flex flex-col text-center tech-contant">
            <h2 className="text-4xl md:text-8xl lg:text-8xl font-black py-4">Technology</h2>
            <h3 className="text-3xl font-semibold uppercase md:mx-auto py-4 lg:leading-relaxed">Accelerating Business Growth With High-Tech Tools And Assets For Ultimate Success</h3>
            <p class="hasAniTitle text-lg font-normal ">
                <span>With a keen track of the latest technological breakthroughs and improvements, COMPANY enjoys</span>
            </p>
          </div>
        </div>

        <div className="animation-technology flex flex-col">
          <span className="tech-1 font-light text-9xl leading-relaxed">Unity 3D Game</span>

          <span className="tech-2 font-light text-9xl leading-relaxed">Unreal Engine Game</span>

          <span className="tech-3 font-light text-9xl leading-relaxed">Flutter App Development</span>

          <span className="tech-4 font-light text-9xl leading-relaxed">React Native App Development</span>

          <span className="tech-5 font-light text-9xl leading-relaxed">NFT Game Development</span>
        </div>
      </section>

      <section className="featured">
        <div className="fea-text py-20">
          <h3 className="md:text-[200px] leading-[1] font-extrabold text-black capitalize">featured
            <span className="md:text-[200px] block stroke-h">Project</span>
          </h3>

          <p class="hasAniTitle text-lg font-normal text-center">
                <span>With a keen track of the technological technological breakthroughs and improvements, COMPANY enjoys</span>
            </p>
        </div>


        <div className="project-1 py-14 hover:text-white">
          <div className="grid grid-cols-6 gap-4 items-center">
          <div class="grid-span-2 col-start-1 col-end-3 mx-auto text-center">
            <Image src={'/felicia-logo.webp'} width={131} height={131}/>
            <h2 className="text-2xl font-bold capitalize">project name</h2>
          </div>
          <div class="col-start-3 col-end-6 grid-span-4">
            <h3 className="text-6xl font-bold capitalize leading-normal">technological track improvements.</h3>
            <h2 className="text-2lg font-medium capitalize leading-7">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy.</h2>
          </div>
          </div>
        </div>

        <div className="project-2 py-14 hover:text-white">
          <div className="grid grid-cols-6 gap-4 items-center">
          <div class="grid-span-2 col-start-1 col-end-3 mx-auto text-center">
            <Image src={'/felicia-logo.webp'} width={131} height={131}/>
            <h2 className="text-2xl font-bold capitalize">project name</h2>
          </div>
          <div class="col-start-3 col-end-6 grid-span-4">
            <h3 className="text-6xl font-bold capitalize leading-normal">technological track improvements.</h3>
            <h2 className="text-2lg font-medium capitalize leading-7">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy.</h2>
          </div>
          </div>
        </div>

        <div className="project-3 py-14 hover:text-white">
          <div className="grid grid-cols-6 gap-4 items-center">
          <div class="grid-span-2 col-start-1 col-end-3 mx-auto text-center">
            <Image src={'/felicia-logo.webp'} width={131} height={131}/>
            <h2 className="text-2xl font-bold capitalize">project name</h2>
          </div>
          <div class="col-start-3 col-end-6 grid-span-4">
            <h3 className="text-6xl font-bold capitalize leading-normal">technological track improvements.</h3>
            <h2 className="text-2lg font-medium capitalize leading-7">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy.</h2>
          </div>
          </div>
        </div>


      </section>

    </main>
  );
}
