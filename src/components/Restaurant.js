const Restaurant = ({ data }) => {
  return (
    <div className="restaurant">
      <div className="restaurant-info">
        <h1>{data.restaurant.name}</h1>
        <p>{data.restaurant.description}</p>
      </div>

      <div className="restaurant-img">
        <img src={data.restaurant.picture} alt="" />
      </div>
    </div>
  );
};

export default Restaurant;
