import React from 'reat';
import { View , Text , StyleSheet } from 'react-native' ;

const MealDetailScreen = props => {

    return(
        <View style = {styles.screen}>
            <Text>This is meal detail screen!</Text>
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

export default MealDetailScreen;