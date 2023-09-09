import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Importing FontAwesome icons
import React, { useState, useEffect } from "react";

const CardComponent = ({ cardData }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [cardInfo, setCardInfo] = useState([]);

  useEffect(() => {
    setCardInfo(cardData);
  }, []);

  const shortText = (text) => {
    return `${text?.substring(0, 50)}...`;
  };

  return (
    <>
      {cardInfo.map((cardInfo, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.header}>
            <Image
              source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
              style={styles.profilePic}
            />
            <View style={styles.nameRoleContainer}>
              <Text style={styles.name}>{cardInfo.name}</Text>
              <Text style={styles.role}>{cardInfo.role}</Text>
            </View>
            <TouchableOpacity style={styles.threeDots}>
              <Icon name="ellipsis-v" size={20} color="#000" />
            </TouchableOpacity>
          </View>

          <View style={styles.body}>
            <Text style={styles.bodyText}>
              {isExpanded
                ? cardInfo.description
                : shortText(cardInfo.description)}
            </Text>
            {cardInfo.description.length > 50 && ( // Adjust the length check as needed
              <Text
                style={styles.readMore}
                onPress={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? "Read Less" : "Read More"}
              </Text>
            )}
            <Image source={{ uri: cardInfo.image }} style={styles.bodyImage} />
          </View>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.interact_btn}>
              <Icon name="thumbs-up" size={15} color="#000" />
              <Text style={styles.footerText}>Like</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.interact_btn}>
              <Icon name="thumbs-down" size={15} color="#000" />
              <Text style={styles.footerText}>Dislike</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.interact_btn}>
              <Icon name="comment" size={15} color="#000" />
              <Text style={styles.footerText}>comment</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    margin: 5,
    padding: 10,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  nameRoleContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  role: {
    fontSize: 14,
  },
  threeDots: {
    marginLeft: 10,
  },
  body: {
    // flexDirection: 'row',
    // marginTop: 10,
  },
  bodyText: {
    // flex: 1,
    // marginVertical: 5,
    marginTop: 5,
  },
  readMore: {
    color: "blue",
  },
  bodyImage: {
    marginTop: 5,
    // width: 200,
    height: 200,
  },
  interact_btn: {
    alignItems: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  footerText: {
    fontSize: 10,
  },
  //   button: {
  //     backgroundColor: '#ddd',
  //     padding: 10,
  //     borderRadius: 5,
  //     marginHorizontal: 10,
  //   },
});

export default CardComponent;
