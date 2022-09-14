import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionic from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";

import { Button, Menu, Provider } from "react-native-paper";

const Post = () => {
  const [visible, setVisible] = useState(false);

  const closeMenu = () => setVisible(false);
  const openMenu = () => setVisible(true);

  const postInfo = [
    {
      postTitle: "Anjali Patel",
      postBody:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      postPersonImage: require("./images/user.jpg"),
      postImage: require("./images/user.png"),
      likes: 12,
      isLiked: false,
    },
    {
      postTitle: "Akshita Agrawal",
      postBody:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      postPersonImage: require("./images/profile5.jpg"),
      postImage: require("./images/post2.jpg"),
      likes: 15,
      isLiked: false,
    },
    {
      postTitle: "Kalpesh Chavda ",
      postBody:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      postPersonImage: require("./images/profile4.jpg"),
      postImage: require("./images/post3.jpg"),
      likes: 20,
      isLiked: false,
    },
    {
      postTitle: "Haresh Lakwani",
      postBody:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      postPersonImage: require("./images/profile3.jpg"),
      postImage: require("./images/post4.jpg"),
      likes: 13,
      isLiked: false,
    },
  ];

  return (
    <View>
      <ScrollView>
        {postInfo.map((data, index) => {
          const [like, setLike] = useState(data.isLiked);
          return (
            <View
              key={index}
              style={{
                paddingBottom: 10,
                borderBottomColor: "gray",
                borderBottomWidth: 0.1,
              }}
            >
              <View
              key={index}
                style={{
                  flexDirection: "row",
                  // alignItems: "center",
                  justifyContent: "space-between",
                  padding: 15,
                  //backgroundColor:'red',
                  //flex: 1,
                  // flexDirection: 'row', justifyContent: 'space-between'
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "flex-start",
                  }}
                >
                  <Image
                    source={data.postPersonImage}
                    style={{ width: 40, height: 40, borderRadius: 100 }}
                  />
                  <View style={{ paddingLeft: 5, marginTop: 10 }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                      {data.postTitle}
                    </Text>
                  </View>
                </View>
                <Provider>
                  <View style={{ alignSelf: "flex-end" }}>
                    <Menu
                      visible={visible}
                      onDismiss={closeMenu}
                      anchor={
                        <Feather
                          name="more-vertical"
                          style={{ fontSize: 20, alignSelf: "flex-end" }}
                          onPress={openMenu}
                        />
                      }
                    >
                      <Menu.Item
                        onPress={() => {
                          Alert.alert("Action : ", "Edit");
                          setVisible(false);
                        }}
                        title="Edit"
                      />
                      {/* <Menu.Item
                        onPress={() => {
                          Alert.alert("Action : ", "Delete");
                        }}
                        title="Delete"
                      /> */}
                    </Menu>
                  </View>
                </Provider>
              </View>
              <View
                style={{
                  position: "relative",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                {/* {MoreInfo(
        'Change code in the editor and watch it change on your phone! Save to get a shareable url. Change code in the editor and watch it change on your phone! Save to get a shareable url.',
        2
      )} */}
                {MoreInfo(data.postBody, 2)}
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  paddingHorizontal: 12,
                  paddingVertical: 15,
                  //backgroundColor:'red',
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <TouchableOpacity onPress={() => setLike(!like)}>
                    <Text>12m</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ alignItems: "center" }}>
                  <TouchableOpacity onPress={() => setLike(!like)}>
                    <AntDesign
                      name={like ? "heart" : "hearto"}
                      style={{
                        paddingRight: 10,
                        fontSize: 20,
                        color: like ? "red" : "black",
                      }}
                    >
                      {" "}
                      <Text
                        style={{
                          // paddingRight: 10,
                          fontSize: 15,
                          //color: like ? 'red' : 'black',
                        }}
                      >
                        {like ? data.likes + 1 : data.likes}
                      </Text>
                    </AntDesign>
                  </TouchableOpacity>
                </View>

                <View style={{ alignItems: "center" }}>
                  <TouchableOpacity>
                    <Entypo
                      name="reply"
                      style={{ fontSize: 15, color: "black", marginRight: 10 }}
                    >
                      <Text> Reply</Text>
                    </Entypo>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ paddingHorizontal: 15 }}>
                <Text>{like ? data.likes + 1 : data.likes} others</Text>
                <Text style={{ opacity: 0.4, paddingVertical: 2 }}>
                  View all comments
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      source={data.postPersonImage}
                      style={{
                        width: 25,
                        height: 25,
                        borderRadius: 100,
                        backgroundColor: "orange",
                        marginRight: 10,
                      }}
                    />
                    <TextInput
                      placeholder="Add a comment "
                      style={{ opacity: 0.7 }}
                    />
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const MoreLessComponent = ({ truncatedText, fullText }) => {
  const [more, setMore] = React.useState(false);
  return (
    <Text>
      {!more ? `${truncatedText}...` : fullText}
      <TouchableOpacity onPress={() => setMore(!more)}>
        <Text style={{ fontWeight: "bold", color: "blue" }}>
          {more ? "read less" : "read more"}
        </Text>
      </TouchableOpacity>
    </Text>
  );
};

const MoreInfo = (text, linesToTruncate) => {
  const [clippedText, setClippedText] = React.useState(null);

  return clippedText ? (
    <MoreLessComponent truncatedText={clippedText} fullText={text} />
  ) : (
    <Text
      numberOfLines={linesToTruncate}
      ellipsizeMode={"tail"}
      onTextLayout={(event) => {
        //get all lines
        const { lines } = event.nativeEvent;
        //get lines after it truncate
        let text = lines
          .splice(0, linesToTruncate)
          .map((line) => line.text)
          .join("");
        //substring with some random digit, this might need more work here based on the font size
        //
        setClippedText(text.substr(0, text.length - 9));
      }}
    >
      {text}
    </Text>
  );
};

export default Post;
