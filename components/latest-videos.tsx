'use client'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

// Define the video type for better type safety
interface Video {
  id: number;
  title: string;
  duration: string;
  url: string;
}

// Define the list of videos
const videos: Video[] = [
  {
    id: 1,
    title: "Ring The Bell for Gender Equality",
    duration: "0:17",
    url: "https://www.youtube.com/embed/EHGDW_X8O2I"
  },
  {
    id: 2,
    title: "Hassan Dudde, CEO Somali Stock Exchange",
    duration: "7:17",
    url: "https://www.youtube.com/embed/BrolJ-fZAJU"
  },
  {
    id: 3,
    title: "Somali Stock Exchange Explained",
    duration: "29:41",
    url: "https://www.youtube.com/embed/rNGaCx_k74Y"
  },
  {
    id: 4,
    title: "The Arab Federation of Exchanges",
    duration: "1:05",
    url: "https://www.youtube.com/embed/SqBS0bUsXH8"
  }
];

const LatestVideos: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video>(videos[0]);

  // Handle video selection with autoplay added to URL
  const handleVideoClick = (video: Video) => {
    const autoplayUrl = `${video.url}?autoplay=1`;
    setSelectedVideo({ ...video, url: autoplayUrl });
  };

  return (
    <div className="container mx-auto my-4 p-10">
      <div className="flex gap-4 justify-between items-center">
        <div>
          <h1 className="w-full lg:text-3xl text-2xl text-[#174C81] font-bold font-Arial">Latest Videos</h1>
        </div>
        <div>
          <Link href="#" className="bg-[#174C81] hover:bg-[#1b2f44e1] px-4 py-2 rounded text-white flex items-center gap-2">
            See more <ChevronRight />
          </Link>
        </div>
      </div>
      <span className="w-full h-[2px] bg-[#174C81] block my-2"></span>

      <div className="flex flex-col md:flex-row items-start justify-center my-2">
        {/* Video Player */}
        <div className="w-full md:w-3/4">
          <iframe
            className="w-full h-64 md:h-96"
            src={selectedVideo.url}
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Playlist */}
        <div className="w-full md:w-1/4 md:ml-4 mt-4 md:mt-0">
          <div className="flex justify-between items-center bg-[#174C81] p-3 text-white">
            <h3 className="text-lg font-semibold">Playlist</h3>
            <p>{videos.length} Videos</p>
          </div>
          <ul className="mt-4">
            {videos.map((video) => (
              <li
                key={video.id}
                onClick={() => handleVideoClick(video)}
                className={`cursor-pointer p-2 mb-2 flex justify-between items-center ${
                  selectedVideo.id === video.id ? 'bg-blue-200' : 'bg-gray-100'
                }`}
              >
                <div className="flex items-center gap-2 px-2">
                  <iframe
                    className="w-10 h-10"
                    src={video.url}
                    title={`Video ${video.id}`}
                    frameBorder={0}
                  />
                  <span className="line-clamp-1">{video.title}</span>
                </div>
                <span>{video.duration}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LatestVideos;
