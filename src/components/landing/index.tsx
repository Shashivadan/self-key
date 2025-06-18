"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, Play } from "lucide-react";

export default function Landing() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="min-h-screen bg-[#0B0C0E] text-white">
      {/* Header */}
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/50 backdrop-blur-md" : ""}`}
      >
        <div className="container mx-auto py-4 md:py-6">
          <nav className="flex items-center justify-between">
            <Link href="/" className="group flex items-center space-x-3">
              <div className="relative h-8 w-8 overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%201171274909-6qAc0l9yFtnmWK0yfTDOWwiPgp4bEd.png"
                  alt="Graphyn Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                  priority
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100" />
              </div>
              <span className="font-mono text-xl">graphyn</span>
            </Link>
            <div className="hidden items-center gap-4 md:flex">
              <Button variant={"ghost"} className="">
                Backed by Y Combinator (hopefully soon)
              </Button>
            </div>
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </nav>
        </div>
        {isMobileMenuOpen && (
          <div className="bg-black/90 backdrop-blur-md md:hidden">
            <div className="container py-4">
              <Button
                variant="outline"
                className="h-auto w-full rounded-full border border-zinc-800 bg-black/20 px-6 py-2 text-sm backdrop-blur-sm transition-colors hover:bg-zinc-800/50"
              >
                Backed by Y Combinator (hopefully soon)
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="flex min-h-[80vh] flex-col items-center justify-center px-4 pt-16 md:px-0">
        <div className="container mx-auto">
          <div className="mx-auto max-w-[800px] space-y-6 text-center">
            <h1 className="text-3xl leading-tight font-medium tracking-[-0.02em] md:text-[56px] md:leading-[1.1]">
              Empower your apps with contextual intelligence
            </h1>
            <p className="mx-auto max-w-[600px] text-base leading-relaxed text-zinc-400 md:text-xl">
              Graphyn provides a powerful SDK for seamless integration of
              personalized, context-aware features in your applications.
            </p>
            <div className="pt-8">
              <Button
                className="md:text-md h-auto rounded-full bg-[#8564FA] px-6 py-3 text-sm text-white hover:bg-[#8564FA]/90"
                onClick={() => {
                  const videoSection = document.getElementById("video-section");
                  videoSection?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Hear what we wanna say
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section
        id="video-section"
        className="-mt-16 px-4 pt-4 md:-mt-24 md:px-0"
      >
        <div className="container mx-auto">
          <div className="mx-auto max-w-[1000px]">
            {/* Browser Window Mockup */}
            <div className="overflow-hidden rounded-xl border border-white/5 bg-zinc-900/50 shadow-2xl">
              {/* Browser Controls */}
              <div className="flex items-center gap-2 border-b border-white/5 bg-black/40 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-zinc-600" />
                  <div className="h-3 w-3 rounded-full bg-zinc-600" />
                  <div className="h-3 w-3 rounded-full bg-zinc-600" />
                </div>
                <div className="mx-4 flex-1">
                  <div className="flex max-w-[300px] items-center gap-2 rounded-md bg-black/40 px-3 py-1.5 text-xs text-zinc-500">
                    <div className="h-4 w-4 rounded-full bg-zinc-800" />
                    graphyn.xyz
                  </div>
                </div>
              </div>

              {/* Video/Content Area */}
              <div className="relative aspect-[16/9]">
                {isPlaying ? (
                  <iframe
                    src={`https://player.vimeo.com/video/1055784280?h=your_hash_here&autoplay=1&title=0&byline=0&portrait=0`}
                    className="h-full w-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div
                    className="group absolute inset-0 flex cursor-pointer items-center justify-center"
                    onClick={() => setIsPlaying(true)}
                  >
                    <div className="absolute inset-0">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lQJe60OxxGongNvLeFeJWGT3Gz0Rra.png"
                        alt="Weaves every interaction into a web of knowledge"
                        fill
                        className="object-cover"
                        priority
                        unoptimized
                      />
                    </div>
                    <Button
                      size="lg"
                      className="relative z-10 size-16 rounded-full bg-black/20 p-0 backdrop-blur-sm transition-all duration-200 hover:bg-black/30 md:size-20"
                    >
                      <Play className="size-6 text-white md:size-8" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 border-t border-white/5 py-8">
        <div className="container mx-auto">
          <div className="text-center text-sm text-zinc-400">
            <a
              href="https://fuego.wtf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <span className="relative overflow-hidden">
                Built by Fuego Labs 🔥
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
