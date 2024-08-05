<template>
    <v-container>
      <v-row>

        <v-col cols="12" md="8">
          <h1>Sobre mim</h1>
          <p>
            Olá, meu nome é Patrick Hauck dos Santos. Espero que gostem do meu projeto para o desafio da empresa Tecsi utilizando VueJS.
          </p>
          <p>
            O projeto visa a criação de uma aplicação web com foco nas técnicas de VueJS e outras habilidades. Dentre elas, alguns do requisitos
            mencionados, é a criação de um dashboard utilizando Highcharts a partir de um JSON disponibilizado pela empresa. Além disso, pediram para que
            realizasse a implementação da API do IBGE através de Axios para requisições HTTP e gerar uma tabela com a resposta.
          </p>
          <v-btn
            color="primary"
            dark
            href="https://github.com/patrickhauck0/desafio-tecsci"
            target="_blank"
          >
            <v-icon left>mdi-github</v-icon> GitHub do Projeto
          </v-btn>
        </v-col>

        <v-col cols="12" md="4">
          <v-img
            src="@/assets/minhafoto.png"
            aspect-ratio="1"
            width="400px"
            class="my-4 circular-border"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'AboutView',
  };
  </script>
  
  <style scoped>
  .my-4 {
    margin-left: 40px;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  .circular-border {
    border-radius: 50%;
    border: 2px solid rgba(1, 1, 1, 0.1);
  }
  </style>
  