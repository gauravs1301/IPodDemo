import React from "react"; // Importing the React library for building components.
import sound from "./assets/music/KahaniSuno.mp3"; // Importing the sound file from "./assets/music/KahaniSuno.mp3".

class MyMusic extends React.Component {
  constructor() {
    super();
    this.state = {
      isMounted: true, // State variable to track if the component is mounted.
    };
  }

  componentDidMount() {
    // Lifecycle method that runs after the component is mounted to the DOM.
    let self = this;
    self.props.audio.play(); // Start playing the audio passed as a prop.

    // Adding a time update event listener to track the audio playback progress.
    self.props.audio.addEventListener("timeupdate", function () {
      if (self.state.isMounted) {
        var pos = self.props.audio.currentTime / self.props.audio.duration; // Calculating the percentage of audio played.
        self.updateTime(); // Updating the component state with the audio element.
        let fill = document.getElementById("fill"); // Getting the fill element for the seek bar.
        console.log(fill);
        if (fill !== null) {
          fill.style.width = pos * 100 + "%"; // Updating the width of the fill element based on the audio progress.
        }
      }
    });
  }

  updateTime = () => {
    // Function to update the component state with the audio element.
    this.setState({
      audio: this.props.audio, // Updating the state with the audio element passed as a prop.
    });
  };

  componentWillUnmount() {
    // Lifecycle method that runs before the component is unmounted from the DOM.
    this.state.isMounted = false; // Setting the isMounted state variable to false to indicate that the component is being unmounted.
  }

  render() {
    let audio = this.props.audio; // Getting the audio element from props.
    return (
      <div style={styles.myMusicContainer}>
        {" "}
        {/* Main container for the MyMusic component */}
        <div style={styles.titleBar}>
          <p style={{ fontWeight: "bold" }}>iPod</p>{" "}
          {/* Title bar displaying "iPod" text with bold font weight. */}
          <img
            style={styles.battery}
            src="https://www.svgrepo.com/download/2225/music.svg"
          ></img>{" "}
          {/* Battery image displayed in the title bar */}
        </div>
        <div style={styles.info}>
          <img
            style={styles.image}
            src="https://i.ytimg.com/vi/h-b-kEXnAoI/sddefault.jpg"
          ></img>{" "}
          {/* Image for the music */}
          <div style={styles.subInfo}>
            <h4 style={{ marginBottom: "0.5rem" }}>Kahani Suno</h4>{" "}
            {/* Music title */}
            <p style={{ marginBottom: "0" }}>Kaifi Khalil</p>{" "}
            {/* Artist name */}
          </div>
        </div>
        <div style={styles.statusBar}>
          <p style={styles.currTime}>
            {audio !== null ? Math.floor(audio.currentTime) : "0 / 0"}
          </p>{" "}
          {/* Current time of the audio playback */}
          <div style={styles.seekBar}>
            <div style={styles.fill} id="fill"></div>{" "}
            {/* Seek bar fill element */}
          </div>
          <p style={styles.dur}>
            {audio != null ? Math.floor(audio.duration) : "0 / 0"}
          </p>{" "}
          {/* Total duration of the audio */}
        </div>
      </div>
    );
  }
}

const styles = {
  myMusicContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  image: {
    height: "75%",
    width: "45%",
    alignSelf: "center",
  },
  info: {
    height: "70%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  statusBar: {
    width: "100%",
    height: "30%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  subInfo: {
    alignSelf: "center",
  },
  seekBar: {
    width: "70%",
    height: "20%",
    border: "1px solid grey",
    cursor: "pointer",
    alignSelf: "center",
    display: "flex",
  },
  fill: {
    height: "100%",
    backgroundColor: "royalblue",
  },
  currTime: {
    margin: "0",
    alignSelf: "center",
  },
  dur: {
    margin: "0",
    alignSelf: "center",
  },
  titleBar: {
    height: "10%",
    width: "100%",
    borderRadius: "12px 0 0 0",
    backgroundImage: "linear-gradient(0deg, rgb(123, 132, 140), transparent)",
    borderBottom: "1px solid #6c757d",
    padding: "1px 5px 10px 8px",
    display: "flex",
    flexDirecton: "row",
    justifyContent: "space-between",
  },
  battery: {
    width: "20px",
    height: "20px",
  },
};

export default MyMusic;
