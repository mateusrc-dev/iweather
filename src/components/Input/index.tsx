import {
  View,
  TextInput,
  TextInputProps,
  ActivityIndicator,
} from "react-native";

import { styles } from "./styles";
import { theme } from "@styles/theme";

type Props = TextInputProps & {
  isLoading?: boolean;
};

export function Input({ isLoading = false, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholderTextColor={theme.colors.gray_400}
        {...rest}
      />

      {isLoading && (
        <ActivityIndicator
          testID="activity-indicator" // identifier that will be used in the test to access this component within the test
          color={theme.colors.blue_light}
        />
      )}
    </View>
  );
}
