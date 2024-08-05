<template>
    <v-container>
      <v-row>
        <v-col cols="12">
          <canvas id="myChart"></canvas>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import Chart from 'chart.js/auto';
  import 'chartjs-adapter-date-fns';
  
  export default {
    setup() {
      const chartRef = ref(null);
  
      const loadJSON = async () => {
        const response = await fetch('/data.json'); 
        if (!response.ok) {
          throw new Error('Ocorreu algum problema de rede.');
        }
        return await response.json();
      };
  
      const createChart = (data) => {
        const ctx = document.getElementById('myChart').getContext('2d');
        const labels = data.map(item => new Date(item.datetime));
        const values = data.map(item => item.value);
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              label: 'Valores por Hora',
              data: values,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              fill: false
            }]
          },
          options: {
            scales: {
              x: {
                type: 'time',
                time: {
                  unit: 'hour'
                },
                title: {
                  display: true,
                  text: 'Hora'
                }
              },
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Valor'
                }
              }
            }
          }
        });
      };
  
      onMounted(async () => {
        try {
          const data = await loadJSON();
          createChart(data);
        } catch (error) {
          console.error('Erro ao analisar os dados:', error);
        }
      });
  
      return {
        chartRef
      };
    }
  };
  </script>
  
  <style scoped>
  </style>
  
  
  
  
  