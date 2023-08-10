import MyLayout from "../component/layout"
import Header from "../component/header"

export default function updateFaculty() {
  return (
    <div>
      <Header />
      <MyLayout title="updateFaculty" />

      <h1>Update Faculty</h1>

      <form>
        <label>
        updated  Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
       updated   Email:
          <input type="text" name="email" />
        </label>
        <br />
        <label>
         updated Phone:
          <input type="text" name="phone" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

    </div>
  )
}
