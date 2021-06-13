import React, { useState } from 'react';
import { Text, StyleSheet, View, Touchable, TouchableOpacity, ScrollView } from 'react-native';



const Cat = () => {
  const [reset, setReset] = useState(0);
  const [currentSign, setSign] = useState('');
  const [number, setNumber] = useState('');
  const [previousNumber, setPreviousNumber] = useState('');

  function getPercent(newnumber) {
    newnumber=(parseFloat(newnumber)/100).toString();
    if (newnumber != '') {
      setNumber(newnumber);
    }
  }
  function updateCalculation(newnumber, sign) {
    if (sign == "=") {
      if (previousNumber != '' && newnumber != '') {
        switch (currentSign) {
          case '+':
            setNumber((parseFloat(previousNumber) + parseFloat(newnumber)).toString());
            setSign("");
            setPreviousNumber("");
            break;
          case '-':
            setNumber((parseFloat(previousNumber) - parseFloat(newnumber)).toString());
            setSign("");
            setPreviousNumber("");
            break;
          case '/':
            setNumber((parseFloat(previousNumber) / parseFloat(newnumber)).toString());
            setSign("");
            setPreviousNumber("");
            break;
          case '*':
            setNumber((parseFloat(previousNumber) * parseFloat(newnumber)).toString());
            setSign("");
            setPreviousNumber("");
            break;
          default:
            break;
        }

      }
    }
    setReset(1);
  }
  function updateNumber(newnumber, sign) {

    if (sign != '') {
      setReset(0);
      if (previousNumber == "") {
        if (number == '') {
          if (sign == '-') {
            setNumber(sign + newnumber)
          } else {
            setNumber(number + newnumber)

          }
        } else {
          setPreviousNumber(newnumber);
          setSign(sign);
          setNumber("");
        }
      } else {
        switch (sign) {
          case '+':
            setPreviousNumber((parseFloat(previousNumber) + parseFloat(newnumber)).toString());
            setSign("+");
            setNumber('');
            break;
          case '-':
            setPreviousNumber((parseFloat(previousNumber) - parseFloat(newnumber)).toString());
            setSign("-");
            setNumber('');
            break;
          case '/':
            setPreviousNumber((parseFloat(previousNumber) / parseFloat(newnumber)).toString());
            setSign("/");
            setNumber('');
            break;
          case '*':
            setPreviousNumber((parseFloat(previousNumber) * parseFloat(newnumber)).toString());
            setSign("/");
            setNumber('');
            break;
          default:
            break;
        }
      }
    } else {
      if (reset == 1) {
        setNumber();
        setReset(0);

      } else {
        if (number != null) {
          setNumber(number + newnumber);

        } else {
          setNumber(newnumber);

        }
      }
    }
  }

  return (
    <View style={[{ flexDirection: "column", flex: 1 }]}>
      <View style={styles.history}>
        <Text style={{ textAlign: 'right', marginTop: 'auto', marginRight: 30, fontSize: 30, color: '#363636' }}>{previousNumber}{"\n"} {currentSign}</Text>
      </View>
      <View style={styles.inputField}>
        <ScrollView>
          <Text style={{ textAlign: 'right', marginTop: 'auto', marginBottom: 'auto', fontSize: 30, color: '#363636' }}>{number}</Text>
        </ScrollView>
      </View>
      <View style={styles.numberPadBox}>
        <View style={styles.numberBox}>
          <View style={styles.numberBox2}>
            <View style={styles.calculationBoxUnit}>
              <TouchableOpacity onPress={() => { updateNumber(number, '+') }} style={styles.calculationBoxButton}>
                <Text style={styles.calculationBoxButtonText}>+</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.calculationBoxUnit}>
              <TouchableOpacity onPress={() => { updateNumber(number, '-') }} style={styles.calculationBoxButton}>
                <Text style={styles.calculationBoxButtonText}>-</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.calculationBoxUnit}>
              <TouchableOpacity onPress={() => { updateNumber(number, '/') }} style={styles.calculationBoxButton}>
                <Text style={styles.calculationBoxButtonText}>/</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.calculationBoxUnit}>
              <TouchableOpacity onPress={() => { updateNumber(number, '*') }} style={styles.calculationBoxButton}>
                <Text style={styles.calculationBoxButtonText}>*</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.actualNumberBox}>
            <View style={styles.numberPadRow}>
              <View style={styles.numberPadColumn}>
                <TouchableOpacity onPress={() => { updateNumber('7', '') }} style={styles.numberPadButton}>
                  <Text style={[styles.numberPadFont, styles.fontColor1]}>7</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.numberPadColumn}>
                <TouchableOpacity onPress={() => { updateNumber('8', '') }} style={styles.numberPadButton}>
                  <Text style={[styles.numberPadFont, styles.fontColor1]}>8</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.numberPadColumn}>
                <TouchableOpacity onPress={() => { updateNumber('9', '') }} style={styles.numberPadButton}>
                  <Text style={[styles.numberPadFont, styles.fontColor1]}>9</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.numberPadRow}>
              <View style={styles.numberPadColumn}>
                <TouchableOpacity onPress={() => { updateNumber('4', '') }} style={styles.numberPadButton}>
                  <Text style={[styles.numberPadFont, styles.fontColor1]}>4</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.numberPadColumn}>
                <TouchableOpacity onPress={() => { updateNumber('5', '') }} style={styles.numberPadButton}>
                  <Text style={[styles.numberPadFont, styles.fontColor1]}>5</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.numberPadColumn}>
                <TouchableOpacity onPress={() => { updateNumber('6', '') }} style={styles.numberPadButton}>
                  <Text style={[styles.numberPadFont, styles.fontColor1]}>6</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.numberPadRow}>
              <View style={styles.numberPadColumn}>
                <TouchableOpacity onPress={() => { updateNumber('1', '') }} style={styles.numberPadButton}>
                  <Text style={[styles.numberPadFont, styles.fontColor1]}>1</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.numberPadColumn}>
                <TouchableOpacity onPress={() => { updateNumber('2', '') }} style={styles.numberPadButton}>
                  <Text style={[styles.numberPadFont, styles.fontColor1]}>2</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.numberPadColumn}>
                <TouchableOpacity onPress={() => { updateNumber('3', '') }} style={styles.numberPadButton}>
                  <Text style={[styles.numberPadFont, styles.fontColor1]}>3</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.numberPadRow}>
              <View style={styles.numberPadColumn}>

              </View>
              <View style={styles.numberPadColumn}>
                <TouchableOpacity onPress={() => { updateNumber('0', '') }} style={styles.numberPadButton}>
                  <Text style={[styles.numberPadFont, styles.fontColor1]}>0</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.numberPadColumn}>

              </View>
            </View>
          </View>
        </View>
        <View style={styles.calculationBox}>
          <View style={[styles.calculationBoxUnitCol, styles.flex1]}>
            <TouchableOpacity onPress={() => { setNumber(number.slice(0, -1)) }} style={styles.calculationBoxButtonCol}>
              <Text style={styles.calculationBoxButtonText}>Del</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.calculationBoxUnitCol, styles.flex1]}>
            <TouchableOpacity onPress={() => { setNumber(''); setSign(""); setPreviousNumber("") }} style={styles.calculationBoxButtonCol}>
              <Text style={styles.calculationBoxButtonText}>AC</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.calculationBoxUnitCol, styles.flex1]}>
            <TouchableOpacity onPress={() => { getPercent(number) }} style={styles.calculationBoxButtonCol}>
              <Text style={styles.calculationBoxButtonText}>%</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.calculationBoxUnitCol, styles.flex3]}>
            <TouchableOpacity onPress={() => updateCalculation(number, "=")} style={[styles.calculationBoxButtonCol, styles.calculationBoxButtonEqual]}>
              <Text style={styles.calculationBoxButtonText}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  history: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inputField: {
    flex: 0.3,
    backgroundColor: "#fff",
    borderBottomColor: "#D6D6D6",
    borderTopColor: "#D6D6D6",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    paddingLeft: 30,
    paddingRight: 30,
  },
  numberPadBox: {
    flex: 2,
    backgroundColor: "#00203fff",
    flexDirection: 'row'
  }
  , fontColor1: {
    color: "#fff"
  }, fontColor2: {
    color: "#00203fff",

  },
  calculationBox: {
    flex: 1.5,
    backgroundColor: "#fff",
    borderColor: "#fff",
  },
  numberBox: {
    flex: 4,
    backgroundColor: "#fff",
    flexDirection: "column"
  },
  numberBox2: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: 'row',
    borderColor: "#fff"

  },
  actualNumberBox: {
    flex: 4,
    flexDirection: "column",
    padding: 10
  },
  numberPadRow: {
    flex: 1,
    flexDirection: 'row'
  },
  numberPadColumn: {
    flex: 1,
  },
  numberPadButton: {
    backgroundColor: "#00203fff",
    margin: 10,
    borderRadius: 100,
    width: 70,
    height: 70,
  },

  numberPadFont: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "auto",
    marginBottom: "auto"
  },
  calculationBoxUnit: {
    padding: 10,
    flex: 1
  },
  calculationBoxButton: {
    padding: 10,
    marginVertical: 'auto',
    width: 60,
    height: 60,
    backgroundColor: '#00203fff',
    borderRadius: 20

  },
  calculationBoxButtonText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    marginTop: "auto",
    marginBottom: "auto"
  },
  calculationBoxButtonCol: {
    marginVertical: 'auto',
    width: 60,
    height: 60,
    backgroundColor: '#00203fff',
    borderRadius: 20
  },
  calculationBoxButtonEqual: {
    width: 60,
    height: 150,
    flex: 3,
    padding: 20

  },
  flex3: {
    flex: 3
  },
  flex1: {
    flex: 1
  },
  calculationBoxUnitCol: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  }
});

export default Cat;