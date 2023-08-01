import React from "react";
import artistImage from "./assets/images/homeimage.jpeg"; // Importing the artistImage from the "./assets/images/homeimage.jpeg" file.

class Artists extends React.Component {
  render() {
    return (
      /* Main container for the Artists component. */
      <div style={styles.artistsContainer}>
        <div style={styles.titleBar}>
          <p style={{ fontWeight: "bold" }}>iPod</p>

          {/* Battery image displayed in the title bar. */}
          <img
            style={styles.battery}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_zaJ3YNWuALyvtzO3HZrmIaDihZIdxP8pXg&usqp=CAU"
          ></img>
        </div>

        <div style={styles.info}>
          <div style={styles.imageContainer}></div>
          {/* Container for displaying the artistImage as a background image. */}

          <div style={styles.subInfo}>
            <h4 style={{ marginBottom: "0.5rem" }}>
              IPod.js{" "}
              <span>
                <img
                  style={styles.image}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ZGokewCVK-nEbTZUZGl3Si3Q53qmBiDwSg&usqp=CAU"
                />
              </span>
            </h4>
          </div>
        </div>

        <div style={styles.info2}></div>
        {/* Container for additional information, empty in this case. */}
      </div>
    );
  }
}

const styles = {
  artistsContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  imageContainer: {
    height: "65%",
    width: "35%",
    borderRadius: "50%",
    backgroundImage: `url(${artistImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    alignSelf: "center",
  },
  image: {
    width: "2rem",
    height: "2rem",
  },
  info: {
    height: "70%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  info2: {
    width: "100%",
    height: "30%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  subInfo: {
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

export default Artists;
