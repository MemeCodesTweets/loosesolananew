import Image from "next/image"
import ImageScrollerWrapper from "./ImageScrollWrapper"
import Ticker from "./Ticker"

export default function Hero() {
  return (
    <section className="pt-20 font-beba relative min-h-screen flex items-start justify-center bg-cover bg-center bg-no-repeat bg-[url('/backgrounds/bg1.png')]">
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/90" />

      {/* content */}
      <div className="relative z-10 w-full">
        <div className="mx-auto w-full py-4 sm:py-6 text-center">
          {/* responsive text */}
          <h1 className="text-white uppercase leading-none 
                         text-5xl sm:text-6xl md:text-8xl lg:text-9xl">
            DON&apos;T LOSE <span className="text-loose">$LOOSE</span>
          </h1>

          {/* responsive image */}
          <div className="mx-auto w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl">
            <div className="relative w-full aspect-[846/583]">
              <Image
                src="/hero.png"
                alt="Hero visual"
                fill
                className="object-contain rounded-2xl shadow-lg"
                sizes="
                  (min-width: 1280px) 672px, 
                  (min-width: 1024px) 512px, 
                  (min-width: 768px) 448px, 
                  (min-width: 640px) 384px, 
                  90vw
                "
                priority
              />
            </div>
          </div>

          <ImageScrollerWrapper />
        </div>
      </div>
    </section>
  )
}
