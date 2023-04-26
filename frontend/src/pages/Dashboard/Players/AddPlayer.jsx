import "./addPlayer.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import testVideo from "../../../assets/testVideo2.mp4";
import testAd from "../../../assets/ad.mp4";
import ReactPlayer from "react-player";
import { useEffect } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";

export default function AddPlayer() {
  const navigate = useNavigate();
  const [user, setUser] = useState("Robin");
  const [active, setActive] = useState(true);
  const [height, setHeight] = useState("464px");
  const [width, setWidth] = useState("840px");
  const [loop, setLoop] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoArray, setVideoArray] = useState(testVideo);
  const [videoSrc, setVideoSrc] = useState(testVideo);
  const [preRollAd, setPreRollAd] = useState(false);
  const [postRollAd, setPostRollAd] = useState(false);

  const handleNext = () => {
    if (currentIndex < videoArray.length) {
      setVideoSrc(videoArray[currentIndex + 1]);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (preRollAd && postRollAd) {
      let newVideoArray = [testAd, testVideo, testAd];
      setVideoArray(newVideoArray);
      setVideoSrc(newVideoArray[0]);
      setCurrentIndex(0);
    } else if (preRollAd) {
      let newVideoArray = [testAd, testVideo];
      setVideoArray(newVideoArray);
      setVideoSrc(newVideoArray[0]);
      setCurrentIndex(0);
    } else if (postRollAd) {
      let newVideoArray = [testVideo, testAd];
      setVideoArray(newVideoArray);
      setVideoSrc(newVideoArray[0]);
      setCurrentIndex(0);
    } else {
      setVideoArray([testVideo]);
      setVideoSrc(testVideo);
      setCurrentIndex(0);
    }
  }, [preRollAd, postRollAd]);

  return (
    <div className="addPlayer">
      <Navbar />

      <div className="addPlayer-main">
        <Sidebar />
        <div className="addPlayer-main-container">
          <div className="addPlayer-inputsContainer">
            <div className="addPlayer-inputs">
              <span>Height</span>
              <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>

            <div className="addPlayer-inputs">
              <span>Width</span>
              <input type="text" value={width} onChange={(e) => setWidth(e.target.value)} />
            </div>

            <div className="addPlayer-inputs">
              <span>Loop</span>
              <input type="checkbox" value={loop} onChange={(e) => setLoop(e.target.checked)} />
            </div>

            <div className="addPlayer-inputs">
              <span>Auto Play</span>
              <input type="checkbox" value={autoPlay} onChange={(e) => setAutoPlay(e.target.checked)} />
            </div>

            <div className="addPlayer-inputs">
              <span>Pre-Roll Ad</span>
              <input type="checkbox" value={preRollAd} onChange={(e) => setPreRollAd(e.target.checked)} />
            </div>

            <div className="addPlayer-inputs">
              <span>Post-Roll Ad</span>
              <input type="checkbox" value={postRollAd} onChange={(e) => setPostRollAd(e.target.checked)} />
            </div>
          </div>

          <ReactPlayer
            playing={autoPlay}
            url={videoSrc}
            width={width}
            height={height}
            controls={true}
            loop={loop}
            muted={true}
            onEnded={handleNext}
            pip={true}
            stopOnUnmount={false}
          />
        </div>
      </div>
    </div>
  );
}
