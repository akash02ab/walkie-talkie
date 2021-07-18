import { useContext } from "react";
import { SocketContext } from "../SocketContext";

const Notification = () => {
	const { answerCall, call, callAccepted } = useContext(SocketContext);
	console.log(call.isReceivedCall, callAccepted);
	return call.isReceivedCall && !callAccepted ? (
		<div className="notification">
			<div className="row">
				<h3>{call.name} is calling</h3>
				<button onClick={answerCall}>Answer</button>
			</div>
		</div>
	) : null;
};

export default Notification;
