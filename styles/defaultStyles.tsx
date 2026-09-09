import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },

  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: colors.text,
  },

  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
  },

  text: {
    fontSize: 10,
    color: colors.textSecondary,
  },

  card: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
  },

  button: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "bold",
  },

  input: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    color: colors.text,
  },

  scrollView: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
});
