import React from "react";
import { FlatList, SafeAreaView, StatusBar, View } from "react-native";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import { Browser, ListItem } from "../../components";
import { COLORS } from "../../constants/themes/colors";

const List = ({ navigation }) => {
  const userList = useSelector((state) => state.list.userList);
  const renderItem = ({ item }) => <ListItem {...item} />
  const keyExtractor = (item) => item.id;
  return (
    <SafeAreaView style={styles.container}>      
      <Browser/>
      <FlatList
        style={styles.flatList}
        data={userList}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );

};

export default List;