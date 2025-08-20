import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { TextInput } from "react-native-gesture-handler";


const audiodata = [{
  title: "Experience Space 1 min with Introduction",
  description: "Guided - Sensory Space with Introduction",
  duration: "1 min",
  audioFile: "path/to/audio/file.mp3",
},
{
  title: "Experience Space 1 min",
  description: "Guided - Sensory Space without Introduction",
  duration: "1 min",
  audioFile: "path/to/audio/file.mp3",
},
{
  title: "7 Min - The Seven Spaces Sensory, Mind & Time Spaces",
  description: "Guided - Noticing Sensory (outer), Mind (inner) and Eternal Now",
  duration: "7 min",
  audioFile: "path/to/audio/file.mp3",
},
{
  title: "11 Min - Space of Un-Conditional Love",
  description: "Guides - Notice and Sensing the All Encompassing Love",
  duration: "11 min",
  audioFile: "path/to/audio/file.mp3",
},
{
  title: "20 Min - 360 Degree Infinite Space Outer and Inner Space",
  description: "Guided - Notice and Sensing the Natural Expansive Open-Ness",
  duration: "20 min",
  audioFile: "path/to/audio/file.mp3",
}
];

const PracticeReminder = (props) => {
  const { navigation } = props;
  const [activeTab, setActiveTab] = useState("Guided");
  const [frequency, setFrequency] = useState(1);
  const [playingIndex, setPlayingIndex] = useState(null);

  const handlePlayPause = (index) => {
    if (playingIndex === index) {
      // If the same item is playing, pause it
      setPlayingIndex(null);
    } else {
      // Otherwise, play the new item
      setPlayingIndex(index);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Main Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.openDrawer()}
        >
          <Ionicons name="menu" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Practice Reminder</Text>
        </View>
      </View>

      <ImageBackground
        source={require("../../assets/bg.jpeg")}
        style={styles.background}
      >
        <View style={styles.bar}>
          <TouchableOpacity
            style={[styles.tab, activeTab === "Reminder" && styles.activeTab]}
            onPress={() => setActiveTab("Reminder")}
          >
            <Text style={activeTab === "Reminder" && styles.activeText}>
              Reminder
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === "Practice" && styles.activeTab]}
            onPress={() => setActiveTab("Practice")}
          >
            <Text style={activeTab === "Practice" && styles.activeText}>
              Practice
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === "Guided" && styles.activeTab]}
            onPress={() => setActiveTab("Guided")}
          >
            <Text style={activeTab === "Guided" && styles.activeText}>
              Guide
            </Text>
          </TouchableOpacity>
        </View>

        {activeTab === "Reminder" && (
          <View style={styles.contentContainer}>
            <Text style={styles.contentTitle}>Daily Practice Reminders</Text>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionHeader}>Daily Frequency</Text>
              <Text style={styles.contentText}>
                How many times per day would you like to receive practice reminders?
              </Text>

              <Slider
                style={{ width: "100%", height: 40 }}
                minimumValue={1}
                maximumValue={10}
                step={1}
                value={frequency}
                onValueChange={(value) => setFrequency(value)}
                minimumTrackTintColor="#5D3FD3"
                maximumTrackTintColor="#cccccc"
                thumbTintColor="#5D3FD3"
              />

              <View style={styles.sliderContainer}>
                <Text>1</Text>
                <Text>10</Text>
              </View>

              <Text style={styles.selectedCount}>
                {frequency} {frequency === 1 ? "time" : "times"} per day
              </Text>
            </View>

            <TouchableOpacity style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Save Settings</Text>
            </TouchableOpacity>
          </View>
        )}

        {activeTab === "Practice" && (
          <View style={styles.contentContainer}>
            <Text style={styles.contentTitle}>Practice Timer</Text>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionHeader}>Practice Timer</Text>
              <Text style={styles.contentText}>
                Set a timer for your practice session
              </Text>

              <Slider
                style={{ width: "100%", height: 40 }}
                minimumValue={1}
                maximumValue={60}
                step={3}
                value={frequency}
                onValueChange={(value) => setFrequency(value)}
                minimumTrackTintColor="#202124"
                maximumTrackTintColor="#5D3FD3"
                thumbTintColor="#5D3FD3"
              />

              <View style={styles.sliderContainer}>
                <Text>1</Text>
                <Text>60</Text>
              </View>

              <Text style={styles.selectedCount}>
                {frequency} {frequency === 1 ? "minute" : "minutes"}
              </Text>
            </View>


            <Text style={styles.recordtitle}>Record your Experience</Text>
            <Text style={styles.recordsubtitle}>Record your Experience</Text>
            <TextInput keyboardType="default"
              style={styles.input}
              placeholder="what do you notice during your session ? anything you want to record"
              placeholderTextColor='#bbb'
              multiline
            />
            <View style={styles.buttoncontainer}>
              <TouchableOpacity style={styles.cancelbtn}>
                <Text style={styles.canceltxt}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.savebtn}>
                <Text style={styles.savetxt}>Save to Journal</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {activeTab === "Guided" && (
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.guideContainer}>
              <View style={styles.guideHeader}>
                <View style={{ flex: 1, width: '90%', marginBottom:10}}>
                  <Text style={styles.contentTitle2}>Guided Practice</Text>
                  <Text style={styles.contentsubTitle}>
                    Select from our collection of guided practice audio tracks
                  </Text>
                </View>
                <TouchableOpacity style={styles.recordbtn}>
                  <Ionicons name="create-outline" size={20} color="#202124" />
                  <Text style={styles.recordtxt}>Record Experience</Text>
                </TouchableOpacity>
              </View>

              {audiodata.map((item, index) => (
                <View key={index} style={styles.audioItem}>
                  <View style={{ flex: 1, width: '90%' }}>
                    <Text style={styles.audioTitle}>{item.title}</Text>
                    <Text style={styles.audioDescription}>{item.description}</Text>
                    <View style={styles.audioDurationContainer}>
                      <Ionicons name="timer-outline" size={14} color="#666" />
                      <Text style={styles.audioDuration}>{item.duration}</Text>
                    </View>
                  </View>
                  <TouchableOpacity style={styles.playButton} onPress={() => handlePlayPause(index)}>
                    <Ionicons
                      name={playingIndex === index ? "pause" : "play"}
                      size={24}
                      color="#fff"
                    />
                    <Text style={styles.playText}>{playingIndex === index ? "Pause" : "Play"}</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </ScrollView>
        )}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default PracticeReminder;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#383e58",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    paddingTop: 45,
    backgroundColor: "#3d424dff",
  },
  menuButton: {
    position: "absolute",
    left: 20,
    top: 45,
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
  bar: {
    flexDirection: "row",
    width: "90%",
    height: "8%",
    borderWidth: 0.6,
    borderColor: "#ffff",
    borderRadius: 20,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#ffff",
    justifyContent: "space-around",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    textAlign: "center",
    borderRadius: 20,
  },
  activeTab: {
    textAlign: "center",
    backgroundColor: "#5D3FD3",
  },
  activeText: {
    textAlign: "center",
    color: "#fff",
  },
  contentContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    margin: 20,
    padding: 20,
    alignItems: "center",
  },
  contentTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  contentTitle2: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
    color: '#202124',
  },
  contentText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  sectionContainer: {
    width: "100%",
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    marginBottom: 15,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  sectionText: {
    color: "#444",
    marginBottom: 10,
  },
  sliderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  selectedCount: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#5D3FD3",
    marginTop: 10,
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  radioText: {
    fontSize: 16,
  },
  radioSubText: {
    fontSize: 12,
    color: "#888",
    marginLeft: 10,
  },
  hoursContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  saveButton: {
    backgroundColor: "#5D3FD3",
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 25,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ffff'
  },
  saveButtonText: {
    color: "#ffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  recordtitle: {
    color: "#5D3FD3",
    fontSize: 18,
    fontWeight: "bold",
  },
  recordsubtitle: {
    color: "#202124",
    fontSize: 12,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 0.6,
    borderColor: '#bbb',
    backgroundColor: '#ffff',
    borderRadius: 10,
    marginTop: 5,
  },
  buttoncontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '20%',
    alignItems: 'center',
    marginTop: 15,

  },
  cancelbtn: {
    borderRadius: 0.5,
    borderColor: "#ffff",
    width: 100,
    height: 40,
    backgroundColor: '#ffff',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'

  },
  savebtn: {
    borderRadius: 0.5,
    borderColor: "#ffff",
    width: 130,
    height: 40,
    backgroundColor: '#5D3FD3',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  canceltxt: {
    color: '#5D3FD3',
    textAlign: 'center'

  },
  savetxt: {
    color: '#ffff',
    textAlign: 'center'

  },
  guideContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    margin: 20,
    padding: 15,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  guideHeader: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  contentsubTitle: {
    color: '#202124',
    fontSize: 10,
    fontWeight: '400',
  },
  recordbtn: {
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#bbb',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 5
  },
  recordtxt: {
    fontSize: 14,
    fontWeight: '600',
  },
  audioItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  audioTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  audioDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  audioDurationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  audioDuration: {
    fontSize: 12,
    color: "#666",
    marginLeft: 5,
  },
  playButton: {
    backgroundColor: '#5D3FD3',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5
  },
  playText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});