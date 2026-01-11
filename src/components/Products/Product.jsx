'use client'
import React from 'react'
import { InfiniteMovingCards } from '../ui/infinite-moving-cards.jsx'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { easeQuadInOut } from 'd3-ease';
import {HoverBorderGradient} from '../ui/hover-border-gradient.jsx'

import { WobbleCard } from '../ui/wobble-card.jsx';
import AnimatedProgressProvider from '../../AnimatedProgressProvider'
const Product = () => {
    const testimonials = [

  {
    quote: "Maska Butter feels fresh, light, and flavorful. It’s now a regular item in my kitchen.",
    name: "Priya Chatterjee"
  },
  {
    quote: "The texture and taste of Maska Butter are excellent. It pairs perfectly with pav and bhaji.",
    name: "Karan Malhotra"
  },
  {
    quote: "Maska Butter gives a rich and authentic dairy flavor. It makes homemade food more enjoyable.",
    name: "Swati Deshpande"
  },
  {
    quote: "I love how Maska Butter melts on hot food and enhances the overall taste without being too heavy.",
    name: "Manish Agarwal"
  }
];
    const percentage = 90; 
    const imageUrl =
    "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
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
                <HoverBorderGradient
                    containerClassName="rounded-full mt-2"
                    as="button"
                    className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                >
                    
                    <span>Buy Now</span>
                </HoverBorderGradient>
            </div>
            
        </div>
        
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
       
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <h1 className='font-medium text-3xl flex justify-center mb-7'>5000 Customer Ratings</h1>
        <div className='flex justify-center gap-9 flex-row'>
            <div className=''>
                <CircularProgressbar
                    value={60}
                    text={`${60}%`}
                    styles={{
                        root: {},
                        path: {
                            stroke: `rgba(62, 152, 199, ${percentage / 100})`,                      
                            strokeLinecap: 'butt',
                            transition: 'stroke-dashoffset 0.5s ease 0s',
                            transform: 'rotate(0.25turn)',
                            transformOrigin: 'center center',
                        },
                        
                        trail: {
                      
                        stroke: '#d6d6d6',
                        
                        strokeLinecap: 'butt',
                        
                        transform: 'rotate(0.25turn)',
                        transformOrigin: 'center center',
                        },
                       
                        text: {
                        
                        fill: '#f88',
                       
                        fontSize: '16px',
                        },
                        
                        background: {
                        fill: '#3e98c7',
                        },
                    }}
                />
                <div className="flex items-center mb-3">
                    <div className="flex items-center space-x-1">
                        <svg className="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
                        <svg className="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
                        <svg className="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
                        <svg className="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
                        <svg className="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
                        
                    </div>
                    <p className="ms-2 text-sm font-medium text-body mt-2">5 out of 5</p>
                </div>    
            </div>

            <div>
                <CircularProgressbar
                    value={20}
                    text={`${20}%`}
                    styles={{
                        root: {},
                        path: {
                            stroke: `rgba(62, 152, 199, ${percentage / 100})`,                      
                            strokeLinecap: 'butt',
                            transition: 'stroke-dashoffset 0.5s ease 0s',
                            transform: 'rotate(0.25turn)',
                            transformOrigin: 'center center',
                        },
                        
                        trail: {
                      
                        stroke: '#d6d6d6',
                        
                        strokeLinecap: 'butt',
                        
                        transform: 'rotate(0.25turn)',
                        transformOrigin: 'center center',
                        },
                       
                        text: {
                        
                        fill: '#f88',
                       
                        fontSize: '16px',
                        },
                        
                        background: {
                        fill: '#3e98c7',
                        },
                    }}
                />
                <div className="flex items-center mb-3">
                    <div className="flex items-center space-x-1">
                        <svg className="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
                        <svg className="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
                        <svg className="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
                        <svg className="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
                    </div>
                    <p className="ms-2 text-sm font-medium text-body mt-2">4 out of 5</p>
                </div>
            </div>

            <div className="rounded-xl">
                <CircularProgressbar
                    value={10}
                    text={`${10}%`}
                    styles={{
                        root: {},
                        path: {
                            stroke: `rgba(62, 152, 199, ${percentage / 100})`,                      
                            strokeLinecap: 'butt',
                            transition: 'stroke-dashoffset 0.5s ease 0s',
                            transform: 'rotate(0.25turn)',
                            transformOrigin: 'center center',
                        },
                        
                        trail: {
                      
                        stroke: '#d6d6d6',
                        
                        strokeLinecap: 'butt',
                        
                        transform: 'rotate(0.25turn)',
                        transformOrigin: 'center center',
                        },
                       
                        text: {
                        
                        fill: '#f88',
                       
                        fontSize: '16px',
                        },
                        
                        background: {
                        fill: '#3e98c7',
                        },
                    }}
                />
                <div className="flex items-center mb-3">
                    <div className="flex items-center space-x-1">
                        <svg className="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
                        <svg className="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
                        <svg className="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
            
                    </div>
                    <p className="ms-2 text-sm font-medium text-body mt-2">3 out of 5</p>
                </div>
            </div>

            <div>
                <CircularProgressbar
                    value={5}
                    text={`${5}%`}
                    styles={{
                        root: {},
                        path: {
                            stroke: `rgba(62, 152, 199, ${percentage / 100})`,                      
                            strokeLinecap: 'butt',
                            transition: 'stroke-dashoffset 0.5s ease 0s',
                            transform: 'rotate(0.25turn)',
                            transformOrigin: 'center center',
                        },
                        
                        trail: {
                      
                        stroke: '#d6d6d6',
                        
                        strokeLinecap: 'butt',
                        
                        transform: 'rotate(0.25turn)',
                        transformOrigin: 'center center',
                        },
                       
                        text: {
                        
                        fill: '#f88',
                       
                        fontSize: '16px',
                        },
                        
                        background: {
                        fill: '#3e98c7',
                        },
                    }}
                />
                <div className="flex items-center mb-3">
                    <div className="flex items-center space-x-1">
                        <svg className="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
                        <svg className="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
                        
                    </div>
                    <p className="ms-2 text-sm font-medium text-body mt-2">2 out of 5</p>
                </div>
            </div>

            <div>
                <CircularProgressbar
                    value={5}
                    text={`${5}%`}
                    styles={{
                        root: {},
                        path: {
                            stroke: `rgba(62, 152, 199, ${percentage / 100})`,                      
                            strokeLinecap: 'butt',
                            transition: 'stroke-dashoffset 0.5s ease 0s',
                            transform: 'rotate(0.25turn)',
                            transformOrigin: 'center center',
                        },
                        
                        trail: {
                      
                        stroke: '#d6d6d6',
                        
                        strokeLinecap: 'butt',
                        
                        transform: 'rotate(0.25turn)',
                        transformOrigin: 'center center',
                        },
                       
                        text: {
                        
                        fill: '#f88',
                       
                        fontSize: '16px',
                        },
                        
                        background: {
                        fill: '#3e98c7',
                        },
                    }}
                />
                <div className="flex items-center mb-3">
                    <div className="flex items-center space-x-1 mt-5">
                        <svg className="w-5 h-5 text-fg-yellow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
                    </div>
                    <p className="ms-2 text-sm font-medium text-body mt-2">1 out of 5</p>
                </div>
            </div>
        </div>
        
                
        <img
          src="/linear.webp"
          width={500}
          height={500}
          alt=""
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
        
                

        
    </div>
  )
}

export default Product