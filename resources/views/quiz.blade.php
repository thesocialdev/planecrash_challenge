<quiz-component v-for="item in quiz"
      v-bind:question="item"
      v-bind:answers="answers"
      v-bind:quiz="quiz"
      v-bind:results="results"
      v-bind:key="item.id">
</quiz-component>