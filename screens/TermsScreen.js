import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';

const Terms = () =>{

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>
                Terms & Conditions 
                </Text>
                <View style={styles.subText}> 
                    <Text style={styles.subTitle}>General</Text>
                    <Text>
                    You agree that we may, in our sole discretion, terminate or suspend your access to all or part of the site with or without notice and for any reason, including, without limitation, breach of these Terms of Use. Any suspected fraudulent, abusive or illegal activity may be grounds for terminating your relationship and may be referred to appropriate law enforcement authorities.
                    Upon termination or suspension, regardless of the reasons therefore, your right to use the services available on this site immediately ceases, and you acknowledge and agree that we may immediately deactivate or delete your account and all related information and files in your account and/or bar any further access to such files or this site. We shall not be liable to you or any third party for any claims or damages arising out of any termination or suspension or any other actions taken by us in connection with such termination or suspension.
                    </Text>
                </View>
                <View style={styles.subText}>
                    <Text style={styles.subTitle}>Contribution License</Text>
                    <Text> 
                    You agree that we may, in our sole discretion, terminate or suspend your access to all or part of the site with or without notice and for any reason, including, without limitation, breach of these Terms of Use. Any suspected fraudulent, abusive or illegal activity may be grounds for terminating your relationship and may be referred to appropriate law enforcement authorities.
                    Upon termination or suspension, regardless of the reasons therefore, your right to use the services available on this site immediately ceases, and you acknowledge and agree that we may immediately deactivate or delete your account and all related information and files in your account and/or bar any further access to such files or this site. We shall not be liable to you or any third party for any claims or damages arising out of any termination or suspension or any other actions taken by us in connection with such termination or suspension.
                    </Text>
                </View>
                <View style={styles.btnContainer}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => console.log("ok")} style={styles.tile}>
                    <View>
                        <Text style={styles.textTile}>AKKOORD</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} onPress={() => console.log("ok")} style={styles.tile}>
                    <View>
                        <Text style={styles.textTile}> NIET AKKOORD</Text>
                    </View>
                </TouchableOpacity>
                </View>
           </View>
        
        </ScrollView>
    )
}

export default Terms;

const styles = StyleSheet.create({
    title:{
        fontWeight:'bold', 
        fontSize:24,
        marginBottom:10
    },
    container:{
        margin:15,
    },
    tile:{
        borderRadius: 20,
        padding:10,
        backgroundColor:"#00008B",
        width:160,
        marginVertical:10
    },
    textTile:{
        color: "#f7f7f7",
        fontWeight: "bold",
        marginLeft: "auto",
        marginRight: "auto",
    },
    btnContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:"space-between",
        marginVertical:10
    },
    subTitle:{
        fontWeight:'bold', 
        fontSize:20,
    },
    subText:{
        backgroundColor:'#add8e6',
        marginVertical:15,
        padding:15,
        borderRadius:10
    }
})