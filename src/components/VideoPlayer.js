import React from "react";
import videojs from "video.js";
import * as eme from "videojs-contrib-eme";
import { css } from "@emotion/core";

require("video.js/dist/video-js.css");
class VideoPlayer extends React.Component {
    componentDidMount() {
        this.player = videojs(
            this.videoNode,
            {
                html5: {
                    nativeCaptions: false
                },
                ...this.props
            },
            function onPlayerReady() {
                console.log("onPlayerReady", this);
                this.play();
            }
        );
        this.player.eme();
        this.player.src(this.props);
        this.player.play();
    }

    componentWillUnmount() {
        if (this.player) {
            this.player.dispose();
        }
    }

    render() {
        return (
            <div>
                <div data-vjs-player>
                    <video
                        ref={(node) => (this.videoNode = node)}
                        className="video-js vjs-theme-rakuten full"
                        css={Player}
                    ></video>
                </div>
            </div>
        );
    }
}

export default VideoPlayer;

const Player = css`
    &.vjs-theme-rakuten {
        max-width: 100%;
        &.full {
            position: absolute;
            min-width: 100%;
            height: 100%;
        }
        max-width: 100%;
        min-width: 100%;
        .vjs-big-play-button {
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -0.81666em;
            margin-left: -1.5em;
        }
    }
`;