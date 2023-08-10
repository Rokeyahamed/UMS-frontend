import MyLayout from "../component/layout"
import Header from "../component/header"

export default function addFaculty() {
  return (
    <div>
      <Header />
      <MyLayout title="addStudent" />

      <h1>Add Student</h1>

      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <br />
        <label>
          Phone:
          <input type="text" name="phone" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

    </div>
  )
}
