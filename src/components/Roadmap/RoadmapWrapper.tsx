import Image from "next/image"

export default function RoadmapPage() {
  return (
    <div className=" bg-[#8568D8] relative overflow-hidden">
      {/* Top Character Illustration */}
      <div className="relative mx-auto w-40 sm:w-68 md:w-64 lg:absolute lg:top-8 lg:right-8 lg:w-80 xl:w-96 z-10 pointer-events-none rotate-[17deg]">
        <Image
          src="/roadmap.png"
          alt="Character driving vehicle"
          width={800}
          height={400}
          className="w-full h-auto mx-auto"
        />
      </div>

      {/* Main Content */}
      <div className=" mx-auto px-6 py-12 lg:py-16 relative z-20 max-w-6xl">
        {/* Header */}
        <div className="mb-12 lg:mb-16 font-beba text-left">
          <h2 className="text-white text-3xl mb-2 uppercase">ROADMAP</h2>
          <h1 className="text-white text-4xl lg:text-5xl xl:text-6xl mb-4 uppercase">
            A LONG WAY TO GO!
          </h1>
          <p className="font-sans text-white/90 text-xs lg:text-sm max-w-xl leading-relaxed">
            I'm Maria (@mariartpro) — illustrator, artist, and creator of $LOOSE.
            After 120+ web3 collaborations, here's what you can look forward to next!
          </p>
        </div>

        {/* TWO COLUMNS */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 text-white/90">
          {/* LEFT: $LOOSE (25%) */}
          <div className="hidden lg:flex justify-center font-beba col-span-1">
            <h1 className="text-[12rem] tracking-widest rotate-180 [writing-mode:vertical-rl] text-transparent [-webkit-text-stroke:2px_white] opacity-40">
              $LOOSE
            </h1>
          </div>

          {/* RIGHT: Details (75%) */}
          <div className="font-sans col-span-3 space-y-0 divide-y divide-white/25">
            {/* Row */}
            <div className="py-6 flex items-start gap-6">
              <div className="w-48 shrink-0 font-sans text-xl">Launch & Streams</div>
              
              <div className="flex-1 text-sm leading-relaxed">
                Fair launch on PumpFun is complete, with ongoing daily creative livestreams by the artist.
                Holders and community can tune in for the process and updates.
                <div className="flex items-center gap-4 mt-2 text-white/80">
                  <span>✅ Fair launch completed</span>
                  <span className="w-px bg-white/40 h-4" />
                  <span>✅ Daily art livestreams continue</span>
                </div>
              </div>
            </div>

            {/* Row */}
            <div className="py-6 flex items-start gap-6">
              <div className="w-48 shrink-0 font-sans text-xl">Community Giveaways</div>
              
              <div className="flex-1 text-sm leading-relaxed">
                Ongoing giveaways to reward early supporters and active community members.
                <div className="flex items-center gap-4 mt-2 text-white/80">
                  <span>🎁 Social and community engagement rewards</span>
                  <span className="w-px bg-white/40 h-4" />
                  <span>🎯 Early supporter incentives</span>
                </div>
              </div>
            </div>

            {/* Row */}
            <div className="py-6 flex items-start gap-6">
              <div className="w-48 shrink-0 font-sans text-xl">NFT Collection</div>
              
              <div className="flex-1 text-sm leading-relaxed">
                An exclusive community-focused NFT collection for $LOOSE holders.
                <div className="flex items-center gap-4 mt-2 text-white/80">
                  <span>📦 Member-first access</span>
                  <span className="w-px bg-white/40 h-4" />
                  <span>🔑 Holder utility and perks</span>
                </div>
              </div>
            </div>

            {/* Row */}
            <div className="py-6 flex items-start gap-6">
              <div className="w-48 shrink-0 font-sans text-xl">IP Rights Expansion</div>
              
              <div className="flex-1 text-sm leading-relaxed">
                Exploring broader use cases for the LOOSE character and brand across media and collaborations.
                <div className="flex items-center gap-4 mt-2 text-white/80">
                  <span>🤝 Partnerships and licensing</span>
                  <span className="w-px bg-white/40 h-4" />
                  <span>🎨 Creative extensions of the character IP</span>
                </div>
              </div>
            </div>

            {/* Row */}
            <div className="py-6 flex items-start gap-6">
              <div className="w-48 shrink-0 font-sans text-xl">More Updates</div>
              
              <div className="flex-1 text-sm leading-relaxed">
                The roadmap is community-driven with additional updates planned as the project grows.
                <div className="flex items-center gap-4 mt-2 text-white/80">
                  <span>🌱 Community-led direction</span>
                  <span className="w-px bg-white/40 h-4" />
                  <span>🚀 Iterative releases</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Character Illustration */}
      <div className="relative lg:absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-40 lg:w-56 xl:w-64 z-10 pointer-events-none">
        <img
          src="/roadmap2.png"
          alt="Character with laptop"
          className="w-full h-auto mx-auto"
        />
      </div>
    </div>
  );
}
