import Link from "next/link";
const New = () => {
  return (
    <>
      <header className="header">
        <h1 className="logo-text">New</h1>
      </header>
      <form className="todo-form">
        <input type="text" name="title" className="todo-input" />
      </form>
      <div className="form-ctas">
        <Link href=".." className="cta">Cancel</Link>
        <button type="submit" className="cta">Create</button>
      </div>
    </>
  );
};

export default New;
