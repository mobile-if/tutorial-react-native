import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const BASE_URL = "https://www.news.developeridn.com/";

// Functional
// export default function App() {
//   const [newsData, setNewsData] = React.useState({});

//   const getAllNews = async () => {
//     try {
//       let response = await fetch(
//         BASE_URL, {
//           method: 'GET',
//           mode: 'cors',
//           credentials: 'same-origin',
//           Vary: 'Origin',
//           headers: {
//             'Access-Control-Allow-Origin': 'https://www.news.developeridn.com/',
//           }
//         });
//       let jsonData = await response.json();
//       // console.log(jsonData.data);
//       setNewsData(jsonData);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   React.useEffect(() => {
//     getAllNews();
//   });

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar backgroundColor={'#ffffff'} />
//       <FlatList
//           data={newsData.data}
//           style={styles.listStyle}
//           keyExtractor={(item, index) => (`${item}--${index}`)}
//           renderItem={({item}) => (
//             <TouchableOpacity onPress={() => {}} style={styles.customCard}>
//               <View style={{
//                 flex: 1, 
//                 flexDirection: "row", 
//                 justifyContent: "center",
//                 alignItems: "center"}}>
//                 <Image 
//                     style={styles.tinyLogo}
//                     source={{
//                       uri: item.poster
//                     }}/>
//                 <View style={styles.rightContainer}>
//                   <View style={styles.head}>
//                     <Text style={{
//                       fontSize: 12
//                     }}>Kategori</Text>
//                     <Text style={{
//                       fontSize: 12
//                     }}>{item.tipe}</Text>
//                   </View>
//                   <Text 
//                     style={{flex: 1, flexWrap: "wrap"}}
//                     numberOfLines={2} 
//                     ellipsizeMode={"tail"}>
//                     {item.judul}
//                   </Text>
//                   <Text 
//                     style={{
//                       flex: 1, 
//                       flexWrap: "wrap",
//                       fontSize: 12,
//                       color: 'gray'}}
//                     numberOfLines={2} 
//                     ellipsizeMode={"tail"}>
//                     {item.waktu}
//                   </Text>
//                 </View>
//               </View>
//             </TouchableOpacity>
//           )}
//         />
//     </SafeAreaView>
//   );
// }

// Class
export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      newsData: {}
    };
  }

  componentDidMount() {
    this.getAllNews();
  }

  getAllNews() {
    fetch(BASE_URL)
        .then((response) => response.json())
        .then((json) => this.setState({
            newsData: json
          })
        )
        .catch((error) => console.log(error));
  }

  render() {
    const {newsData} = this.state;

    return(
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={'#ffffff'} />
        <FlatList
            data={newsData.data}
            style={styles.listStyle}
            keyExtractor={(item, index) => (`${item}--${index}`)}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => {}} style={styles.customCard}>
                <View style={{
                  flex: 1, 
                  flexDirection: "row", 
                  justifyContent: "center",
                  alignItems: "center"}}>
                  <Image 
                      style={styles.tinyLogo}
                      source={{
                        uri: item.poster
                      }}/>
                  <View style={styles.rightContainer}>
                    <View style={styles.head}>
                      <Text style={{
                        fontSize: 12
                      }}>Kategori</Text>
                      <Text style={{
                        fontSize: 12
                      }}>{item.tipe}</Text>
                    </View>
                    <Text 
                      style={{flex: 1, flexWrap: "wrap"}}
                      numberOfLines={2} 
                      ellipsizeMode={"tail"}>
                      {item.judul}
                    </Text>
                    <Text 
                      style={{
                        flex: 1, 
                        flexWrap: "wrap",
                        fontSize: 12,
                        color: 'gray'}}
                      numberOfLines={2} 
                      ellipsizeMode={"tail"}>
                      {item.waktu}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 4,
  },
  customCard: {
    elevation: 2,
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: "row",
    alignSelf: "baseline"
  },
  rightContainer: {
    flexDirection: "column",
    flex: 1
  },
  tinyLogo: {
    width: 60,
    height: 60,
    marginRight: 5,
    flex: 0
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainContainer: {
    paddingTop: 50
  },
  listStyle: {
    marginTop: 30
  }
});
