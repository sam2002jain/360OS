import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const zoomsession = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Zoom Sessions</Text>
      <Text style={styles.subHeader}>Join live practice sessions and consultations</Text>

      {/* Bi-Monthly Group Sessions */}
      <View style={styles.cardContainer}>
        <View style={styles.leftCard}>
          <View style={styles.iconCircle}>
            <MaterialCommunityIcons name="account-group-outline" size={width * 0.1} color="#2F80ED" />
          </View>
          <Text style={styles.cardTitle}>Bi-Monthly Group Sessions</Text>
        </View>

        <View style={styles.rightCard}>
          <Text style={styles.rightCardHeader}>Upcoming Sessions</Text>
          <View style={styles.sessionItem}>
            <View style={styles.sessionDate}>
              <Text style={styles.dateText}>25</Text>
            </View>
            <View style={styles.sessionDetails}>
              <Text style={styles.sessionDay}>July 25, 2023</Text>
              <Text style={styles.sessionTime}>11:00 AM - 12:30 PM PT</Text>
            </View>
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.buttonText}>Join</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.sessionItem}>
            <View style={styles.sessionDate}>
              <Text style={styles.dateText}>10</Text>
            </View>
            <View style={styles.sessionDetails}>
              <Text style={styles.sessionDay}>August 10, 2023</Text>
              <Text style={styles.sessionTime}>11:00 AM - 12:30 PM PT</Text>
            </View>
            
          </View>
          <Text style={styles.cardDescription}>
            Group sessions are included with your subscription. Join us twice a month for guided practice, Q&A, and community connection.
          </Text>
        </View>
      </View>

      {/* One-on-One Sessions */}
      <View style={[styles.cardContainer, styles.oneOnOneContainer]}>
        <View style={[styles.leftCard, styles.personalConsultationsCard]}>
          <View style={[styles.iconCircle, styles.personalIconCircle]}>
            <FontAwesome name="user-o" size={width * 0.1} color="#F2C94C" />
          </View>
          <Text style={styles.cardTitle}>Personal Consultations</Text>
        </View>

        <View style={styles.rightCard}>
          <Text style={styles.rightCardHeader}>One-on-One Sessions</Text>
          <Text style={styles.cardDescription}>
            Book a personal session for individualized guidance and support on your journey.
          </Text>

          <View style={styles.sessionOptions}>
            <View style={styles.sessionCard}>
              <Text style={styles.sessionCardTitle}>30 Minute Session</Text>
              <View style={styles.personalTag}>
                <Text style={styles.personalTagText}>Personal</Text>
              </View>
              <Text style={styles.price}>$75</Text>
              <Text style={styles.sessionCardDescription}>
                Focused guidance for specific questions or challenges.
              </Text>
              <TouchableOpacity style={styles.bookButton}>
                <Text style={styles.bookButtonText}>Book Session</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.sessionCard}>
              <Text style={styles.sessionCardTitle}>60 Minute Session</Text>
              <View style={styles.personalTag}>
                <Text style={styles.personalTagText}>Personal</Text>
              </View>
              <Text style={styles.price}>$125</Text>
              <Text style={styles.sessionCardDescription}>
                In-depth exploration and personalized practice guidance.
              </Text>
              <TouchableOpacity style={styles.bookButton}>
                <Text style={styles.bookButtonText}>Book Session</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default zoomsession;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: width * 0.05,
  },
  header: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subHeader: {
    fontSize: width * 0.04,
    color: '#666',
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  leftCard: {
    flex: 0.4,
    backgroundColor: '#E8F2FF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: width * 0.05,
  },
  personalConsultationsCard: {
    backgroundColor: '#FFF8E3',
  },
  iconCircle: {
    backgroundColor: 'rgba(47, 128, 237, 0.2)',
    borderRadius: 50,
    padding: width * 0.04,
    marginBottom: 10,
  },
  personalIconCircle: {
    backgroundColor: 'rgba(242, 201, 76, 0.2)',
  },
  cardTitle: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  rightCard: {
    flex: 0.6,
    padding: width * 0.05,
  },
  rightCardHeader: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  sessionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  sessionDate: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    width: width * 0.1,
    height: width * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  dateText: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: '#555',
  },
  sessionDetails: {
    flex: 1,
  },
  sessionDay: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: '#333',
  },
  sessionTime: {
    fontSize: width * 0.035,
    color: '#666',
  },
  joinButton: {
    backgroundColor: '#2F80ED',
    paddingHorizontal: width * 0.05,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: width * 0.035,
  },
  addButton: {
    borderWidth: 1,
    borderColor: '#D0D0D0',
    paddingHorizontal: width * 0.05,
    paddingVertical: 10,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#666',
    fontSize: width * 0.035,
  },
  cardDescription: {
    fontSize: width * 0.035,
    color: '#666',
    marginTop: 10,
    lineHeight: 20,
  },
  oneOnOneContainer: {
    flexDirection: 'row',
  },
  sessionOptions: {
    marginTop: 15,
  },
  sessionCard: {
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  sessionCardTitle: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: '#333',
  },
  personalTag: {
    backgroundColor: '#E8E8E8',
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 3,
    alignSelf: 'flex-start',
    marginTop: 5,
  },
  personalTagText: {
    fontSize: width * 0.03,
    color: '#666',
  },
  price: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  sessionCardDescription: {
    fontSize: width * 0.035,
    color: '#666',
    marginTop: 5,
  },
  bookButton: {
    backgroundColor: '#F2994A',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },
  bookButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: width * 0.04,
  },
});