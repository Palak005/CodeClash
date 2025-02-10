import "./create.css"; 

const CreateNote = () => {
    return (
        <div className="note-form-container">
            <h2>Create a New Note</h2>
            <form className="note-form">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        placeholder="Enter the note title"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea
                        id="content"
                        placeholder="Enter the note content"
                    ></textarea>
                </div>
                <button type="submit" className="create-note-button">
                    Create Note
                </button>
            </form>
        </div>
    );
};

export default CreateNote;
