"use client"
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
const PLAYLIST_ID = 'PL8ua8rCMPoxBXg_tRadxIkD39ptiZNT6y';

interface Video {
    id: string;
    title: string;
}

const VideoList: React.FC = () => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [visibleVideos, setVisibleVideos] = useState<number>(3);
    const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async () => {
        try {
            if (!API_KEY) {
                console.error('Missing API Key');
                return;
            }

            let endpoint = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${PLAYLIST_ID}&key=${API_KEY}`;
            if (searchTerm) {
                endpoint = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${encodeURIComponent(searchTerm)}&key=${API_KEY}`;
            }

            console.log('Requesting URL:', endpoint);

            const response = await axios.get(endpoint);
            const videoData = response.data.items.map((item: any) => ({
                id: item.id?.videoId || item.snippet?.resourceId?.videoId,
                title: item.snippet.title,
            }));
            setVideos(videoData);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    const handleSearch = () => {
        setVisibleVideos(3); // Reset visible videos on new search
        fetchVideos();
    };

    const showMore = () => {
        setVisibleVideos((prev) => prev + 3);
    };

    const showLess = () => {
        setVisibleVideos((prev) => (prev > 3 ? prev - 3 : 3));
    };

    const handleVideoClick = (videoId: string) => {
        if (playingVideoId === videoId) {
            setPlayingVideoId(null); // Pause the video if the same one is clicked again
        } else {
            setPlayingVideoId(videoId); // Set the new video to play
        }
    };

    return (
        <div className="p-6">
            <div className="flex justify-center mb-6">
                <input
                    className="input input-bordered input-secondary w-full max-w-md mr-4"
                    type="text"
                    placeholder="Search for videos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn btn-secondary" onClick={handleSearch}>Search</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.slice(0, visibleVideos).map((video) => (
                    <div key={video.id} className="bg-white rounded-lg shadow-lg">
                        <div className="relative">
                            <iframe
                                width="100%"
                                height="200"
                                src={`https://www.youtube.com/embed/${video.id}?autoplay=${playingVideoId === video.id ? 1 : 0}`}
                                allowFullScreen
                                title={video.title}
                                className="rounded-t-lg"
                                onClick={() => handleVideoClick(video.id)}
                            ></iframe>
                            {playingVideoId === video.id && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black opacity-50">
                                    <span className="text-white text-lg">Playing...</span>
                                </div>
                            )}
                        </div>
                        <div className="p-4">
                            <h4 className="font-semibold text-lg">{video.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-6">
                {visibleVideos < videos.length && (
                    <button className="btn btn-primary mr-4" onClick={showMore}>Show More</button>
                )}
                {visibleVideos > 3 && (
                    <button className="btn btn-secondary" onClick={showLess}>Show Less</button>
                )}
            </div>
        </div>
    );
};

export default VideoList;
