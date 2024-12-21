import HeroBanner from "@core/components/hero-banner.component"
import MovieCarousel from "@core/components/movie-carousel.component"

export default function Page() {
  return (
    <main className="flex flex-col">
      <HeroBanner />
      <MovieCarousel />
    </main>
  )
}
