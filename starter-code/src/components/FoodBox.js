import React, { Component } from "react";

class FoodBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      calories: this.props.calories,
      image: this.props.image,
      quantity: this.props.quantity
    };
  }

  render() {
    const { name, calories, image, quantity } = this.state;

    return (
      <section className="FoodBox">
        <h2>FoodBox</h2>

        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={image} alt={name} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{name}</strong> <br />
                  <small>{calories} cal</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    defaultValue={quantity}
                  />
                </div>
                <div className="control">
                  <button className="button is-info">+</button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    );
  }
}

export default FoodBox;
