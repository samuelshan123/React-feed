import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import CardComponent from "../news-content/card";
import axios from "axios";

export default function Home() {
  const [DATA, setDATA] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      let res = await axios.get("http://192.168.1.40:3000/getnews");
      console.log(res.data);
      if (res.data.code === 1) {
        setDATA(res.data.news);
      } else {
        alert("something went wrong");
      }
    } catch (err) {
      console.error(err);
      alert("something went wrong");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.head}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {DATA.length ? <CardComponent cardData={DATA}></CardComponent> : null}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  head: {
    margin: 10,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
