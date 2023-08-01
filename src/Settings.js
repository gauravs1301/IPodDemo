import React from "react"; // Importing the React library for building components.

class Settings extends React.Component {
  render() {
    return (
      <div style={styles.settings}>
        {" "}
        {/* Main container for the Settings component */}
        <div style={styles.titleBar}>
          <p style={{ fontWeight: "bold" }}>iPod</p>{" "}
          {/* Title bar displaying "iPod" text with bold font weight. */}
          <img
            style={styles.battery}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIa8m88xfB0ocZNSm7ZHBi8hauIOT3L6ADCJfhj0PPnA&s"
          ></img>{" "}
          {/* Battery image displayed in the title bar */}
        </div>
        <div
          style={{
            width: "100%",
            height: "90%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {/* Container for the image */}
          <img
            style={styles.image}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzKn-GIaOGB4AkZMKGBA-eJaRmpW0XadTCzeULn9i&s"
          />
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
    width: "65%",
    height: "65%",
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

export default Settings;
