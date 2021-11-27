import { StyleSheet } from 'react-native';

const textStyles = StyleSheet.create({
    smallWhite:{
      fontFamily: "lato-bold",
      fontWeight:"bold",
      fontSize:16,
      color:"#FFFFFF"
    },
    smallBoldGrey:{
      fontFamily: "lato-bold",
      fontSize:20,
      color:"#4A4A4A"
    },
    smallGreen:{
      fontFamily: "lato-bold",
      fontSize:16,
      color:"#37BF6F"
    },
    smallGrey:{
      fontFamily: "lato-normal",
      fontSize:16,
      color:"#4A4A4A"
    },
    bigGrey:{
      fontFamily: "lato-bold",
      fontSize:28,
      fontWeight:"700",
      color:"#4A4A4A"
    },
    bigGreen:{
      fontFamily: "lato-bold",
      fontSize:38,
      color:"#37BF6F"
    },
    bigWhite:{
      fontFamily: "lato-bold",
      fontWeight:"bold",
      fontSize:30,
      color:"#FFFFFF"
    },
  
  })

  
  const viewStyles = StyleSheet.create({
    cardContainer: {
      height: '95%',
      width: '100%',
      alignItems: 'stretch',
      padding: 20,
      backgroundColor: '#FAFCFF',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      position: 'absolute',
      bottom: 0,
    },
    cardTopNavigation: {
      flexDirection: 'row',
      width:"100%",
      alignItems: 'center',
      justifyContent:'space-between',
    },
    recipientInformation:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    loanInformation:{
      flex:0.7,
      justifyContent:"space-around",
    },
    roundItUpContainer:{
      alignItems:"center",
      padding:10,
      justifyContent:"space-around",
      width:"100%",
    },
    roundItUpButtonContainer:{
      padding:10,
      flexDirection:"row",
    },
    confirmation: {
      width:"100%",
      alignItems:"center",
      marginTop:"auto"
    }
  })
  
  const itemStyles = StyleSheet.create({
    
    smallIcon:{
        width: 20,
        height: 20,
        justifyContent: "center"
      },
    icons:{
      width: 34,
      height: 34,
      justifyContent: "center"
    },
    greenIconBackground:{
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#EAFFF3",
        padding:2,
        borderRadius:50,
        marginRight:10,
    },
    loanInformationItem:{
      width:"100%",
      flexDirection:"row",
      justifyContent:"space-between"
    },
    loanInformation: {
      alignItems: 'center',
    },
    roundingNotChosen:{
      paddingHorizontal:30,
      paddingVertical:10,
      marginHorizontal:4,
      borderWidth:1,
      borderColor:"#D6D8E6",
      borderRadius:20
    },
    roundingChosen:{
      paddingHorizontal:30,
      paddingVertical:10,
      marginHorizontal:4,
      borderRadius:20,
      backgroundColor:"#37BF6F"
    },
    confirmationButton: {
      borderRadius:30,
      width:"100%",
      paddingVertical:14,
      alignItems: "center",
      alignContent: "center"
    },
    totalDisplay: {
      padding:4,
      flexDirection:'row',
      alignItems: 'center',
      justifyContent:'space-between'
      
    }
  });
  
  export { textStyles, viewStyles, itemStyles}