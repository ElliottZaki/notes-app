const NotesModel = require('./notesModel');

describe('notesModel', () => {
  const notesModel = new NotesModel();

  it('adds a note to the notesModel', () => {
    notesModel.addNote('Hello World!')
    notesModel.addNote('Hello Jupiter!')
    expect(notesModel.notes).toEqual(['Hello World!', 'Hello Jupiter!']);
  });

  it('returns an array of all my notes', () => {
    expect(notesModel.getNotes()).toEqual(['Hello World!', 'Hello Jupiter!']);
  });
  

  it('empties the array of all my notes', () => {
    notesModel.reset()
    expect(notesModel.notes).toEqual([]);
  })

})

