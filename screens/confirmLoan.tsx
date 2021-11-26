import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const CardTopNavigation = (props) => {
  return (
    <View style={viewStyles.cardTopNavigation}>
      <Pressable>
      <Image
          style={styles.icons}
          source={require('../assets/icons/back.png')}
        />
      </Pressable>
      <Text style={textStyles.smallBoldGrey}>{props.cardTitle}</Text>
      <Pressable>
      <Image
          style={styles.icons}
          source={require('../assets/icons/exit.png')}
        />
      </Pressable>
    </View>
  )
}

const RecipientInformation = (props) => {
  return (
    <View >
        <Text style={textStyles.smallGrey}>To: {props.name}</Text>
    </View>
  )
}

const LoanInformation = (props) => {
  return (
    <View style={styles.loanInformation}>
      <View style={styles.loanInformationItem}>
        <Text style={textStyles.smallGrey}>Loan Amount</Text>
        <Text style={textStyles.smallBoldGrey}>${props.loanDetails.amount}</Text>
      </View>
      <View style={styles.loanInformationItem}>
        <Text style={textStyles.smallGrey}>Loan Term</Text>
        <Text style={textStyles.smallBoldGrey}>{props.loanDetails.termInMonths} months</Text>
      </View>
      <View style={styles.loanInformationItem}>
        <Text style={textStyles.smallGrey}>Repayment Amount</Text>
        <Text style={textStyles.smallBoldGrey}>${props.loanDetails.monthlyRepayment}/month</Text>
      </View>
    </View>
  )
}

const SetNewRepayment = (props) => {
  const [pressed, setPressed ] = useState(false);
  const chooseRounding = () => {
    if (props.receivables.new==props.receivables.old){
      props.setReceivable(props.receivables.old);
      setPressed(false);
    } else {
      props.setReceivable(props.receivables.new);
      setPressed(true);
    };
  }
  return (
    (pressed && props.receivables.current == props.receivables.new) ?
      <Pressable onPress={chooseRounding} style={styles.roundingChosen}>
        <Text style={textStyles.smallWhite}> {props.value} </Text>
      </Pressable>
      : <Pressable onPress={chooseRounding} style={styles.roundingNotChosen}>
        <Text style={textStyles.smallGreen}> {props.value} </Text>
        </Pressable>
  )

}

const TotalReceivable = (props) => {
  const repayment = props.loanDetails.monthlyRepayment;
  const [receivable, setReceivable ] = useState(props.loanDetails.receivable);

  return (
    <View>
      <View style={viewStyles.roundItUpContainer}>
        <Text style={textStyles.smallBoldGrey}>
          Round it up
        </Text>
        <View style={viewStyles.roundItUpButtonContainer}>
          <SetNewRepayment value={Math.floor(repayment)} setReceivable={setReceivable}
              receivables={{old:5500, current:receivable, new:5400}}/>
          <SetNewRepayment value={Math.round(repayment)} setReceivable={setReceivable}
              receivables={{old:5500, current:receivable, new:5600}}/>
          <SetNewRepayment value={Math.ceil(repayment/10)*10} setReceivable={setReceivable}
              receivables={{old:5500, current:receivable, new:5800}}/>
        </View>
        <Text style={textStyles.smallGreen}>
          Enter custom Amount
        </Text>
      </View>
      <View style={styles.totalDisplay}>
        <Text style={textStyles.smallBoldGrey}>Total Receivable</Text>
        <Text style={textStyles.bigGreen}>${receivable}.00</Text>
      </View>
    </View>
  )
}

const ConfirmationButton = () => {
  
  return (
    <View style={viewStyles.confirmation}>
      <LinearGradient
        colors={['#41BFBD', '#3DE883']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.confirmationButton}>
            <Text style={textStyles.bigWhite}>Confirm</Text>
      </LinearGradient>
    </View>
  )
}


const ConfirmLoan = () => {
  const loanDetails = {
    amount: 5000,
    termInMonths: 5,
    monthlyRepayment: 105.5,
    receivable: 5500
  }
  return (
    <View style={viewStyles.cardContainer}>
      <CardTopNavigation cardTitle="Confirmation"/>
      <View style={viewStyles.loanInformation}>
        <Text style={textStyles.bigGrey}>Issue a Loan</Text>
        <RecipientInformation name="Leslee Moss" />
        <LoanInformation loanDetails={loanDetails} />
        <TotalReceivable loanDetails={loanDetails} />
      </View>
      <ConfirmationButton />
    </View>
  );
}

export default ConfirmLoan;

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

const styles = StyleSheet.create({
  
  icons:{
    width: 34,
    height: 34,
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  loanInformationItem:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  loanInformation: {
    alignItems: 'center',
  },
  roundItUpButton:{
    color:"#37BF6F"
  },
  roundingNotChosen:{
    paddingHorizontal:30,
    paddingVertical:10,
    marginHorizontal:4,
    borderWidth:1,
    borderColor:"#D6D8E6",
    borderRadius:16
  },
  roundingChosen:{
    paddingHorizontal:30,
    paddingVertical:10,
    marginHorizontal:4,
    borderRadius:16,
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
