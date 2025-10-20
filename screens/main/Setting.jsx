import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Switch, SafeAreaView } from 'react-native';
import { MaterialIcons, AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';


const SettingScreen = (props) => {
  const navigation = props.navigation;

  const [isNotificationsEnabled, setIsNotificationsEnabled] = React.useState(true);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = React.useState(false);

  const toggleNotifications = () => setIsNotificationsEnabled(previousState => !previousState);
  const toggleDarkMode = () => setIsDarkModeEnabled(previousState => !previousState);

  const handlechangepassowrd=()=>{
    navigation.navigate("changepasswordscreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity onPress={()=>navigation.openDrawer()} >
          <Ionicons name="menu-outline" size={20} color="#ffff" style={{margin:10}} />
        </TouchableOpacity>
        <Text style={styles.header}>Settings</Text>
        <Text style={styles.subHeader}>Manage your app preferences</Text>

        {/* Account Section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Account</Text>
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.leftContent}>
              <MaterialIcons name="person-outline" size={24} color="#555" />
              <Text style={styles.settingText}>Edit Profile</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={16} color="#bbb" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem} onPress={handlechangepassowrd}>
            <View style={styles.leftContent}>
              <AntDesign name="lock" size={24} color="#555" />
              <Text style={styles.settingText}>Change Password</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={16} color="#bbb" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.leftContent}>
              <MaterialIcons name="payment" size={24} color="#555" />
              <Text style={styles.settingText}>Payment Information</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={16} color="#bbb" />
          </TouchableOpacity>
        </View>

        {/* Notifications Section
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Notifications</Text>
          <View style={styles.settingItem}>
            <View style={styles.leftContent}>
              <MaterialIcons name="notifications-none" size={24} color="#555" />
              <Text style={styles.settingText}>Push Notifications</Text>
            </View>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isNotificationsEnabled ? '#2F80ED' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleNotifications}
              value={isNotificationsEnabled}
            />
          </View>
        </View> */}

        {/* Support Section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Support</Text>
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.leftContent}>
              <MaterialIcons name="help-outline" size={24} color="#555" />
              <Text style={styles.settingText}>Help Center</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={16} color="#bbb" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.leftContent}>
              <MaterialIcons name="policy" size={24} color="#555" />
              <Text style={styles.settingText}>Privacy Policy</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={16} color="#bbb" />
          </TouchableOpacity>
        </View>
        
        {/* <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity> */}
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1625',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffff',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  subHeader: {
    fontSize: 16,
    color: '#bbb',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginHorizontal: 20,
    marginBottom: 20,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    paddingHorizontal: 20,
    paddingTop: 10,
    marginBottom: 10,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E0E0E0',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
  },
  logoutButton: {
    backgroundColor: '#FF4C4C',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    shadowColor: '#FF4C4C',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});