import React from 'reat';
import { View , Text , StyleSheet } from 'react-native' ;

const CategoryMealsScreen = props => {

    return(
        <View style = {styles.screen}>
            <Text>This is category meal screen!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
screen : {
    flex : 1 ,
    justifyContent : 'center',
    alignItems : 'center'
}
});

export default CategoryMealsScreen;