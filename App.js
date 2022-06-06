import { StyleSheet, Text, View, Button } from 'react-native'

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Another piece of text</Text>
			<Text>My name is Nutifafa</Text>
			<Button title='Click Here' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		marginBottom: 16,
		borderWidth: 2,
		borderColor: '#fab2cd',
    padding: 10,
    color: '#fab2cd',
	},
})
