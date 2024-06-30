import React, { Component } from "react";
import catVideo from "../../public/videos/cat.video.mp4";

class Video extends Component {
  render() {
    return (
        <video width="320" height="240" controls preload="none">
          <source src="../cat.video.mp4" type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
    );
  }
}

export default Video;