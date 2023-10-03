import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native'
import { Link } from 'solito/link'
import { createParam } from 'solito'

type Params = {
  industry?: string
}

const { useParams } = createParam<Params>()

function renderItem ({ element }: { element: string }) {
  return (
    <View style={styles.element}>
      <Text style={{...styles.elementText, color: styles.text.color}}>{element}</Text>
    </View>
  )
}

function ElementGrid (values: string[]) {
  return (
    <View style={styles.box}>
      <FlatList
        data={values}
        renderItem={({ item }) => renderItem({ element: item })}
        keyExtractor={(item, index) => index.toString()}
        numColumns={5}
      />
    </View>
  )
}

export function FiltersScreen() {
  const { params, setParams } = useParams()

  const options: string[] = [
    "DeepTech", "VR", "gig", "web3", "SaaS",
    "crypto", "agritech", "AI", "ML", "IoT",
    "gaming", "FinTech", "PropTech", "eCommerce",
    "data", "DTC", "enterprise", "social", "GovTech"
  ]
  let values: string[] = Array.from({ length: 40 }, () => options[Math.floor(Math.random() * (options.length - 1))]) as string[];

  const industry = params.industry

  const onPressIndustry = () => {
    setParams({
      industry: 'tech',
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>filters</Text>

      {
        ElementGrid(values)
      }

      <Pressable onPress={onPressIndustry}>
        <Text>industry</Text>
      </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignitems: 'center',
    justifyContent: 'center',
    backgroundColor: '#252'
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
  },
  box: {
    padding: 10
  },
  element: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  elementText: {
    fontWeight: '500',
    fontSize: 16
  }
})