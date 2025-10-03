import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Buy() {
  return (
    <section className="relative w-full font-beba bg-[#E8DDD0] py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/backgrounds/bg1.png')] bg-cover bg-center opacity-3 pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="relative mx-auto w-full max-w-6xl px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="flex-1 w-full lg:w-auto">
            <p className="text-[#6A9175] uppercase text-3xl mb-2">How to Buy $LOOSE</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-black leading-wide mb-4 flex items-center gap-4">
              GET $LOOSE
              <br />
              TODAY
              <span className="flex items-center gap-4">
                <img
                  src="/Arrow_03.svg"
                  alt="Arrow"
                  className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 inline-block"
                />
              </span>
            </h1>

            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <img src="/money.png" alt="Loose-money" className="w-full h-auto" />
            </div>
          </div>

          {/* Right Column - Steps */}
          <div className="flex-1 w-full lg:w-auto space-y-8 font-sans text-black lg:border-l lg:pl-12 border-gray-300">
            {/* Step 1 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-[#3D3B38] text-white font-bold text-sm shrink-0">
                  1
                </div>
                <h3 className="text-xl text-black">Install Solana Wallet</h3>
              </div>
              <p className="text-sm text-black/75 leading-relaxed pl-11">
                Download and install the Phantom Wallet from the iOS/Android app store or as a browser extension.
              </p>
              <div className="pl-11">
                <Link href="https://phantom.com/download" target="_blank">
                  <Button className="bg-[#6A9175] text-white hover:bg-[#6A7B6E] px-6">
                    Get Phantom
                  </Button>
                </Link>
              </div>
            </div>  

            {/* Step 2 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-[#3D3B38] text-white font-bold text-sm shrink-0">
                  2
                </div>
                <h3 className="text-xl text-black">Fund with SOL</h3>
              </div>
              <p className="text-sm text-black/75 leading-relaxed pl-11">
                Add SOL to your new wallet (buy magic or transfer from an exchange).
              </p>
              <div className="pl-11">
                <Link href="https://www.moonpay.com/buy/sol" target="_blank">
                  <Button className="bg-[#3D3B38] hover:bg-[#2D3A32] text-white px-6">
                    Add Funds
                  </Button>
                </Link>
              </div>
            </div>

            {/* Step 3 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-[#3D3B38] text-white font-bold text-sm shrink-0">
                  3
                </div>
                <h3 className="text-xl text-black">Swap for $LOOSE</h3>
              </div>
              <p className="text-sm text-black/75 leading-relaxed pl-11">
                Open a DEX like Raydium and paste the official $LOOSE contract address from this site, then swap SOL → $LOOSE.
              </p>
              <div className="pl-11">
                <Link href="https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=GSSPA5zDNqpmao8BFnUHnnQrc3tgUeoVSesXtHhxpump" target="_blank">
                  <Button className="bg-[#3D3B38] hover:bg-[#2D3A32] text-white px-6">
                    Swap Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
