import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Button,
  SectionList,
} from 'react-native';
import axios from 'axios';

const sections = [
  { title: 'D', data: ['Devin', 'Dan', 'Dominic'] },
  {
    title: 'J',
    data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'],
  },
];

const FlatListBasics = (): JSX.Element => {
  const [listViews, setListViews] = useState<JSX.Element[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data:usersData } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    const users = usersData.map((user: any) => {
      return { name: user.name, id: user.id.toString() };
    });

    setListViews(users);
  };

  const renderItemFunction = ({ item }: any) => {
    return <Text>{item.name}</Text>;
  };

  const renderSectionHeaderFn = (props: any) => {
    const { section } = props;

    return <Text>{section.title}</Text>;
  };

  return (
    <View style={styles.container}>
      {/** renderItem={({item})=>{return JSX:Element}} */}
      <FlatList
        data={listViews}
        renderItem={renderItemFunction}
        keyExtractor={(item: any) => {
          return item.id;
        }}
      />
      <SectionList
        sections={sections}
        renderItem={({ item }: any) => {
          return <Text>{item}</Text>;
        }}
        renderSectionHeader={renderSectionHeaderFn}
        keyExtractor={(item: any, index: any) => {
          return item + index;
        }}
      />
      <Button onPress={fetchData} title="button" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default FlatListBasics;
