import MyLayout from "../component/layout"
import Header from "../component/header"

export default function UpdateNotes() {
  return (
    <div>
      <Header />
      <MyLayout title="updatedNote" />

      <h1>Updeted Notes</h1>

      <form>
        <label>
         updated Title:
          <input type="text" name="title" />
        </label>
        <br />
        <label>
          updated section:
          <input type="text" name="section" />
        </label>
        <br />
        <label>
         updated subject:
          <input type="text" name="subject" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

    </div>
  )
}
