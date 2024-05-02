import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Participant } from '../../components/Participant';

import {styles } from './styles';

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd() {
    if (participantName.length === 0) {
      return null;
    }

    if (participants.includes(participantName)) {
      return Alert.alert('INCLUSÃO',`Já existe um participante na lista com o nome "${participantName}"`);
    }

    setParticipants(prevState => [...prevState, participantName]);    
    setParticipantName('');    
  }

/*
  //funão sem parâmetro
  function handleParticipantRemove() {
    console.log("Você clicou em remover o participante");
  }
*/
  //função com parâmetro
  function handleParticipantRemove(name: string) {
    //return console.log(participants.filter(participant => participant !== name));

    Alert.alert('REMOVER', `Remover o participante ${name}?`, [
      {text: 'Sim', style: 'destructive',
        onPress: () => {
          setParticipants(prevState => prevState.filter(partipant => partipant !== name));
          Alert.alert('SUCESSO', `O participante "${name}" foi Excluído!`,[{text:'Voltar', style:'default'}]);
        },
      },
      {text: 'Não',       style: 'default',},
    ]);
  }

  //const mNome = "Gilson";

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      
      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          //onChangeText={text => setParticipantName(text)}
          onChangeText={setParticipantName}
          value={participantName}
          keyboardType='name-phone-pad'
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

        <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant
              key={item}
              name={item}
              onRemove={() => handleParticipantRemove(item)}/>
          )}
          
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes na sua lista de presença.
          </Text>
        )}
        />
    </View>
  );
}

/*
  <Participant name={mNome} onRemove={      handleParticipantRemove       }/> //função sem parâmetro
  <Participant name={mNome} onRemove={() => handleParticipantRemove(mNome)}/> //função com parâmetro
*/

/*
  //ScrollView
      <ScrollView showsVerticalScrollIndicator={false}>
      {
        participants.map(i => (
          <Participant
            key={i}
            name={i}
            onRemove={() => handleParticipantRemove(i)}/>
        ))
      }
      </ScrollView>


*/