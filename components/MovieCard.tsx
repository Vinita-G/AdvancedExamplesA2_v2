import React from "react";
import { Text, View } from "react-native";
import Button from "./Button";
import { colors } from "../styles/colors";
import { defaultStyles } from "../styles/defaultStyles";

export type MovieData = {
  name: string;
  genre: string;
  rating: string;
  review: string;
};

type cardPropTypes = MovieData & {
  onDelete: () => void;
};

const MovieCard: React.FC<cardPropTypes> = ({
  name,
  genre,
  rating,
  review,
  onDelete,
}) => {
  return (
    <View style={defaultStyles.card}>
      <Text style={defaultStyles.cardTitle}>{name}</Text>
      <Text style={defaultStyles.subtitle}>Genre: {genre}</Text>
      <Text style={defaultStyles.subtitle}>Rating: {rating}</Text>
      <Text style={defaultStyles.text}>{review}</Text>

      <Button text="Delete" backgroundColor={colors.border} onPress={onDelete} />
    </View>
  );
};

export default MovieCard;
