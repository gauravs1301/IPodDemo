import React from "react"; // Importing the React library for building components.
import Screen from "./Screen"; // Importing the Screen component from "./Screen" file.
import ZingTouch from "zingtouch"; // Importing ZingTouch library for touch gestures.
import sound from "./assets/music/KahaniSuno.mp3"; // Importing the sound file from "./assets/music/KahaniSuno.mp3".

class Ipod extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItem: "NowPlaying", // State variable for the active menu item.
      activePage: "Home", // State variable for the active page.
      enter: 0, // State variable to track the number of times the wheel is rotated.
      play: true, // State variable to track if the music is playing or paused.
    };
  }

  rotateWheel = () => {
    /* Function to handle wheel rotation */
    // Getting the container element for gesture recognition.
    var containerElement = document.getElementById("inner-container");
    var activeRegion = new ZingTouch.Region(containerElement);
    var change = 0; // Variable to keep track of wheel rotation changes.
    var self = this; // Reference to the component itself.
    self.state.enter = self.state.enter + 1; // Incrementing the wheel rotation count.

    if (self.state.enter < 2) {
      // Allowing the wheel rotation to be recognized only twice.
      activeRegion.bind(containerElement, "rotate", function (event) {
        // Handling rotate gesture.
        var newAngle = event.detail.distanceFromLast; // Getting the distance of rotation.
        console.log(newAngle);

        if (newAngle < 0) {
          // Detecting clockwise rotation.
          console.log(change);
          change++;
          if (change === 15) {
            // Detecting every 15 degrees of rotation.
            console.log("change state");
            change = 0;
            if (self.state.activePage === "Home") {
              if (self.state.activeItem === "NowPlaying") {
                self.setState({
                  activeItem: "Music", // Changing active menu item to "Music".
                });
              } else if (self.state.activeItem === "Music") {
                self.setState({
                  activeItem: "Games", // Changing active menu item to "Games".
                });
              } else if (self.state.activeItem === "Games") {
                self.setState({
                  activeItem: "Settings", // Changing active menu item to "Settings".
                });
              } else if (self.state.activeItem === "Settings") {
                self.setState({
                  activeItem: "NowPlaying", // Changing active menu item to "NowPlaying".
                });
              }
            } else if (self.state.activePage === "Music") {
              if (self.state.activeItem === "MyMusic") {
                self.setState({
                  activeItem: "Artists", // Changing active menu item to "Artists".
                });
              } else if (self.state.activeItem === "Artists") {
                self.setState({
                  activeItem: "MyMusic", // Changing active menu item to "MyMusic".
                });
              }
            }
          }
        } else {
          // Detecting anti-clockwise rotation.
          console.log(change);
          change++;
          if (change === 15) {
            // Detecting every 15 degrees of rotation.
            console.log("change state");
            change = 0;
            if (self.state.activePage === "Home") {
              if (self.state.activeItem === "NowPlaying") {
                self.setState({
                  activeItem: "Settings", // Changing active menu item to "Settings".
                });
              } else if (self.state.activeItem === "Music") {
                self.setState({
                  activeItem: "NowPlaying", // Changing active menu item to "NowPlaying".
                });
              } else if (self.state.activeItem === "Games") {
                self.setState({
                  activeItem: "Music", // Changing active menu item to "Music".
                });
              } else if (self.state.activeItem === "Settings") {
                self.setState({
                  activeItem: "Games", // Changing active menu item to "Games".
                });
              }
            } else if (self.state.activePage === "Music") {
              if (self.state.activeItem === "MyMusic") {
                self.setState({
                  activeItem: "Artists", // Changing active menu item to "Artists".
                });
              } else if (self.state.activeItem === "Artists") {
                self.setState({
                  activeItem: "MyMusic", // Changing active menu item to "MyMusic".
                });
              }
            }
          }
        }
      });
    } else {
      console.log("Not allowed to enter");
    }
  };

  changePage = () => {
    /* Function to handle changing the active page */
    if (this.state.activeItem === "Music") {
      this.setState({
        activeItem: "MyMusic", // Changing active menu item to "MyMusic".
        activePage: this.state.activeItem, // Changing active page to "MyMusic".
      });
    } else if (this.state.activeItem === "NowPlaying") {
      this.setState({
        activeItem: "NowPlaying", // Keeping the active menu item as "NowPlaying".
        activePage: "MyMusic", // Changing active page to "MyMusic".
      });
    } else {
      this.setState({
        activeItem: this.state.activeItem, // Keeping the active menu item unchanged.
        activePage: this.state.activeItem, // Changing active page to the current active menu item.
      });
    }
  };

  changePageToHomeScreen = () => {
    /* Function to change the page to the Home screen */
    if (
      this.state.activeItem === "MyMusic" ||
      this.state.activeItem === "Artists"
    ) {
      this.setState({
        activeItem: "Music", // Changing active menu item to "Music".
        activePage: "Home", // Changing active page to "Home".
      });
    } else {
      this.setState({
        activeItem: this.state.activeItem, // Keeping the active menu item unchanged.
        activePage: "Home", // Changing active page to "Home".
      });
    }
  };

  toggle = () => {
    /* Function to toggle the music play and pause */
    if (this.state.activePage === "MyMusic") {
      if (this.state.play === true) {
        this.state.audio.pause(); // Pausing the music playback.
        this.setState({
          play: false, // Updating the play state to "false".
        });
      } else {
        this.state.audio.play(); // Resuming the music playback.
        this.setState({
          play: true, // Updating the play state to "true".
        });
      }
      console.log("toggled");
    }
  };

  componentDidMount() {
    /* Lifecycle method that runs after the component is mounted to the DOM */
    let audio = document.getElementsByClassName("audio-element")[0]; // Getting the audio element.
    console.log(audio);
    this.setState({
      audio: audio, // Storing the audio element in the component's state.
    });
    console.log(this.state);
  }

  render() {
    return (
      <div style={styles.ipodContainer}>
        {" "}
        {/* Main container for the Ipod component */}
        <audio className="audio-element">
          <source src={sound}></source>{" "}
          {/* Audio element with the source set to the 'sound' prop */}
        </audio>
        <Screen
          activeItem={this.state.activeItem} // Passing 'activeItem' from component state to Screen component as prop.
          activePage={this.state.activePage} // Passing 'activePage' from component state to Screen component as prop.
          audio={this.state.audio} // Passing 'audio' from component state to Screen component as prop.
        />
        <div
          id="inner-container"
          style={styles.wheel}
          onMouseOver={this.rotateWheel} // OnMouseOver event binding to the 'rotateWheel' method.
        >
          <div style={styles.buttonContainer}>
            <div style={styles.menuButton}>
              <i
                onClick={this.changePageToHomeScreen} // OnClick event binding to the 'changePageToHomeScreen' method.
                style={styles.image}
                className="fas fa-bars"
              ></i>{" "}
              {/* Icon for the menu button */}
            </div>
          </div>
          <div style={styles.buttonContainer}>
            <div style={styles.middleButtons}>
              <i style={styles.image} className="fas fa-fast-backward"></i>{" "}
              {/* Icon for the fast backward button */}
              <div
                onClick={this.changePage} // OnClick event binding to the 'changePage' method.
                style={{
                  backgroundImage:
                    "linear-gradient(45deg, #8c8181, transparent)",
                  width: "5rem",
                  height: "5rem",
                  borderRadius: "50%",
                }}
              ></div>{" "}
              {/* Circular div acting as a button */}
              <i style={styles.image} className="fas fa-fast-forward"></i>{" "}
              {/* Icon for the fast forward button */}
            </div>
          </div>
          <div style={styles.buttonContainer}>
            <div onClick={this.toggle} style={styles.playButton}>
              <i
                onClick={this.toggle} // OnClick event binding to the 'toggle' method.
                style={styles.image}
                className="fas fa-play"
              ></i>{" "}
              {/* Icon for the play button */}
              &nbsp;
              <i
                onClick={this.toggle} // OnClick event binding to the 'toggle' method.
                style={styles.image}
                className="fas fa-pause"
              ></i>{" "}
              {/* Icon for the pause button */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  ipodContainer: {
    height: "33rem",
    width: "20rem",
    backgroundImage: "radial-gradient(#adb1b5, #4d4f50)",
    margin: "4rem auto",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    borderRadius: "24px",
    WebkitBoxReflect:
      "below 2px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4))",
  },
  wheel: {
    width: "75%",
    height: "40%",
    margin: "1rem auto",
    backgroundColor: "#4b4e52",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  buttonContainer: {
    width: "85%",
    height: "30%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  menuButton: {
    alignSelf: "center",
  },
  playButton: {
    alignSelf: "center",
  },
  middleButtons: {
    alignSelf: "center",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    alignSelf: "center",
    fontSize: "1.5rem",
    color: "white",
  },
};

export default Ipod;
