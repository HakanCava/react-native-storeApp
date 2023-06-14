import React from 'react';
import {SafeAreaView, View, Text, FlatList, StyleSheet} from 'react-native';
import BannerCard from './components/BannerCard';
import data_products from './helpers/data_products.json';
import Card from './components/Card';
import Input from './components/Input';
const App = () => {
  const renderProduct = ({item}) => <Card product={item} />;
  const keyExt = item => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Digital Store</Text>
      <Input />

      <FlatList
        ListHeaderComponent={() => <BannerCard />}
        keyExtractor={keyExt}
        data={data_products}
        renderItem={renderProduct}
        numColumns={2}
        horizontal={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexWrap: 'wrap',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'purple',
    textAlign: 'center',
  },
});

export default App;
