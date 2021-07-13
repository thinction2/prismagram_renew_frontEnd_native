import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Text, View, FlatList } from "react-native";
import { PHOTO_FRAGMENT, COMMENT_FRAGMENT } from "../fragments";
import ScreenLayout from "../Components/ScreenLayout";
import Photo from "../Components/Photo";

const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      ...PhotoFragment
      user {
        username
        avatar
      }
      caption
      comments {
        ...CommentFragment
      }
      createdAt
      isMine
    }
  }
  ${PHOTO_FRAGMENT}
  ${COMMENT_FRAGMENT}
`;

export default function Feed({ navigation }) {
  const { data, loading } = useQuery(FEED_QUERY);
  const renderPhoto = ({ item: photo }) => {
    return <Photo {...photo} />;
  };

  return (
    <ScreenLayout loading={loading}>
      <FlatList
        style={{ width: "100%" }}
        data={data?.seeFeed}
        showsVerticalScrollIndicator={false}
        keyExtractor={(photo) => "" + photo.id}
        renderItem={renderPhoto}
      />
    </ScreenLayout>
  );
}
