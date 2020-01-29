<template>
  <v-dialog v-model="isEnd" persistent max-width="500">
    <v-card>
      <v-card-title class="headline">Конец игры.</v-card-title>
      <v-card-text>
        <strong>Всего вопросов:</strong> {{ gameCount }}
      </v-card-text>
      <v-card-text>
        <strong>Правильных ответов:</strong> {{ gameCorrectAnswersCount }}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn to="/" color="green darken-1" text>На стартовый экран</v-btn>
        <v-btn @click="$emit('restart-game')" color="green darken-1" text>Сыграть еще</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters([
    'isEnd',
    'gameCount',
    'gameCorrectAnswersCount'
  ])
}
</script>
