import { useContext } from "react";
import { SocketContext } from "../SocketContext";

const AudioPlayer = () => {
	const { name, callAccepted, thisaudio, useraudio, callEnded, stream, call } = useContext(SocketContext);
	return (
		<div className="audio-player">
			<div className="grid">
				{stream && (
					<div className="audio">
						<img src="./microphone-solid.svg" alt="" />
						<h3>{name || "Name"}</h3>
						<audio playsInline muted ref={thisaudio} autoPlay />
					</div>
				)}
			</div>

			<div className="grid">
				{callAccepted && !callEnded && (
					<div className="audio">
						<img src="./microphone-solid.svg" alt="" />
						<h3>{call.name || "Name"}</h3>
						<audio playsInline ref={useraudio} autoPlay />
					</div>
				)}
			</div>
		</div>
	);
};

export default AudioPlayer;
