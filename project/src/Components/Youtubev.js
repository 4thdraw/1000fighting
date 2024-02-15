import React, { useEffect } from 'react';

const Youtubev = () => {
    useEffect(() => {
        // 1. This code loads the IFrame Player API code asynchronously.
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // 2. This function creates an <iframe> (and YouTube player)
        //    after the API code downloads.
        window.onYouTubeIframeAPIReady = () => {
            new window.YT.Player('player', {
                videoId: 'hqcRnKT5nMA', // 최초 재생할 유튜브 영상 ID
                playerVars: {
                    autoplay: true, // 자동 재생 유무
                    loop: true, // 반복 재생 유무
                    playlist: 'hqcRnKT5nMA', // 반복재생할 영상 ID 목록
                    controls: 0, // 컨트롤러 숨기기

                    modestbranding: 1, // YouTube 로고 감추기
                },

                events: {
                    onReady: (event) => {
                        event.target.mute(); // 음소거
                    }
                }
            });
        };

        // Cleanup function to remove the script tag when the component unmounts
        return () => {
            window.onYouTubeIframeAPIReady = undefined;
            firstScriptTag.parentNode.removeChild(tag);
        };
    }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 실행

    return (
        <div id="player"></div>
    );
};

export default Youtubev;


