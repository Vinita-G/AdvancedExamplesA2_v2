import React, { useState } from "react";
import {
    Text,
    View
} from "react-native";
import TextFeild from "../components/TextFeild";
import { defaultStyles } from "../styles/defaultStyles";

type questionPropsType = {
  color?: string;
  backgroundColor?: string;
};

const MovieQuesions: React.FC<questionPropsType> = ({
    color = defaultStyles.buttonText.color,
    backgroundColor = defaultStyles.card.backgroundColor,
}) => {
    const [movieName, setMovieName] = useState<string>("");
    const [movieGenre, setMovieGenre] = useState<string>("");
    const [movieRating, setMovieRating] = useState<string>("");
    const [movieReview, setMovieReview] = useState<string>("");

    return (
        <View 
            style = {{
                flex: 1,
                justifyContent: "center",
                borderWidth: 3,
                padding: 10,
                margin: 10,
                borderRadius: 10,
                borderColor: color,
                backgroundColor: backgroundColor,
            }}
        >
            <Text style={defaultStyles.subtitle}>Movie Name:</Text>
            <TextFeild value={movieName} onChangeText = {setMovieName} />

            <Text style={defaultStyles.subtitle}>Movie Genre:</Text>
            <TextFeild value={movieGenre} onChangeText = {setMovieGenre} />

            <Text style={defaultStyles.subtitle}>Movie Rating: </Text>
            <TextFeild value={movieRating} onChangeText={setMovieRating} />

            <Text style={defaultStyles.subtitle}>Movie Review:</Text>
            <TextFeild value={movieReview} onChangeText = {setMovieReview} />

            <Text style={defaultStyles.text}>Movie Name: {movieName}</Text>
        </View>
    );
};

export default MovieQuesions;
