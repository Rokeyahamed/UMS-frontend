import MyLayout from "./component/layout"
import { useRouter } from 'next/router'

export default function Faculty() {
  const router = useRouter();

  const handleFacultySelectionSubmit = (event) => {
    event.preventDefault();
    const selectedOption = event.target.facultyOption.value.replace(' ', '');
    switch (selectedOption) {
      case 'AddFaculty':
        router.push('/faculty/addFaculty');
        break;
      case 'DeleteFaculty':
        router.push('/faculty/deleteFaculty');
        break;
      case 'UpdateFaculty':
        router.push('/faculty/updateFaculty');
        break;
      case 'ShowAllFaculty':
        router.push('/faculty/facultyDetails');
        break;
      default:
        router.push(`/faculty/${selectedOption}`);
        break;
    }
  };

  const handleNotesSelectionSubmit = (event) => {
    event.preventDefault();
    const selectedOption = event.target.notesOption.value.replace(' ', '');
    switch (selectedOption) {
      case 'AddNotes':
        router.push('/notes/addNotes');
        break;
      case 'DeleteNotes':
        router.push('/notes/deleteNotes');
        break;
      case 'UpdateNotes':
        router.push('/notes/updateNotes');
        break;
      case 'ShowAllNotes':
        router.push('/notes/notesDetails');
        break;
      default:
        router.push(`/notes/${selectedOption}`);
        break;
    }
  };

  const handleStudentSelectionSubmit = (event) => {
    event.preventDefault();
    const selectedOption = event.target.studentOption.value.replace(' ', '');
    switch (selectedOption) {
      case 'AddStudent':
        router.push('/student/addStudent');
        break;
      case 'DeleteStudent':
        router.push('/student/deleteStudent');
        break;
      case 'UpdateStudent':
        router.push('/student/updateStudent');
        break;
      case 'ShowAllStudents':
        router.push('/student/studentDetails');
        break;
      default:
        router.push(`/student/${selectedOption}`);
        break;
    }
  };

  return (
    <>
      <MyLayout title="Faculty" />
      <h1>Faculty</h1>
      <form onSubmit={handleFacultySelectionSubmit}>
        <label htmlFor="selectFacultyOption">Select an option:</label>
        <select id="selectFacultyOption" name="facultyOption">
          <option value="" disabled>Select an option</option>
          <option value="AddFaculty">Add Faculty</option>
          <option value="DeleteFaculty">Delete Faculty</option>
          <option value="UpdateFaculty">Update Faculty</option>
          <option value="ShowAllFaculty">Show All Faculty</option>
        </select>
        <button type="submit">Submit</button>
      </form>

      <h1>Notes</h1>
      <form onSubmit={handleNotesSelectionSubmit}>
        <label htmlFor="selectNotesOption">Select an option:</label>
        <select id="selectNotesOption" name="notesOption">
          <option value="" disabled>Select an option</option>
          <option value="AddNotes">Add Notes</option>
          <option value="DeleteNotes">Delete Notes</option>
          <option value="UpdateNotes">Update Notes</option>
          <option value="ShowAllNotes">Show All Notes</option>
        </select>
        <button type="submit">Submit</button>
      </form>

      <h1>Student</h1>
      <form onSubmit={handleStudentSelectionSubmit}>
        <label htmlFor="selectStudentOption">Select an option:</label>
        <select id="selectStudentOption" name="studentOption">
          <option value="" disabled>Select an option</option>
          <option value="AddStudent">Add Student</option>
          <option value="DeleteStudent">Delete Student</option>
          <option value="UpdateStudent">Update Student</option>
          <option value="ShowAllStudent">Show All Student</option>
        </select>
        <button type="submit">Submit</button>
      </form>
</>
  )}