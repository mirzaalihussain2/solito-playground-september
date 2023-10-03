import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Link } from 'solito/link'
import { useRouter } from 'solito/router'

export function SettingsScreen() {
  const { back } = useRouter()

  return (
    <View style={styles.container}>
      <Pressable onPress={() => back()}>
        <Text style={styles.linkText}>back</Text>
      </Pressable>

      <Text style={styles.text}>settings</Text>

      <Link href='/admin'>
        <Text style={styles.linkText}>admin</Text>
      </Link>

      <Link href='/welcome'>
        <Text style={styles.linkText}>welcome</Text>
      </Link>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignitems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222'
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 100,
    fontWeight: 'bold'
  },
  linkText: {
    color: '#FFFF00',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})