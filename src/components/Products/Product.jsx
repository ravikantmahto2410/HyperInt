'use client'
import React from 'react'
import { InfiniteMovingCards } from '../ui/infinite-moving-cards.jsx'
const Product = () => {
    const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
  
];

  return (
    <div>
        <div className='ml-40 gap-12 flex flex-auto'>
            
            <img 
                className='w-auto h-96'
                src="https://www.maskabutters.in/cdn/shop/files/1stimage_1e3b7bf3-37ad-4054-8245-4b329d9d2eeb.jpg?v=1751094997&width=823" alt=""
            
            />
           
            <div>
                <h1 className='font-extrabold text-2xl mt-2'>Aww-Rio Peanut Butter (Oreo)</h1>
                <h1 className='text-sm font-medium mt-2'>Price : 200</h1>
                <h1 className='mt-2 font-semibold'>Description</h1>
                <p className='mt-2'>
                    Contains the absolut-awwing-ly delicious Oreo cookie heaven. Is it peanut butter? Is it Oreo Butter? It’s BOTH. It’s peanut oreo butter. The first of its kind, our AwwRio peanut butter is your bread’s soulmate. Try us, you’ll only go more aww for Aww-Rio!! 
                </p>
            </div>
            
        </div>
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
        <div>
            
        </div>
        
        
    </div>
  )
}

export default Product