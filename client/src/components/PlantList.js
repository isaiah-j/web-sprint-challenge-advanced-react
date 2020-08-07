import React, { Component } from "react";
import axios from "axios";

export default class PlantList extends Component {
  // add state with a property called "plants" - initialize as an empty array
  constructor() {
    super()
    this.state = {

    }
  }

  fetchPlants = async () => {
    try {
      let response = await axios.get('http://localhost:3333/plants')
      let plants = response.data.plantsData
      this.setState({ plants: plants })

    } catch (error) {
      console.log(error)
    }

  }

  // filterPlants = (value) => {
  //   this.setState({
  //     plants: this.state.plants.filter((plant) => {

  //       return plant.name.includes(value)

  //     })
  //   })
  // }
  // Fetch plants and inititalize it to state
  componentDidMount() {
    this.fetchPlants()
  }



  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  //   - set the returned plants array to this.state.plants

  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  render() {
    let searchField = this.props.searchValue?.filteredValue || ''
    const filteredPlants = this?.state?.plants?.filter((plant) => {
      plant = plant.name.toLowerCase()
      return plant.includes(searchField.toLowerCase())
    })

    return (
      <main className="plant-list">
        {filteredPlants?.map((plant) => (
          <div className="plant-card" key={plant.id}>
            <img className="plant-image" src={plant.img} alt={plant.name} />
            <div className="plant-details">
              <h2 className="plant-name">{plant.name}</h2>
              <p className="plant-scientific-name">{plant.scientificName}</p>
              <p>{plant.description}</p>
              <div className="plant-bottom-row">
                <p>${plant.price}</p>
                <p>☀️ {plant.light}</p>
                <p>💦 {plant.watering}x/month</p>
              </div>
              <button
                className="plant-button"
                onClick={() => this.props.addToCart(plant)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </main>
    );
  }
}
