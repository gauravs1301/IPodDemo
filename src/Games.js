import React from "react"; // Importing the React library for building components.
import gameImg from "../src/assets/images/gamingzone.jpg"; // Importing the gameImg from "../src/assets/images/gamingzone.jpg" file.

class Games extends React.Component {
  render() {
    return (
      <div style={styles.settings}>
        {" "}
        {/* Main container for the Games component. */}
        <div style={styles.titleBar}>
          <p style={{ fontWeight: "bold" }}>iPod</p>{" "}
          {/* Title bar displaying "iPod" text with bold font weight. */}
          <img
            style={styles.battery}
            src="https://www.svgrepo.com/download/2225/music.svg"
          ></img>{" "}
          {/* Battery image displayed in the title bar. */}
        </div>
        <div style={{ width: "100%", height: "90%" }}>
          <img style={styles.image} src={gameImg} alt="" />{" "}
          {/* Image displayed in the Games component from the imported gameImg. */}
        </div>
      </div>
    );
  }
}

const styles = {
  settings: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  image: {
    width: "100%",
    height: "100%",
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

export default Games;
