import Navbar from '../../components/navbar/Navbar';
import './Home.css';

const Home = () => {
    const notes = [
        { title: "Note 1", content: "This is the content of note 1." },
        { title: "Shopping List", content: "Buy milk, bread, and eggs." },
        { title: "Workout Plan", content: "Run for 30 minutes, do 50 pushups." },
        { title: "Meeting Notes", content: "Discuss project updates with the team." },
        { title: "Note 1", content: "This is the content of note 1." },
        { title: "Shopping List", content: "Buy milk, bread, and eggs." },
        { title: "Workout Plan", content: "Run for 30 minutes, do 50 pushups." },
        { title: "Meeting Notes", content: "Discuss project updates with the team." },
        { title: "Note 1", content: "This is the content of note 1." },
        { title: "Shopping List", content: "Buy milk, bread, and eggs." },
        { title: "Workout Plan", content: "Run for 30 minutes, do 50 pushups." },
        { title: "Meeting Notes", content: "Discuss project updates with the team." }
      ];
  return (
    <>
        <Navbar/>
        <div className="home-container">
        <h1>Your Notes</h1>
        <div className="notes-grid">
            {notes.length > 0 ? (
            notes.map((note, index) => (
                <div className="note-card" key={index}>
                <h2 className="note-title">{note.title}</h2>
                <p className="note-content">{note.content}</p>
                <button className="note-user-btn">username</button>
                </div>
            ))
            ) : (
            <p className="no-notes-message">No notes available. Create your first note!</p>
            )}
        </div>
        </div>
    </>
  );
};

export default Home;

