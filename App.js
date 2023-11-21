import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { DataTable, Divider } from "react-native-paper";
import { Clients } from "./src/Clients";
import { FlatList } from "react-native";

export default function App() {
  return (
    <View style={styles.maincontent}>
    <ScrollView>
      <View style={styles.main}>
        <Text style={styles.texttitle}> Account Table</Text>
        <DataTable style={styles.content}>
          <DataTable.Header style={styles.headertxt}>
            <DataTable.Title>ID</DataTable.Title>
            <DataTable.Title>Username</DataTable.Title>
            <DataTable.Title>Password</DataTable.Title>
            <DataTable.Title>Usertype</DataTable.Title>
          </DataTable.Header>
            {Clients.map((client) => {
              return (
                <View>
                  <DataTable.Row style={styles.rowtext}>
                    <DataTable.Cell>{client.id}</DataTable.Cell>
                    <DataTable.Cell>{client.username}</DataTable.Cell>
                    <DataTable.Cell>{client.password}</DataTable.Cell>
                    <DataTable.Cell>{client.usertype}</DataTable.Cell>
                  </DataTable.Row>
                </View>
              );
            })}
        </DataTable>
        <Divider/>

        <Text style={styles.texttitle}> Users Table</Text>
        <DataTable style={styles.content}>
          <DataTable.Header style={styles.headertxt}>
            <DataTable.Title>ID</DataTable.Title>
            <DataTable.Title>Firstname</DataTable.Title>
            <DataTable.Title>Lastname</DataTable.Title>
            <DataTable.Title>Course</DataTable.Title>
            <DataTable.Title>Year&Section</DataTable.Title>
          </DataTable.Header>
          <ScrollView>
            {Clients.map((client) => {
              return (
                <View>
                  <DataTable.Row style={styles.rowtext}>
                    <DataTable.Cell>{client.id}</DataTable.Cell>
                    <DataTable.Cell>{client.name.firstname}</DataTable.Cell>
                    <DataTable.Cell>{client.name.lastname}</DataTable.Cell>
                    <DataTable.Cell>{client.course}</DataTable.Cell>
                    <DataTable.Cell>{client.yearsection}</DataTable.Cell>
                  </DataTable.Row>
                </View>
              );
            })}
          </ScrollView>
        </DataTable>
        <Divider/>

        <Text style={styles.texttitle}> Student Table</Text>
        <DataTable style={styles.content}>
          <DataTable.Header style={styles.headertxt}>
            <DataTable.Title>ID</DataTable.Title>
            <DataTable.Title>Username</DataTable.Title>
            <DataTable.Title>Password</DataTable.Title>
            <DataTable.Title>Usertype</DataTable.Title>
          </DataTable.Header>
          <FlatList
            data={Clients.filter((client) => client.usertype == "Student")}
            keyExtractor={(client) => client.id.toString()}
            renderItem={({ item }) => (
              <DataTable.Row style={styles.rowtext}>
                <DataTable.Cell>{item.id}</DataTable.Cell>
                <DataTable.Cell>{item.username}</DataTable.Cell>
                <DataTable.Cell>{item.password}</DataTable.Cell>
                <DataTable.Cell>{item.usertype}</DataTable.Cell>
              </DataTable.Row>
            )}
          />
        </DataTable>
      </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  maincontent:{
    paddingTop:45,
  },
  main: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    alignContent: "center",
  },

  texttitle: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
  },

  content: {
    padding: 15,
  },

  headertxt: {
    backgroundColor: "#C4C1A4",
    padding: 5,
    gap: 5,
  },

  rowtext: {
    textAlign: "left",
  },
});
