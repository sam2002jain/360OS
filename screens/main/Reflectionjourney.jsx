import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Modal,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const entriesdata = [
  {
    id: 1,
    title: "Morning Reflection",
    content:
      "Today I noticed how thoughts arise and pass like clouds in the sky. When I don't grasp them...",
    date: "July 15, 2023",
    tags: ["awareness", "insights"],
  },
  {
    id: 2,
    title: "Evening Reflection",
    content:
      "I felt a deep sense of calm when I focused on my breath. It reminded me that I can always return to this...",
    date: "July 14, 2023",
    tags: ["calm", "breath"],
  },
  {
    id: 3,
    title: "Afternoon Reflection",
    content:
      "Noticing the sensations in my body helped me stay present. I realized how often I get caught up in...",
    date: "July 13, 2023",
    tags: ["body", "presence"],
  },
];

const reflectionjourney = (props) => {
  const navigation = props.navigation;
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("23/08/2025");
  const [journalContent, setJournalContent] = useState("");
  const [tags, setTags] = useState("");
  const [shareInCommunity, setShareInCommunity] = useState(false);
  const [record, setRecord] = useState(false);
  const [recordedExperience, setRecordedExperience] = useState("");

  const handlePlayPause = (index) => {
    if (playingIndex === index) {
      setPlayingIndex(null);
    } else {
      setPlayingIndex(index);
    }
  };

  const handleSaveExperience = () => {
    // Logic to save the recorded experience to a journal
    console.log("Recorded experience:", recordedExperience);
    setRecordedExperience(""); // Clear the text input
    setRecord(false); // Close the modal
  };

const handleSave = () => {
    // Logic to save the journal entry
    setModalVisible(false);
  };

  const handleCancel = () => {
    // Logic to cancel and close the modal
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.openDrawer()}
        >
          <Ionicons name="menu" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Your Journal</Text>
        </View>
      </View>

      <ImageBackground
        source={require("../../assets/bg.jpeg")}
        style={styles.background}
      >
        <View style={styles.subbar}>
          <View style={styles.titlebar}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              My Journal Entries
            </Text>
          </View>
          <TouchableOpacity
            style={styles.newentry}
           onPress={() => setModalVisible(true)}
          >
            <Ionicons name="add" size={16} color="#fff" />
            <Text style={{ color: "#fff", fontWeight: "bold" }}>New Entry</Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.entriesContainer}>
            {entriesdata.map((entry) => (
              <View key={entry.id} style={styles.entryCard}>
                <View style={styles.cardHeader}>
                  <Text style={styles.entryTitle}>{entry.title}</Text>
                  <Text style={styles.entryDate}>{entry.date}</Text>
                </View>
                <Text style={styles.entryContent}>{entry.content}</Text>
                <View style={styles.cardFooter}>
                  <View style={styles.tagsContainer}>
                    {entry.tags.map((tag, index) => (
                      <View key={index} style={styles.tag}>
                        <Text style={styles.tagText}>{tag}</Text>
                      </View>
                    ))}
                  </View>
                  <View style={styles.iconsContainer}>
                    <TouchableOpacity>
                      <Ionicons name="create-outline" size={20} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Ionicons name="share-outline" size={20} color="#fff" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </ImageBackground>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <ScrollView contentContainerStyle={styles.centeredView}>
          <View style={styles.modalView}>
            {/* Title Input Field */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Title</Text>
              <TextInput
                style={styles.modalInput}
                placeholder="Give your entry a title"
                value={title}
                onChangeText={setTitle}
              />
            </View>

            {/* Date Input Field */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Date</Text>
              <TextInput
                style={styles.modalInput}
                placeholder="DD/MM/YYYY"
                value={date}
                onChangeText={setDate}
              />
            </View>

            {/* Journal Entry Text Area */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Journal Entry</Text>
              <TextInput
                style={[styles.modalInput, styles.journalInput]}
                placeholder="What insights or experiences would you like to document?"
                multiline
                value={journalContent}
                onChangeText={setJournalContent}
              />
            </View>

            {/* Tags Input Field */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Tags</Text>
              <TextInput
                style={styles.modalInput}
                placeholder="Add tags.."
                value={tags}
                onChangeText={setTags}
              />
            </View>

           
            

            {/* Action Buttons */}
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={styles.modalCancelBtn}
                onPress={handleCancel}
              >
                <Text style={styles.modalBtnText2}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalSaveBtn}
                onPress={handleSave}
              >
                <Text style={styles.modalBtnText1}>Save Entry</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Modal>
    </SafeAreaView>
  );
};

export default reflectionjourney;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#383e58",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    paddingTop: 35,
    backgroundColor: "#3d424dff",
  },
  menuButton: {
    position: "absolute",
    left: 20,
    top: 30,
    padding: 5,
  },
  headerTextContainer: {
    flex: 1,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    opacity: 0.8,
  },
  subbar: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#6417d8ff",
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
    alignSelf: "center",
    paddingVertical: 10,
  },
  titlebar: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#795ef0ff",
    borderRadius: 10,
    justifyContent: "center",
  },
  newentry: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#141ee9ff",
    borderRadius: 10,
    justifyContent: "center",
    flexDirection: "row",
    gap: 5,
    borderColor: "#ffff",
    borderWidth: 1,
  },
  entriesContainer: {
    flex: 1,
    padding: 10,
  },
  entryCard: {
    borderRadius: 20,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 15,
    backgroundColor: "rgba(45, 44, 44, 0.83)", // Semi-transparent white
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)", // Light border
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  entryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  entryDate: {
    fontSize: 14,
    color: "#fff",
  },
  entryContent: {
    fontSize: 16,
    color: "#fff",
    lineHeight: 22,
    marginBottom: 10,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  tag: {
    backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent tag background
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  tagText: {
    color: "#fff",
    fontSize: 12,
  },
  iconsContainer: {
    flexDirection: "row",
    gap: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#000",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  modalInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#bbb",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
  },
  journalInput: {
    height: 150,
    textAlignVertical: "top",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
    alignSelf: "flex-start",
  },
  checkbox: {
    marginRight: 8,
  },
  checkboxLabel: {
    fontSize: 14,
    color: "#000",
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  modalCancelBtn: {
    backgroundColor: "#fff",
    borderColor: "#dbd8d8ff",
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    flex: 1,
    marginRight: 10,
    justifyContent: "center",
  },
  modalSaveBtn: {
    backgroundColor: "#5D3FD3",
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  modalBtnText1: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "bold",
  },
  modalBtnText2: {
    color: "#090909ff",
    fontSize: 11,
    fontWeight: "bold",
  },
});
