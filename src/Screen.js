import React from "react"; // Importing the React library for building components.
import Home from "./Home"; // Importing the Home component from "./Home".
import Music from "./Music"; // Importing the Music component from "./Music".
import Games from "./Games"; // Importing the Games component from "./Games".
import Settings from "./Settings"; // Importing the Settings component from "./Settings".
import MyMusic from "./MyMusic"; // Importing the MyMusic component from "./MyMusic".
import Artists from "./Artists"; // Importing the Artists component from "./Artists".

class Screen extends React.Component {
  render() {
    return (
      <div style={styles.screen} id="screen-container">
        {" "}
        {/* Main container for the Screen component */}
        {this.props.activePage === "Home" ? (
          <Home
            activeItem={this.props.activeItem}
          /> /* Rendering Home component if activePage is "Home" */
        ) : null}
        {this.props.activePage === "Music" ? (
          <Music
            activeItem={this.props.activeItem}
          /> /* Rendering Music component if activePage is "Music" */
        ) : null}
        {this.props.activePage === "Games" ? <Games /> : null}{" "}
        {/* Rendering Games component if activePage is "Games" */}
        {this.props.activePage === "Settings" ? <Settings /> : null}{" "}
        {/* Rendering Settings component if activePage is "Settings" */}
        {this.props.activePage === "MyMusic" ? (
          <MyMusic
            audio={this.props.audio}
          /> /* Rendering MyMusic component with the audio prop if activePage is "MyMusic" */
        ) : null}
        {this.props.activePage === "Artists" ? <Artists /> : null}{" "}
        {/* Rendering Artists component if activePage is "Artists" */}
      </div>
    );
  }
}

const styles = {
  screen: {
    height: "50%",
    width: "95%",
    borderRadius: "12px",
    backgroundColor: "white",
    border: "2px solid black",
    marginTop: "1rem",
  },
};

export default Screen;
