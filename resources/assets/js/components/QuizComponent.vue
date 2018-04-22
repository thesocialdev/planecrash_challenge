<template>
    <div class="quiz container">
        <h2 class="quiz-question">{{ question.title }}</h2>
        <div class="row">
            <div class="col-6" v-for="option in question.options">
                <label class="label-container">
                    <img v-bind:src="option.img">
                    {{ option.text }}
                    <input type="radio" v-bind:name="question.id" v-bind:value="option.value" v-on:click="answer">
                    <span class="checkmark"></span>
                </label> 
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['question', 'answers', 'quiz', 'results'],

        methods:{
            answer: function(event) {
                this.answers[event.target.name] = parseInt(event.target.value);
                // Change classes
                // Detect if the quiz is complete
                if (this.isComplete())
                    this.getResult();
                // Send form to server and show result to user
            },
            isComplete: function () {
                // TODO: remove length comparison and implement count to avoid empty values beeing considered
                if (this.answers.length === this.quiz.length)
                    return true;

                return false;
            },
            getResult: function () {
                let score = Array(3).fill(0);
                this.answers.forEach((answer) => {
                    score[answer - 1] = typeof score[answer - 1] === 'undefined' ? 1 : score[answer - 1] + 1;
                });
                score.forEach((x, i) => {
                    console.log(x, typeof x, i)
                });
                // Find max
                let winner = score.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);

                // Get Result based on winner                
                console.log(score, winner);
            }
        }
    }
</script>
