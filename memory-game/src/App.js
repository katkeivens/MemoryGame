import React, { Component } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Card from "./components/Cards";
import image from "./images.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    image,
    clickedimage: [],
    score: 0
  };

//when you click on a card ... the image is taken out of the array
  imageClick = event => {
    const currentimage = event.target.alt;
    const imageAlreadyClicked =
      this.state.clickedimage.indexOf(currentimage) > -1;

//if you click on a image that has already been selected, the game is reset and cards reordered
    if (imageAlreadyClicked) {
      this.setState({
        image: this.state.image.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedimage: [],
        score: 0
      });
        alert("You lose. Play again?");

//if you click on an available image, your score is increased and cards reordered
    } else {
      this.setState(
        {
          image: this.state.image.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedimage: this.state.clickedimage.concat(
            currentimage
          ),
          score: this.state.score + 1
        },
//if you get all 12 image corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              image: this.state.image.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedimage: [],
              score: 0
            });
          }
        }
      );
    }
  };
 
  render() {
    return (
      <div>
        <Nav
          score={this.state.score}
        />
        <Header />
        <div className="wrapper">
          {this.state.image.map(image => (
            <Card
              imageClick={this.imageClick}
              id={image.id}
              key={image.id}
              image={image.image}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;