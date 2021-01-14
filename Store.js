import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
const axios = require('axios');

export default class Store{
    constructor() {
        this.base_url = 'http://localhost:8000';

        this.messages = [];
        this.users = [];
        this.myInfo={};
        this.transactions = [];

        let dateActual = new Date();

        this.messages[2] = [
            {
                _id: 1,
                text: 'Hello',
                createdAt: dateActual.setMinutes(dateActual.getMinutes()+1) && t,
                user: {
                    _id: 2,
                    name: 'Bodo',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
            {
                _id: 1,
                text: 'Hello, what can I do?',
                createdAt: dateActual.setMinutes(dateActual.getMinutes()+1) && t,
                user: {
                    _id: 1,
                    name: 'Me',
                    avatar: 'https://placeimg.com/140/140/any',
                },
              },
              {
                _id: 1,
                text: 'I\'d like to buy a new pantalon, and I know that you have many.',
                createdAt: dateActual.setMinutes(dateActual.getMinutes()+1) && t,
                user: {
                  _id: 2,
                  name:'Bodo',
                  avatar: 'https://placeimg.com/140/140/any',
                },
              },
              {
                _id: 1,
                text: 'yes, of corse.',
                createdAt: dateActual.setMinutes(dateActual.getMinutes()+1) && t,
                user: {
                  _id: 1,
                  name: 'Me',
                  avatar: 'https://placeimg.com/140/140/any',
                },
              },
              {
                _id: 1,
                text: 'I\'m at Fianarantsoa now, and Could you say me where I can look some articles.',
                createdAt: dateActual.setMinutes(dateActual.getMinutes()+1) && t,
                user: {
                  _id: 2,
                  name: 'Bodo',
                  avatar: 'https://placeimg.com/140/140/any',
                },
              },
        ];

        this.users = [ {
            name: "Aina",
            _id: 1
          },
          {
            name: "Bodo",
            _id: 2
          },
          {
            name: "Charline",
            _id: 3
          },
          {
            name: "Domoina",
            _id: 4
          },
          {
            name: "Ericka",
            _id: 5
          },
          {
            name: "Fano",
            _id: 6
          },
          {
            name: "Gova",
            _id: 7
          }];

        this.myInfo={
            _id: 10,
            solde: 5000,
            nom: "RANDRIANASOLO",
            prenom: "Hasitiana Santatra",
            dernierTransaction: "04 Nov 2020"
        }

        this.transactions=[{
            _id: 1,
            from: 1,
            to: 2,
            somme: 2000
        },{
            _id: 1,
            from: 1,
            to: 3,
            somme: 4000
        },{
            _id: 1,
            from: 1,
            to: 2,
            somme: 6000
        },{
            _id: 1,
            from: 1,
            to: 4,
            somme: 7000
        },{
            _id: 1,
            from: 1,
            to: 2,
            somme: 2500
        },{
            _id: 1,
            from: 1,
            to: 2,
            somme: 2000
        },{
            _id: 1,
            from: 1,
            to: 4,
            somme: 2500
        },{
            _id: 1,
            from: 2,
            to: 4,
            somme: 3000
        }];
    }

    getInfo = async (nom, password)=>{
        if(this.myInfo.length == 0){
            console.log("Store: login: start");
            await axios({
                url: this.base_url+"/login/",
                method: 'POST',
                data: {
                    nom, 
                    password
                }
            }).then((response)=>{
                this.myInfo = response.data;
                console.log("Store: login: finish");
            }, (err)=>{
                console.log("Erreur lors de l'inscription",  err);
            })
            return this.myInfo;
        }else{
            return this.myInfo;
        }
    }

    getTransactions = async ()=>{
        if(this.transactions.length == 0){
            console.log("Store: get transactions: start");
            await axios({
                url: this.base_url+"/transactions/",
                method: 'GET',
            }).then((response)=>{
                this.transactions = response.data;
                console.log("Store: get transactions: finish");
            }, (err)=>{
                console.log("Erreur lors de la reception des transactions",  err);
            })
            return this.transactions;
        }else{
            return this.transactions;
        }
    }

    getUsers= async ()=>{
        if(this.users.length == 0){
            console.log("Store: get users: start");
            await axios({
                url: this.base_url+"/users/",
                method: 'GET',
            }).then((response)=>{
                this.users = response.data;
                console.log("Store: get users: finish");
            }, (err)=>{
                console.log("Erreur lors de la reception des users",  err);
            })
            return this.users;
        }else{
            return this.users;
        }
    }

    getMessageByUser= async (idUser)=>{
        if(this.messages[idUser].length == 0){
            console.log("Store: get message from ${`idUser`}: start");
            await axios({
                url: this.base_url+"/message/" + idUser,
                method: 'GET',
            }).then((response)=>{
                this.messages[idUser]= response.data;
                console.log("Store: get message from ${`idUser`}: finish");
            }, (err)=>{
                console.log("Erreur lors de la reception des message",  err);
            })
            return this.messages[idUser];
        }else{
            return this.messages[idUser];
        }
    }
}
