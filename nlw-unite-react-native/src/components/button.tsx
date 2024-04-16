import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from "react-native"

type Props = TouchableOpacityProps & {
  title: string
  isLoading?: boolean
}

export function Button({ title, isLoading = false, ...rest }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={isLoading}
      style={{
        backgroundColor: "#F48F56",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        height: 50,
      }}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator className="text-green-500" />
      ) : (
        <Text className="text-green-900 text-base font-bold uppercase">
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
