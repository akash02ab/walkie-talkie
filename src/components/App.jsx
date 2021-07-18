import AudioPlayer from "./AudioPlayer";
import Notification from "./Notification";
import Options from "./Options";

const App = () => {
	return (
		<div className="container">
			<h1>Walkie Talkie</h1>
			<AudioPlayer />
			<Options>
				<Notification />
			</Options>
		</div>
	);
};

export default App;
