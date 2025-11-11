function Button({ title }) {
  return (
    <div className="d-flex justify-content-center">
      <button class="bg-info">{title}</button>
      {/* so far this button does nothing */}
    </div>
  );
}

export default Button;
