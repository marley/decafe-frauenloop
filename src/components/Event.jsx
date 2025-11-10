function Event({ title, date, imgUrl }) {
  return (
    <div>
      <img src={imgUrl} alt="autumn leaves and  hands" />
      <h1>{title}</h1>
      <p>{date}</p>
    </div>
  );
}

export default Event;
