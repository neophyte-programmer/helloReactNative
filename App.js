import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import { useState } from 'react'

export default function App() {
	const [enteredGoalText, setEnteredGoalText] = useState('')
	const [userGoals, setUserGoals] = useState([])

	// Responsible for fetching the user input
	function goalInputHandler(enteredText) {
		setEnteredGoalText(enteredText)
	}

	// Adds new goal when button is clicked
	function addGoalHandler() {
		setUserGoals((currentUserGoals) => [
			...currentUserGoals,
			enteredGoalText,
		])
	}

	return (
		// Stores the different content of the app
		<View style={styles.appContainer}>
			{/* Add The Goals Here */}
			<View style={styles.inputContainer}>
				<TextInput
					placeholder='Enter your goal!'
					style={styles.textInput}
					onChangeText={goalInputHandler}
				/>
				<Button title='Add Goal' onPress={addGoalHandler} color={'#a76bcf'} />
			</View>
      <View style={styles.goalTitleContainer}>
        <Text style={styles.goalTitle}>Your Goals</Text>
      </View>
			{/* Store The List of Goals here */}
      <View style={styles.goalContainer}>
        {userGoals.map((goal) => 
          <Text key={goal} style={styles.goalItem}>{ goal }</Text>
        )}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		marginTop: 50,
		paddingHorizontal: 16,
	},
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 24,
		borderBottomColor: '#ccc',
		borderBottomWidth: 1,
	},
	textInput: {
		width: '70%',
		borderColor: '#ccc',
		borderWidth: 1,
		borderRadius: 5,
		marginRight: 5,
		padding: 5,
  },
  goalTitleContainer: {
    // flex: 1,
    marginBottom: 10,
  },
  goalTitle: {
    fontSize: 30,
    color: '#a76bcf',
    textAlign: 'left',
    fontWeight: 'bold',
  },
	goalContainer: {
		flex: 4,
  },
  goalItem: {
    fontSize: 20,
    backgroundColor: '#a76bcf',
    padding: 10,
    marginBottom: 10,
    color: '#fff',
    
  }
})
