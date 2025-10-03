import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      {/* Red top bar */}
      <div className="h-2 bg-[#D94A4A]" />

      {/* Main content section */}
      <section className="relative bg-[#1A1A1A] px-6 pb-8 pt-12 md:px-12 md:pb-10 lg:px-16 lg:pb-12">
        {/* Heading */}
        <h1 className="m-text-balance text-center font-beba text-5xl font-black uppercase leading-tight text-white md:text-7xl lg:text-8xl xl:text-9xl">
          For all the <span className="text-[#8B7FD9]">Degens</span> out there.
        </h1>

        {/* Content grid */}
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Character image */}
          <div className="relative z-10 mx-auto w-full max-w-md lg:max-w-none">
            <Image
              src="/about.png"
              alt="Sloose character"
              width={500}
              height={600}
              className="h-auto w-full"
              priority
            />
          </div>

          {/* Text content */}
          <div className="relative z-20 space-y-6">
            <h2 className="font-beba text-3xl font-bold uppercase text-white md:text-4xl">
              About <span className="text-[#8B7FD9]">Sloose</span>
            </h2>

            <p className="font-beba text-base leading-relaxed text-gray-300 md:text-lg">
              Loose is our inner degen cut free—raw, chaotic, and alive. Through daily live streams on PumpFun,{" "}
              <Link
                href="https://x.com/mariaartpro"
                target="_blank"
                className="text-[#8B7FD9] hover:underline"
              >
                @mariaartpro
              </Link>{" "}
              brings this character to life, channeling pure emotion into art. On X and socials, Loose
              shifts through different forms, always expressing freedom at its core.
            </p>

            <div className="relative flex items-center">
              <Link href="https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=GSSPA5zDNqpmao8BFnUHnnQrc3tgUeoVSesXtHhxpump" target="_blank">
                <Button
                  size="lg"
                  className="bg-[#8B7FD9] px-8 py-6 font-beba text-base font-semibold text-white hover:bg-[#7A6EC8]"
                >
                  Buy Now!
                </Button>
              </Link>

              {/* Decorative arrow */}
              <Image
                src="/arrow_10.svg"
                alt=""
                width={180}
                height={90}
                className="absolute -right-4 top-1/2 h-auto w-24 -translate-y-1/3 left-28  md:w-32 lg:w-64"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
