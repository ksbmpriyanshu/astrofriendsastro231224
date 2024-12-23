import {
    View,
    Text,
    ScrollView,
    Dimensions,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  import { useEffect } from 'react';

  import { colors, fonts, getFontSize } from '../../config/Constants';
  import { StyleSheet } from 'react-native';
  import { useState } from 'react';
  import MyLoader from '../../components/MyLoader';
  import { useTranslation } from 'react-i18next';
  import { connect } from 'react-redux';
  import moment from 'moment';
  import MyHeader from '../../components/MyHeader';
  import * as KundliActions from '../../redux/actions/KundliActions'
import { color } from '@rneui/base';
  
  const BasicPanchang = ({ navigation, basicDetails, birthDetailsData, dispatch,Panchang }) => {
    console.log(birthDetailsData)
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      dispatch(KundliActions.getbasicpanchange(null))
    }, [dispatch])

    console.log(Panchang?.Panchang,'ujhdfjhdfjhdfjh')
  
  
    return (
      <View style={{ flex: 1, backgroundColor: colors.black_color1 }}>
        <MyLoader isVisible={isLoading} />
        <MyHeader title={'Panchang'} navigation={navigation} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flex: 0,
              width: '95%',
              alignSelf: 'center',
              backgroundColor: colors.background_theme1,
              marginVertical: 10,
              borderRadius: 15,
              shadowColor: colors.black_color5,
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.3,
              shadowRadius: 5,
              elevation: 6
            }}>
            <View style={styles.itmeContainer}>
              <Text allowFontScaling={false} style={styles.itemText}>{t("name")}</Text>
              <Text allowFontScaling={false} style={styles.itemText}>
                {basicDetails?.name}
              </Text>
            </View>
            <View
              style={{
                ...styles.itmeContainer,
                backgroundColor: colors.new_color,
              }}>
              <Text allowFontScaling={false} style={{ ...styles.itemText, color: colors.background_theme1 }}>
                {t("date")}
              </Text>
              <Text allowFontScaling={false} style={{ ...styles.itemText, color: colors.background_theme1 }}>
                {moment(basicDetails?.dob).format('DD MMM YYYY')}
              </Text>
            </View>
            <View style={styles.itmeContainer}>
              <Text allowFontScaling={false} style={styles.itemText}>
                {t("time")}
              </Text>
              <Text allowFontScaling={false} style={styles.itemText}>
                {moment(basicDetails?.tob).format('hh:mm A')}
              </Text>
            </View>
            <View
              style={{
                ...styles.itmeContainer,
                backgroundColor: '#ffd000',
              }}>
              <Text allowFontScaling={false} style={{ ...styles.itemText, color: colors.background_theme1 }}>
                {t("place")}
              </Text>
              <Text allowFontScaling={false} style={{ ...styles.itemText, color: colors.background_theme1 }}>
                {basicDetails?.place}
              </Text>
            </View>
            <View style={styles.itmeContainer}>
              <Text allowFontScaling={false} style={styles.itemText}>
                {t("lat")}
              </Text>
              <Text allowFontScaling={false} style={styles.itemText}>
                {basicDetails?.lat}
              </Text>
            </View>
            <View
              style={{
                ...styles.itmeContainer,
                backgroundColor: '#9dd9d2',
              }}>
              <Text allowFontScaling={false} style={{ ...styles.itemText, color: colors.background_theme1 }}>
                {t("long")}
              </Text>
              <Text allowFontScaling={false} style={{ ...styles.itemText, color: colors.background_theme1 }}>
                {basicDetails?.lon}
              </Text>
            </View>
            <View style={styles.itmeContainer1}>
              <Text allowFontScaling={false} style={styles.itemText}>
                {t("time_zone")}
              </Text>
              <Text allowFontScaling={false} style={styles.itemText}>GMT+05:30</Text>
            </View>
            <View
              style={{
                ...styles.itmeContainer,
                backgroundColor:colors.new_color,
              }}>
              <Text allowFontScaling={false} style={{ ...styles.itemText, color: colors.background_theme1 }}>
              Day
              </Text>
              <Text allowFontScaling={false} style={{ ...styles.itemText, color: colors.background_theme1 }}>
                {Panchang?.Panchang?.day}
              </Text>
            </View>
            <View style={styles.itmeContainer1}>
              <Text allowFontScaling={false} style={styles.itemText}>
                Karan
              </Text>
              <Text allowFontScaling={false} style={styles.itemText}>{Panchang?.Panchang?.karan}</Text>
            </View>
            <View
              style={{
                ...styles.itmeContainer,
                backgroundColor: '#55efc4',
              }}>
              <Text allowFontScaling={false} style={{ ...styles.itemText, color: colors.background_theme1 }}>
                Nakshatra
              </Text>
              <Text allowFontScaling={false} style={{ ...styles.itemText, color: colors.background_theme1 }}>
              {Panchang?.Panchang?.nakshatra}
              </Text>
            </View>
            <View style={styles.itmeContainer1}>
              <Text allowFontScaling={false} style={styles.itemText}>
                Sunrise
              </Text>
              <Text allowFontScaling={false} style={styles.itemText}> {Panchang?.Panchang?.sunrise}</Text>
            </View>
            <View
              style={{
                ...styles.itmeContainer,
                backgroundColor: '#f8c291',
              }}>
              <Text allowFontScaling={false} style={{ ...styles.itemText, color: colors.background_theme1 }}>
                Sunset
              </Text>
              <Text allowFontScaling={false} style={{ ...styles.itemText, color: colors.background_theme1 }}>
              {Panchang?.Panchang?.sunset}
              </Text>
            </View>
            <View style={styles.itmeContainer}>
              <Text allowFontScaling={false} style={styles.itemText}>
                Tithi
              </Text>
              <Text allowFontScaling={false} style={styles.itemText}>{Panchang?.Panchang?.tithi}</Text>
            </View>
            <View
              style={{
                ...styles.itmeContainer,
                backgroundColor: '#f6b93b',
              }}>
              <Text allowFontScaling={false} style={{ ...styles.itemText, color: colors.background_theme1 }}>
                Vedic Sunrise
              </Text>
              <Text allowFontScaling={false} style={{ ...styles.itemText, color: colors.background_theme1 }}>
              {Panchang?.Panchang?.vedic_sunrise}
              </Text>
            </View>
            <View style={styles.itmeContainer}>
              <Text allowFontScaling={false} style={styles.itemText}>
                Vedic Sunset
              </Text>
              <Text allowFontScaling={false} style={styles.itemText}>{Panchang?.Panchang?.vedic_sunset}</Text>
            </View>
            <View
              style={{
                ...styles.itmeContainer,
                backgroundColor: colors.new_color,
              }}>
              <Text allowFontScaling={false} style={{ ...styles.itemText, color: colors.background_theme1 }}>
                Yog
              </Text>
              <Text allowFontScaling={false} style={{ ...styles.itemText, color: colors.background_theme1 }}>
              {Panchang?.Panchang?.yog}
              </Text>
            </View>
            
            
            
          </View>
  
        </ScrollView>
      </View>
    );
  };
  
  const mapStateToProps = state => ({
    basicDetails: state.kundli.basicDetails,
    birthDetailsData: state.kundli.birthDetailsData,
    Panchang: state.kundli.Panchang
  })
  
  const mapDispatchToProps = dispatch => ({ dispatch })
  
  export default connect(mapStateToProps, mapDispatchToProps)(BasicPanchang);
  
  const styles = StyleSheet.create({
    itmeContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
      borderBottomWidth: 1,
      borderColor: 'grey'
    },
    itmeContainer1: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
  
    },
    itemText: {
      flex: 0.5,
      fontSize: getFontSize(1.5),
      color: colors.black_color8,
      fontFamily: fonts.medium,
    },
  });
  