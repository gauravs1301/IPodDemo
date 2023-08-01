import React from "react"; // Importing the React library for building components.
import { ListGroup } from "react-bootstrap"; // Importing the ListGroup component from "react-bootstrap".

class Home extends React.Component {
  render() {
    return (
      <div style={styles.homeScreen} id="home-screen">
        {" "}
        {/* Main container for the Home component */}
        <div style={styles.menuList} id="menu-list">
          {" "}
          {/* Container for the menu list */}
          <div style={styles.titleBar}>
            <p style={{ fontWeight: "bold" }}>iPod</p>{" "}
            {/* Title bar displaying "iPod" text with bold font weight. */}
            <img
              style={styles.battery}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKmwMWhA--UlaXrjzu7i-UbW36R9Q4CNdkhg&usqp=CAU"
            ></img>{" "}
            {/* Battery image displayed in the title bar */}
          </div>
          <ListGroup style={{ borderRadius: "0" }}>
            {/* ListGroup displaying menu items */}
            <ListGroup.Item
              style={{ border: "0", padding: "0.2rem 0.6rem" }}
              className={this.props.activeItem === "NowPlaying" ? "active" : ""}
            >
              Now Playing{" "}
              {this.props.activeItem === "NowPlaying" ? (
                <span style={{ float: "right", fontWeight: "bold" }}>&gt;</span>
              ) : (
                ""
              )}{" "}
              {/* Displaying an arrow icon if the item is active */}
            </ListGroup.Item>
            <ListGroup.Item
              style={{ border: "0", padding: "0.2rem 0.6rem" }}
              className={this.props.activeItem === "Music" ? "active" : ""}
            >
              Music{" "}
              {this.props.activeItem === "Music" ? (
                <span style={{ float: "right", fontWeight: "bold" }}>&gt;</span>
              ) : (
                ""
              )}
            </ListGroup.Item>
            <ListGroup.Item
              style={{ border: "0", padding: "0.2rem 0.6rem" }}
              className={this.props.activeItem === "Games" ? "active" : ""}
            >
              Games{" "}
              {this.props.activeItem === "Games" ? (
                <span style={{ float: "right", fontWeight: "bold" }}>&gt;</span>
              ) : (
                ""
              )}
            </ListGroup.Item>
            <ListGroup.Item
              style={{ border: "0", padding: "0.2rem 0.6rem" }}
              className={this.props.activeItem === "Settings" ? "active" : ""}
            >
              Settings{" "}
              {this.props.activeItem === "Settings" ? (
                <span style={{ float: "right", fontWeight: "bold" }}>&gt;</span>
              ) : (
                ""
              )}
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div style={styles.imageContainer} id="image-container"></div>{" "}
        {/* Container for the image */}
      </div>
    );
  }
}

const styles = {
  homeScreen: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirecton: "row",
  },
  menuList: {
    //border:'1px solid black',
    height: "100%",
    width: "50%",
    boxShadow: "10px 0px 15px -5px rgba(0,0,0,0.75)",
    zIndex: "1",
  },
  imageContainer: {
    //border:'1px solid black',
    height: "100%",
    width: "50%",
    backgroundImage:
      'url("https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "0 12px 12px 0",
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

export default Home;
