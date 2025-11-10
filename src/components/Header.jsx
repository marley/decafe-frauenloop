function Header({ title, size, subtitle }) {
  let titleSize = "h1";
  if (size === "small") {
    titleSize = "h2";
  }
  return (
    <div>
      <h1 className={titleSize}>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

export default Header;
