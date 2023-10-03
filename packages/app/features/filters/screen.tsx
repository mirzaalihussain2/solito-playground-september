import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native'
import { Link } from 'solito/link'
import { createParam } from 'solito'
import { useState } from 'react'

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
    <View style={styles.elementBox}>
      <FlatList
        data={values}
        renderItem={({ item }) => renderItem({ element: item })}
        keyExtractor={(item, index) => index.toString()}
        numColumns={5}
      />
    </View>
  )
}

// function renderFilter ({ filter, onPressFilter }: { filter: string, onPressFilter: () => void }) {
//   return (
//     <Pressable style={styles.filter} onPress={onPressFilter}>
//       <Text style={styles.filterText}>{filter}</Text>
//     </Pressable>
//   )
// }

// function FilterGrid (filterList: string[], filterFunction: () => void) {
//   return (
//     <View style={styles.filterBox}>
//       {
//         filterList.map((x) => renderFilter)
//       }

//       <FlatList
//         data={filterList}
//         renderItem={({ item }) => renderFilter({ filter: item, onPressFilter: filterFunction })}
//         keyExtractor={(item, index) => index.toString()}
//         numColumns={8}
//       />
//     </View>
//   )
// }

export function FiltersScreen() {
  const options: string[] = [
    "DeepTech", "VR", "gig", "web3", "SaaS",
    "crypto", "agritech", "AI", "ML", "IoT",
    "gaming", "FinTech", "PropTech", "eCommerce",
    "data", "DTC", "enterprise", "social", "GovTech"
  ]

  const values: string[] = Array.from({ length: 40 }, () => options[Math.floor(Math.random() * (options.length - 1))]) as string[];
  const [valList, setValList] = useState(values)
  const { params, setParams } = useParams()


  // function filterFunction ({ filter }: { filter: string }) {
  //   setParams({
  //     industry: filter
  //   });
  //   setValList(valList.filter(ind => ind == filter));
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>filters</Text>
      {
        /* <View style={styles.filterBox}>
          {
            options.map(x => {
              console.log(x)
            })
          }
        </View> */

        /* { FilterGrid(options, filterFunction) } */
      }
      { ElementGrid(values) }
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
  elementBox: {
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
  },
  filterBox: {
    flexDirection: 'row',
    padding: 10
  },
  filter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5
  },
  filterText: {}
})