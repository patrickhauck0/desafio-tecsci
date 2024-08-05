<template>
    <v-container>
      <v-data-table
        :headers="headers"
        :items="items"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>API IBGE Nomes</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-btn color="primary" dark class="mb-2" @click="refreshData">
              Refresh
            </v-btn>
          </v-toolbar>
        </template>
      </v-data-table>
    </v-container>
  </template>
  
  <script>
    import apiService from '@/services/apiService';

  export default {
    data() {
      return {
        headers: [
          { text: 'Nome', value: 'nome' },
          { text: 'Região', value: 'regiao' },
          { text: 'Frequência', value: 'freq' },
          { text: 'Sexo', value: 'sexo' },
          { text: 'Rank', value: 'rank' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        items: []
      };
    },
    methods: {
      refreshData() {
        apiService.getNomes()
            .then(response => {
                this.items = response.data;
            })
            .catch(error => {
                console.error('Ocasionou algum erro no carregamento dos dados:', error);
            })
      }
    },
    created() {
        this.refreshData();
    }
  };
  </script>
  
  <style scoped>
  .headline {
    font-weight: bold;
  }
  </style>
  