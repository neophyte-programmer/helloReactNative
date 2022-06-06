import { StyleSheet, Text, View, Button, TextInput } from 'react-native'

export default function App() {
  return (
    // Stores the different content of the app
    <View style={styles.appContainer}>
      {/* Add The Goals Here */}
      <View style={styles.addGoalContainer}>
        <TextInput placeholder='Enter your goal!' style={styles.textInput} />
        <Button title='Add Goal' />
      </View>

      {/* Store The List of Goals here */}
      <View>
        <Text>Goals</Text>
      </View>
      
		</View>
	)
}

const styles = StyleSheet.create({
  appContainer: {
    margin: 50,
  },
  addGoalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 5,
    padding: 5,
  },
})
