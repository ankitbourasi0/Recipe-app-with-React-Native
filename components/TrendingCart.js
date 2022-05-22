import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
} from "react-native";
import React from "react";
import { SIZES, COLORS, FONTS, icons } from "../constants";
import { BlurView } from "expo-blur";

const RecipeCardInfo = ({ recipeItem }) => {
  return (
    <View style={{ flex: 1 }}>
      {/* Name and BookMark */}
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            width: "70%",
            color: COLORS.white,
            ...FONTS.h3,
            fontSize: 18,
          }}
        >
          {recipeItem.name}
        </Text>
        <Image
        source={recipeItem.isBookmark ? icons.bookmarkFilled : icons.bookmark}
        style={{
          width: 20,
          height: 20,
          tintColor: COLORS.darkGreen,
          marginRight: SIZES.base,
        }}
      />
      </View>
      {/* Duration and Serving */}
      <Text style={{color:COLORS.lightGray,...FONTS.body4}}>{recipeItem.duration} | {recipeItem.serving} Serving</Text>
      
    </View>
  );
};
const RecipeCardDetail = ({ recipeItem }) => {
  return (
    <BlurView tint="dark" intensity={50} style={styles.recipeCardContainer}>
      <RecipeCardInfo recipeItem={recipeItem} />
    </BlurView>
  );
  //   } else {
  //     return (
  //       <View
  //         style={{
  //           ...styles.recipeCardContainer,
  //           backgroundColor: COLORS.transparentDarkGray,
  //         }}
  //       >
  //         {/* <RecipeCardInfo recipeItem={recipeItem} /> */}
  //       </View>
  //     );
};
export default function TrendingCart({ containerStyle, recipeItem, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 350,
        width: 250,
        marginTop: SIZES.radius,
        marginRight: SIZES.radius,
        borderRadius: SIZES.radius,
        ...containerStyle,
      }}
    >
      {/* <Text>{recipeItem.name}</Text> */}
      {/* background */}
      <Image
        source={recipeItem.image}
        resizeMode="cover"
        style={{ width: 250, height: 350, borderRadius: SIZES.radius }}
      />
      {/* Category  */}
      <View
        style={{
          position: "absolute",
          top: 20,
          left: 15,
          paddingHorizontal: SIZES.radius,
          paddingVertical: 5,
          backgroundColor: COLORS.transparentGray,
          borderRadius: SIZES.radius,
        }}
      >
        <Text style={{ color: COLORS.white, ...FONTS.h4 }}>
          {recipeItem.category}
        </Text>
      </View>
      <RecipeCardDetail recipeItem={recipeItem} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  recipeCardContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    height: 100,
    paddingVertical: SIZES.radius,
    paddingHorizontal: SIZES.base,
    borderRadius: SIZES.radius,
  },
});
