import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const NoteCard = ({ note, onToggleCheck }) => {
  // Set color only once when component renders
  const colors = ['#ffd54f', '#81c784', '#ff8a65', '#64b5f6', '#ba68c8'];
  const randomColor = React.useMemo(() => 
    colors[Math.floor(Math.random() * colors.length)], []);

  return (
    <View style={[styles.card, { backgroundColor: randomColor }]}>
      <TouchableOpacity 
        style={styles.checkbox}
        onPress={onToggleCheck}
      >
        <View style={[styles.checkboxInner, note.checked && styles.checked]} />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={[styles.text, note.checked && styles.checkedText]}>{note.text}</Text>
        <Text style={[styles.timestamp, note.checked && styles.checkedText]}>
          {note.timestamp.toLocaleTimeString()}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    elevation: 3,
    transform: [{ rotate: '-1deg' }],
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#000',
    marginRight: 10,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxInner: {
    width: 14,
    height: 14,
    backgroundColor: 'transparent',
    borderRadius: 2,
  },
  checked: {
    backgroundColor: '#000',
  },
  content: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: 'System',
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
  },
  checkedText: {
    textDecorationLine: 'line-through',
    opacity: 0.6
  },
});

export default NoteCard;
