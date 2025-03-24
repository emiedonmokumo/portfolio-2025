'use client'
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa"

export default function ProjectCard({ title, description, imageSrc, link, github }: any) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev: number) => (prev + 1) % imageSrc.length);
  };

  const prevSlide = () => {
    setCurrent((prev: number) => (prev - 1 + imageSrc.length) % imageSrc.length);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full"
    >
      <Card className="flex sm:flex-col overflow-hidden shadow-lg lg:h-[300px]">
        {/* Slideshow */}
        <div className="relative h-full sm:h-52 w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <Image
                src={imageSrc[current]}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-sm"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-sm"
          >
            ›
          </button>
        </div>

        <CardContent className="lg:w-[60%] p-4 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-sm text-gray-600 text-justify">{description}</p>
          </div>

          <div className="flex space-x-2 items-center sm:mt-2">
            <Button asChild className="w-full cursor-pointer">
              <a href={link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </Button>
            <Button asChild className="w-full cursor-pointer">
              <a href={github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="mr-2" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
