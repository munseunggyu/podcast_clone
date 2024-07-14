import React from "react";

interface IProps {
  params: {
    podcastId: string;
  };
}

export default function PodcastDetails({ params }: IProps) {
  return <div className='text-white-1'>Podcast {params.podcastId}</div>;
}
