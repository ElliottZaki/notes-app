class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');

    document.querySelector('#add-note-button').addEventListener('click', () => {
      const newNote = document.querySelector('#add-note-input').value;
      this.addNewNote(newNote);
      //  The line below allows the text input to reset to an empty value after the user clicked the button.
      this.newNote = "";
    });
  }

  addNewNote(newNote) {
    this.model.addNote(newNote);
    this.displayNotes();
  }
  
  displayNotes() {
    this.removeOldNotes();

    const notes = this.model.getNotes()

    // For each note, create and append a new element on the main container
    notes.forEach(note => {
      const noteEl = document.createElement('div');
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    })
  }

  removeOldNotes() {
    const divClass = document.querySelectorAll('.note');

    divClass.forEach(element => {
      element.remove();
  });
  }
  
  
}

module.exports = NotesView;

