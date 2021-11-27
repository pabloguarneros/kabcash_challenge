import React, { useState, useRef, useEffect } from 'react';
import { Text, View, Pressable, Image, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { textStyles, viewStyles, itemStyles} from '../styles/sendLoanStyles'

const CardTopNavigation = (props) => {
  return (
    <View style={viewStyles.cardTopNavigation}>
      <Pressable>
        <Image style={itemStyles.icons}
          source={require('../assets/icons/back.png')}/>
      </Pressable>
      <Text style={textStyles.smallBoldGrey}>{props.cardTitle}</Text>
      <Pressable>
        <Image style={itemStyles.icons}
            source={require('../assets/icons/exit.png')}/>
      </Pressable>
    </View>
  )
}

const RecipientInformation = (props) => {
  return (
    <View style={viewStyles.recipientInformation}>
        <View style={itemStyles.greenIconBackground}>
          <Image style={itemStyles.smallIcon}
            source={require('../assets/icons/sendGreen.png')}/>
        </View>
        <Text style={textStyles.smallGrey}>
          To: {props.name}
        </Text>
    </View>
  )
}

const LoanInformation = (props) => {
  return (
    <View style={itemStyles.loanInformation}>
      <View style={itemStyles.loanInformationItem}>
        <Text style={textStyles.smallGrey}>Loan Amount</Text>
        <Text style={textStyles.smallBoldGrey}>${props.loanDetails.amount}</Text>
      </View>
      <View style={itemStyles.loanInformationItem}>
        <Text style={textStyles.smallGrey}>Loan Term</Text>
        <Text style={textStyles.smallBoldGrey}>{props.loanDetails.termInMonths} months</Text>
      </View>
      <View style={itemStyles.loanInformationItem}>
        <Text style={textStyles.smallGrey}>Repayment Amount</Text>
        <Text style={textStyles.smallBoldGrey}>${props.loanDetails.monthlyRepayment}/month</Text>
      </View>
    </View>
  )
}

const SetNewRepayment = (props) => {
  const [pressed, setPressed ] = useState(false);

  const chooseRounding = () => {
    if (props.receivables.new == props.receivables.old){
      props.setReceivable(props.receivables.old);
      setPressed(false);
    } else {
      props.setReceivable(props.receivables.new);
      setPressed(true);
    }
  }

  return (
    (pressed && props.receivables.current == props.receivables.new) 
      ? <Pressable onPress={chooseRounding} style={itemStyles.roundingChosen}>
          <Text style={textStyles.smallWhite}> {props.value} </Text>
          </Pressable>
      : <Pressable onPress={chooseRounding} style={itemStyles.roundingNotChosen}>
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
              receivables={{old:props.loanDetails.receivable, current:receivable, new:5400}}/>
          <SetNewRepayment value={Math.round(repayment)} setReceivable={setReceivable}
              receivables={{old:props.loanDetails.receivable, current:receivable, new:5600}}/>
          <SetNewRepayment value={Math.ceil(repayment/10)*10} setReceivable={setReceivable}
              receivables={{old:props.loanDetails.receivable,current:receivable, new:5800}}/>
        </View>
        <Text style={textStyles.smallGreen}>
          Enter custom Amount
        </Text>
      </View>
      <View style={itemStyles.totalDisplay}>
        <Text style={textStyles.smallBoldGrey}>Total Receivable</Text>
        <Text style={textStyles.bigGreen}>${receivable}.00</Text>
      </View>
    </View>
  )
}

const ConfirmationButton = () => {

  const animated = new Animated.Value(1);
  const fadeIn = () => {
    Animated.timing(animated, {
      toValue: 0.6,
      duration: 20,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 170,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={[viewStyles.confirmation, {opacity: animated}]}>
      <Pressable onPressIn={fadeIn} onPressOut={fadeOut}
        style={itemStyles.confirmationButton}>
      <LinearGradient
        colors={['#41BFBD', '#3DE883']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={itemStyles.confirmationButton}>
          <Text style={textStyles.bigWhite}>Confirm</Text>
      </LinearGradient>
      </Pressable>
    </Animated.View>
  )
}

const CardSlider = (props) => {

  const fadeAnim = useRef(new Animated.Value(0)).current 

  useEffect(() => {
    Animated.timing(
      fadeAnim, { toValue: 1, duration: 1000, useNativeDriver: true}
      ).start();
    }, [fadeAnim])

  return (
    <Animated.View style={{ ...props.style,
      opacity: fadeAnim,
      transform: [
        { translateY: fadeAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [150, 0]})
        },
        { perspective: 1000 }
      ]}}>
        {props.children}
    </Animated.View>
  )

  }

const ConfirmLoan = (props) => {

  return (
      <CardSlider style={viewStyles.cardContainer}>
        <CardTopNavigation cardTitle="Confirmation"/>
        <View style={viewStyles.loanInformation}>
          <Text style={textStyles.bigGrey}>Issue a Loan</Text>
          <RecipientInformation name={props.loanDetails.recipient} />
          <LoanInformation loanDetails={props.loanDetails} />
          <TotalReceivable loanDetails={props.loanDetails} />
        </View>
        <ConfirmationButton />
      </CardSlider>
  );
}

export default ConfirmLoan;
