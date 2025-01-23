import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const NoteInput = ({ onSubmit }) => {
  const [noteText, setNoteText] = useState('');

  const handleSubmit = () => {
    if (noteText.trim()) {
      onSubmit(noteText);
      setNoteText('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={noteText}
        onChangeText={setNoteText}
        placeholder="Write your note here!"
        multiline
      />
      <Button 
        title="Add Note!" 
        onPress={handleSubmit}
        color="#ff9800"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 10,
  },
});

export default NoteInput;
