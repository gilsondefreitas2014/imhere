import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Participant } from '../../components/Participant';

import {styles } from './styles';

export function Home() {
  const participants =
  [
/*
    'Gilson0', 'Eliana0', 'Flash0', 'Princesa0', 'Antonio0', 'Antonia0', 'Reginaldo0', 'Alessandro0', 'Fabiano0', 'Paula0', 'Leticia0',
    'Gilson1', 'Eliana1', 'Flash1', 'Princesa1', 'Antonio1', 'Antonia1', 'Reginaldo1', 'Alessandro1', 'Fabiano1', 'Paula1', 'Leticia1',
    'Gilson2', 'Eliana2', 'Flash2', 'Princesa2', 'Antonio2', 'Antonia2', 'Reginaldo2', 'Alessandro2', 'Fabiano2', 'Paula2', 'Leticia2',
    'Gilson3', 'Eliana3', 'Flash3', 'Princesa3', 'Antonio3', 'Antonia3', 'Reginaldo3', 'Alessandro3', 'Fabiano3', 'Paula3', 'Leticia3',
    'Gilson4', 'Eliana4', 'Flash4', 'Princesa4', 'Antonio4', 'Antonia4', 'Reginaldo4', 'Alessandro4', 'Fabiano4', 'Paula4', 'Leticia4',
    'Gilson5', 'Eliana5', 'Flash5', 'Princesa5', 'Antonio5', 'Antonia5', 'Reginaldo5', 'Alessandro5', 'Fabiano5', 'Paula5', 'Leticia5',
    'Gilson6', 'Eliana6', 'Flash6', 'Princesa6', 'Antonio6', 'Antonia6', 'Reginaldo6', 'Alessandro6', 'Fabiano6', 'Paula6', 'Leticia6',
    'Gilson7', 'Eliana7', 'Flash7', 'Princesa7', 'Antonio7', 'Antonia7', 'Reginaldo7', 'Alessandro7', 'Fabiano7', 'Paula7', 'Leticia7',
    'Gilson8', 'Eliana8', 'Flash8', 'Princesa8', 'Antonio8', 'Antonia8', 'Reginaldo8', 'Alessandro8', 'Fabiano8', 'Paula8', 'Leticia8',
    'Gilson9', 'Eliana9', 'Flash9', 'Princesa9', 'Antonio9', 'Antonia9', 'Reginaldo9', 'Alessandro9', 'Fabiano9', 'Paula9', 'Leticia9',
*/    
];
  
  function handleParticipantAdd() {
    if (participants.includes("Gilson0")) {
      return Alert.alert('Inclusão','Já existe um participante na lista com esse nome.');
    }
  }

/*
  //funão sem parâmetro
  function handleParticipantRemove() {
    console.log("Você clicou em remover o participante");
  }
*/
  //função com parâmetro
  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        style: 'default',
        onPress: () => Alert.alert("Excluído!"),
      },
      {
        text: 'Não',
        style: 'cancel'
      }
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
          //keyboardType='numeric'
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
            Niném chegou no evento ainda? Adicione participantes na sua lista de presença.
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