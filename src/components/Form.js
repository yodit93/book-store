const Form = () => (
  <form className="form" id="book-form">
    <h2 className="form-title">Add New Book</h2>
    <div className="form-rapper">
      <input type="text" className="add-book" placeholder="Book title" />
      <input type="text" className="category" placeholder="Category" list="book-cate" />
      <datalist id="book-cate" name="bookcategorylist" form="book-form">
        <option value="Science">Science</option>
        <option value="Economy">Economy</option>
        <option value="Fiction">Fiction</option>
        <option value="Web development">Web development</option>
      </datalist>
      <button className="add-btn" type="submit">Add</button>
    </div>
  </form>
);

export default Form;
