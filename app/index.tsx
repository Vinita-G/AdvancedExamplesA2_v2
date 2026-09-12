import MovieCard, { MovieData } from "@/components/MovieCard";
import MovieQuesions from "@/components/MovieQuesions";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  View
} from "react-native";
import Button from "../components/Button";
import { defaultStyles } from "../styles/defaultStyles";

export default function Index() {
  // 1. Track visibility state (true/false)
  const [isVisible, setIsVisible] = useState(false);
  const [movie, setMovie] = useState<MovieData | null>(null);
  return (
    <ScrollView style={defaultStyles.scrollView}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={defaultStyles.title}>Movie Tracker</Text>

        <Button
          text="Create a Movie Card!"
          onPress={() => setIsVisible(!isVisible)}>
        </Button>

        {/* Open a questionaire to create a movie card */}
        {isVisible && (
          <MovieQuesions
            onSubmit={(newMovie) => {
              setMovie(newMovie);
              setIsVisible(false);
            }}
          />
        )}

        {movie && (
          <MovieCard {...movie} onDelete={() => setMovie(null)} />
        )}
      </View>
    </ScrollView>
  );
}
