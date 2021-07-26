import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Restaurant from "./components/Restaurant";

function App() {
  // States declarations
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // Function to fetch through data using a useEffect()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://deliveroo-backend-jm.herokuapp.com"
        );
        console.log("Data ===>" + response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);
  return isLoading ? (
    <span>Loading...</span>
  ) : (
    <div className="main">
      <Header />
      <Restaurant data={data} />

      <div className="categories">
        {data.categories.map((category, index) => {
          return (
            <div key={index}>
              <h2 className="category-name">{category.name}</h2>

              <div className="meal-block">
                {category.meals.map((meal, index) => {
                  return (
                    <div className="container">
                      <div className="meal-card">
                        <div className="all-text">
                          <div className="texts">
                            <h2>{meal.title}</h2>
                            <div className="meal-desc">
                              <p>{meal.description}</p>
                            </div>
                          </div>

                          <div className="infos">
                            <span className="price">{meal.price}</span>
                            <span>{meal.popular}</span>
                          </div>
                        </div>

                        <div className="card-img">
                          <img src={meal.picture} alt="" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
