<template>
  <v-dialog v-model="dialog" persistent max-width="500">
    <v-card>
      <v-card-title class="headline">Текст</v-card-title>
      <v-card-text>И тут будет текст</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text>На стартовый экран</v-btn>
        <v-btn color="green darken-1" text>Сыграть еще</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
