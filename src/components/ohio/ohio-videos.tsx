"use client"

const PROCESS_STEPS = [
  { num: "01", title: "DECON", sub: "CHEMICAL CLEANSE", video: "/videos/video-project-2.mp4" },
  { num: "02", title: "POLISH", sub: "CLEARCOAT CORRECTION", video: "/videos/gemini_generated_video_8cab5f87.mp4" },
  { num: "03", title: "SHIELD", sub: "CERAMIC & PPF BOND", video: "/videos/video-project-2.mp4" },
  { num: "04", title: "CURE", sub: "INFRARED BAKE", video: "/videos/gemini_generated_video_8cab5f87.mp4" },
]

export function OhioVideos() {
  return (
    <section id="process" className="relative w-full bg-[#0E0E0E] text-white border-b border-white/10 overflow-hidden font-sans">
      <div className="mx-auto w-full">
        
        {/* Uniform Section Header Strip */}
        <div className="px-8 lg:px-12 py-4 bg-[#111310] border-b border-white/10 flex items-center justify-between">
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#E5FCA0]">
            WORKFLOW
          </span>
          <span className="text-[10px] font-mono text-white/40">
            4-STAGE PROCESS REEL
          </span>
        </div>

        {/* 4 Connected Video Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.num}
              className="relative min-h-[340px] bg-[#131512] flex flex-col justify-between overflow-hidden group"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-50 filter brightness-[0.6]"
              >
                <source src={step.video} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent" />

              {/* Top Step Number */}
              <div className="relative z-10 p-6 flex items-center justify-between">
                <span className="bg-[#E5FCA0] text-black font-mono font-extrabold text-xs px-3 py-1 rounded-full">
                  STEP {step.num}
                </span>
              </div>

              {/* Bottom Label Only */}
              <div className="relative z-10 p-6 mt-auto">
                <span className="text-[10px] font-mono text-[#E5FCA0] font-bold block mb-0.5">
                  {step.sub}
                </span>
                <h3 className="text-2xl font-black uppercase text-white">
                  {step.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
