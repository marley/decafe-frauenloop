function Event({ title, date, imgUrl }) {
  return (
    <div>
      <img src={imgUrl} width="150px" />
      <h3>{title}</h3>
      <p>{date}</p>
    </div>
  );
}

export default Event;
