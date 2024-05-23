import { Button, Text, Surface } from "react-native-paper";
import { styles } from "../config/styles";

export default function HomeScreen({navigation}) {
  return (
    <Surface style={styles.container}>
      <Text>Bem vinda(o) ao app Maneiro</Text>
      <Button 
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
      >
        Logout
     </Button>
    </Surface>
  );
}
