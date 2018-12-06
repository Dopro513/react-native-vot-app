import { StyleSheet, Dimensions } from "react-native";
import { Constants } from "expo";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  items: {
    padding: 16
  },
  headLabel: {
    fontSize: 16,
    fontWeight: "600"
  },
  item: {
    marginTop: 10,
    flexDirection: "row",
    height: 35,
    justifyContent: "center",
    alignItems: "center"
  },
  itemLabel: {
    fontSize: 14,
    fontWeight: "600",
    width: width / 3 - 20
  },
  itemValue: {
    width: width / 3 + 80
  },
  itemLink: {
    textDecorationLine: "underline",
    color: "#2D61A4"
  },
  description: {
    marginTop: 16,
    marginBottom: 16
  },
  row: {
    flexDirection: "row"
  },
  col: {
    flexDirection: "row",
    alignItems: "center",
    width: width / 2
  },
  switch: {
    marginTop: -10,
    marginLeft: 16
  }
});

export default styles;
