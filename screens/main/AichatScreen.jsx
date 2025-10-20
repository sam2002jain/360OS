import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  FlatList,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import Logo from "../../components/Logo";
import Constants from "expo-constants";

const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

function HomeScreen({ navigation }) {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([
    { id: "1", role: "assistant", text: "Hello Rama 👋, how can I help you today?" },
  ]);

  const flatListRef = useRef(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  const handleSend = async () => {
  if (inputText.trim().length === 0) return;

  const userMessage = {
    id: Date.now().toString(),
    role: "user",
    text: inputText.trim(),
  };

  setMessages((prev) => [...prev, userMessage]);
  setInputText("");

  try {
    // Call your RAGLLM API
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: userMessage.text }),
    });

    const data = await response.json();

    const botMessage = {
      id: Date.now().toString() + "_bot",
      role: "assistant",
      text: data.answer || JSON.stringify(data), 
    };

    setMessages((prev) => [...prev, botMessage]);
  } catch (error) {
    console.error("API error:", error);

    const errorMessage = {
      id: Date.now().toString() + "_error",
      role: "assistant",
      text: "⚠️ Sorry, I couldn't reach the server.",
    };

    setMessages((prev) => [...prev, errorMessage]);
  }
};


  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageBubble,
        item.role === "user" ? styles.userBubble : styles.assistantBubble,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#3d424dff" />

      {/* Header */}
      <SafeAreaView style={styles.headerSafeArea}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => navigation.openDrawer()}
          >
            <Ionicons name="menu" size={28} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>consciousness assistant™</Text>
        </View>
      </SafeAreaView>

      {/* Chat Messages */}
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.chatContainer}
      />

      {/* Input Field */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <SafeAreaView style={styles.inputSafeArea}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Message consciousness assistant™"
              placeholderTextColor="#A9A9A9"
              value={inputText}
              onChangeText={setInputText}
              multiline
            />
            <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
              <Ionicons name="send" size={22} color="white" />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#35383f",
  },
  headerSafeArea: {
    paddingTop: 22,
    backgroundColor: "#3d424dff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#4b4f57",
  },
  menuButton: {
    position: "absolute",
    left: 15,
  },
  headerTitle: {
    fontSize: 18,
    color: "#dcdcdc",
    fontWeight: "bold",
  },
  chatContainer: {
    padding: 10,
  },
  messageBubble: {
    maxWidth: "75%",
    padding: 12,
    borderRadius: 16,
    marginVertical: 5,
  },
  userBubble: {
    backgroundColor: "#6c5ce7",
    alignSelf: "flex-end",
    borderBottomRightRadius: 0,
  },
  assistantBubble: {
    backgroundColor: "#4b4f57",
    alignSelf: "flex-start",
    borderBottomLeftRadius: 0,
  },
  messageText: {
    fontSize: 16,
    color: "#fff",
  },
  inputSafeArea: {
    backgroundColor: "#35383f",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    backgroundColor: "#4b4f57",
    borderRadius: 25,
    margin: 10,
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    color: "#dcdcdc",
    fontSize: 16,
    paddingVertical: 10,
    maxHeight: 120,
    minHeight: 40,
  },
  sendButton: {
    backgroundColor: "#6c6f78",
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 0,
  },
});
