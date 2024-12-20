import HeroBanner from '@/components/HeroBanner'
import MovieCarousel from '@/components/MovieCarousel'

export default function Page() {
  return (
    <main className="flex flex-col">
      <HeroBanner />
      <MovieCarousel />
    </main>
  )
}
