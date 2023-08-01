import React from "react"; // Importing the React library for building components.
import { ListGroup } from "react-bootstrap"; // Importing the ListGroup component from "react-bootstrap".

class Music extends React.Component {
  render() {
    return (
      <div style={styles.musicScreen} id="music-screen">
        {" "}
        {/* Main container for the Music component */}
        <div style={styles.menuList} id="menu-list">
          {" "}
          {/* Container for the menu list */}
          <div style={styles.titleBar}>
            <p style={{ fontWeight: "bold" }}>iPod</p>{" "}
            {/* Title bar displaying "iPod" text with bold font weight. */}
            <img
              style={styles.battery}
              src="https://www.svgrepo.com/download/2225/music.svg3260+"
            ></img>{" "}
            {/* Battery image displayed in the title bar */}
          </div>
          <ListGroup style={{ borderRadius: "0" }}>
            {/* ListGroup displaying menu items */}
            <ListGroup.Item
              style={{ border: "0", padding: "0.2rem 0.6rem" }}
              className={this.props.activeItem === "MyMusic" ? "active" : ""}
            >
              My Music{" "}
              {this.props.activeItem === "MyMusic" ? (
                <span style={{ float: "right", fontWeight: "bold" }}>&gt;</span>
              ) : (
                ""
              )}{" "}
              {/* Displaying an arrow icon if the item is active */}
            </ListGroup.Item>
            <ListGroup.Item
              style={{ border: "0", padding: "0.2rem 0.6rem" }}
              className={this.props.activeItem === "Artists" ? "active" : ""}
            >
              Artists{" "}
              {this.props.activeItem === "Artists" ? (
                <span style={{ float: "right", fontWeight: "bold" }}>&gt;</span>
              ) : (
                ""
              )}{" "}
              {/* Displaying an arrow icon if the item is active */}
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
  musicScreen: {
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
      'url("https://i.pinimg.com/originals/b5/ca/9a/b5ca9a6c64b6a5c445dc993dd6294d10.jpg")',
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

export default Music;
