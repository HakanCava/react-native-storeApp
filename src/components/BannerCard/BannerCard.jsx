import React from 'react';
import styles from './BannerCard.style';
import {Image, ScrollView} from 'react-native';
import data_banner from '../../helpers/data_banner.json'

const BannerCard = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>

        {data_banner.map((banner)=>(
            <Image
            key={banner.id}
            style={styles.image}
            source={{uri:banner.imageUrl}}
            />
        ))}
    </ScrollView>
  );
};

export default BannerCard;
