   class NotesModel {
    constructor() {
      this.notes = []
    };
    
    getNotes() {
      return this.notes;
    }

    addNote(notes) {
      this.notes.push(notes);
    }

    reset() {
      this.notes = [];
    }

    }
module.exports = NotesModel;