import React from 'react'
import NavBar from '../../Components/Shared/NavBar'
import Hero from '../../Components/Blog/Hero'
import FeaturedArticles from '../../Components/Blog/FeaturedArticles'
import Footer from '../../Components/Shared/Footer'

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="pt-20">
        <Hero/>
        <FeaturedArticles/>
      </div>
      <Footer showNewsletter={true} />
    </div>
  )
}
