import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
  name: String,
  idade?: String,
  onRemove: () => void,
} 

export function Participant({name, idade, onRemove}: Props){
  return(
    <View style={styles.container}>
      <Text style={styles.name}>
        {name} {' '} {idade}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={onRemove}
      >
        <Text style={styles.buttonText}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  )
}