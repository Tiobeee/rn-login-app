import { View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function HomeScreen({navigation}) {
  return (
    <View>
      <Text>Bem vinda(o) ao app Maneiro</Text>
      <Button 
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
      >
        Logout
     </Button>
    </View>
  );
}
