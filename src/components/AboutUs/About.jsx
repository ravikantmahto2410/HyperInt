import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://www.maskabutters.in/cdn/shop/files/4_b597c3d9-c20d-4154-ad34-19a6574fa839.jpg?v=1751112540&width=823"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      
                      <p className="mt-6 text-gray-600">
                          Maska Butter is made for those who truly appreciate the taste of real, wholesome butter. Crafted with quality ingredients and a focus on freshness, Maska Butter delivers a rich, creamy texture and an authentic dairy flavor that elevates everyday meals. Whether it’s melting over hot parathas, spreading smoothly on toast, or adding depth to your favorite dishes, Maska Butter brings comfort, taste, and tradition together. 
                      <p className="mt-4 text-gray-600">
                          Our goal is simple—to offer pure, delicious butter that turns simple food into a satisfying experience, every single day.
                      </p>
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}