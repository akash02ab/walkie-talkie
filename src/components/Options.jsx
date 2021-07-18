import { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "../SocketContext";

const Options = ({ children }) => {
	const { me, callAccepted, setName, leaveCall, callUser, callEnded } = useContext(SocketContext);
	const [idToCall, setIdToCall] = useState("");

	return (
		<>
			<div className="options">
				<div className="account-info grid">
					<h3>Account Info</h3>
					<input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
					<CopyToClipboard text={me}>
						<button>Copy ID</button>
					</CopyToClipboard>
				</div>

				<div className="make-a-call grid">
					<h3>Make a call</h3>
					<input type="text" placeholder="Enter ID to call" onChange={(e) => setIdToCall(e.target.value)} />
					{callAccepted && !callEnded ? (
						<button onClick={leaveCall}>Hang Up</button>
					) : (
						<button onClick={() => callUser(idToCall)}>Call</button>
					)}
				</div>
			</div>
			{children}
		</>
	);
};

export default Options;
