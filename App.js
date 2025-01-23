import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';
import NoteInput from './components/NoteInput';
import NoteCard from './components/NoteCard';

export default function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (noteText) => {
    const newNote = {
      id: Date.now(),
      text: noteText,
      timestamp: new Date(),
      checked: false,
    };
    setNotes([...notes, newNote]);
  };

  const toggleCheck = (noteId) => {
    setNotes(notes.map(note => 
      note.id === noteId ? {...note, checked: !note.checked} : note
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <NoteInput onSubmit={addNote} />
      <ScrollView style={styles.notesContainer}>
        {notes.map(note => (
          <NoteCard 
            key={note.id}
            note={note}
            onToggleCheck={() => toggleCheck(note.id)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 50,
  },
  notesContainer: {
    padding: 20,
  },
});
