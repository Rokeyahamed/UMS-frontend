import MyLayout from "../component/layout"
import Header from "../component/header"

export default function updateStudent() {
  return (
    <div>
      <Header />
      <MyLayout title="updateStudent" />

      <h1>Update Student</h1>

      <form>
        <label>
         updated Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
         updated Email:
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
