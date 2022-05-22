import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  Platform,
} from "react-native";
import { useRef } from "react/cjs/react.development";
import { BlurView } from "expo-blur";
import { SIZES, FONTS, COLORS, icons } from "../constants";

const HEADER_HEIGHT = 350;
const Recipe = ({ navigation, route }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const scrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    let { recipe } = route.params;
    setSelectedRecipe(recipe);
  }, []);

  function IngredientCardHeader() {
    return (
      <View
        style={{
          alignItems: "center",
          overflow: "hidden",
          marginTop: -1000,
          paddingTop: 1000,
        }}
      >
        {/* backgroundImage  */}
        <Animated.Image
          source={selectedRecipe?.image}
          resizeMode="contain"
          style={{
            height: HEADER_HEIGHT,
            width: "200%",
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
                }),
              },
              {
                scale: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [2, 1, 0.75],
                }),
              },
            ],
          }}
        />
      </View>
    );
  }
  function HeaderNavBar() {
    return (
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 90,
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
          paddingHorizontal: SIZES.padding,
          paddingBottom: 10,
        }}
      >
        {/* Back Button  */}
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 35,
            width: 35,
            borderRadius: 18,
            borderWidth: 1,
            borderColor: COLORS.lightGray,
            backgroundColor: COLORS.transparentBlack5,
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={icons.back}
            style={{ width: 15, height: 15, tintColor: COLORS.lightGray }}
          />
        </TouchableOpacity>

        {/* Bookmark */}
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 35,
            width: 35,
          }}
        >
          <Image
            style={{ width: 30, height: 30, tintColor: COLORS.darkGreen }}
            source={
              selectedRecipe?.isBookmark ? icons.bookmarkFilled : icons.bookmark
            }
          />
        </TouchableOpacity>
      </View>
    );
  }
  function RecipeInfo() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 130,
          width: SIZES.width,
          paddingHorizontal: 30,
          paddingVertical: 20,
          alignItems: "center",
        }}
      >
          {/* Recipe Name  */}
          <View style={{flex:1,justifyContent:"center"}}>
        <Text style={{...FONTS.h2}}>
            {selectedRecipe?.name}
        </Text>
        <Text style={{marginTop:5,color:COLORS.lightGray2,...FONTS.body4}}>{selectedRecipe?.duration} | {selectedRecipe?.serving} Serving</Text>
          </View>
      </View>
    );
  }
  function IngredientInfo(){
      return(
          <View style={{flexDirection:"row",paddingHorizontal:30,marginTop:SIZES.radius,marginBottom:SIZES.padding}}>
              <Text style={{flex:1,...FONTS.h3}}>Ingredients</Text>
              <Text style={{color:COLORS.lightGray2,...FONTS.body4}} >{selectedRecipe?.ingredients.length} items</Text>

          </View>
      )
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <Animated.FlatList
        data={selectedRecipe?.ingredients}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Header  */}

            {IngredientCardHeader()}
            {/* Info */}
            {RecipeInfo()}
            
            {/* Ingredientinfo  */}
            {IngredientInfo()}
          </View>
        }
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { y: scrollY },
              },
            },
          ],
          { useNativeDriver: true }
        )}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 30,
              marginVertical: 5,
            }}
          >
            {/* icon  */}
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 50,
                width: 50,
                borderRadius: 5,
                backgroundColor: COLORS.lightGray,
              }}
            >
              <Image source={item.icon} style={{ height: 40, width: 40 }} />
            </View>
            {/* description  */}
            <View
              style={{
                flex: 1,
                paddingHorizontal: 20,
                justifyContent: "center",
              }}
            >
              <Text style={{ ...FONTS.body3 }}>{item.description}</Text>
            </View>

            {/* quantity  */}
            <View style={{ alignItems: "flex-end", justifyContent: "center" }}>
              <Text style={{ ...FONTS.body3 }}>{item.quantity}</Text>
            </View>
          </View>
        )}
      />

      {/* HeaderNavBar  */}
      {HeaderNavBar()}
    </View>
  );
};

export default Recipe;
