import MyLayout from "../component/layout"
import Header from "../component/header"

export default function addNote() {
  return (
    <div>
      <Header />
      <MyLayout title="addNote" />

      <h1>Add Note</h1>

      <form>
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <br />
        <label>
          section:
          <input type="text" name="section" />
        </label>
        <br />
        <label>
          subject:
          <input type="text" name="subject" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

    </div>
  )
}
