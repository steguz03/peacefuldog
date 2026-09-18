import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Story } from "@/components/story"
import { Discovery } from "@/components/discovery"
import { Philosophy } from "@/components/philosophy"
import { Timeline } from "@/components/timeline"
import { Gallery } from "@/components/gallery"
import { Contract } from "@/components/contract"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Story />
        <Discovery />
        <Philosophy />
        <Timeline />
        <Gallery />
        <Contract />
      </main>
      <SiteFooter />
    </>
  )
}
