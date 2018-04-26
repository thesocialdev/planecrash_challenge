/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('quiz-component', require('./components/QuizComponent.vue'));

const app = new Vue({
    el: '#app',
    data: {
    	loader: true,
    	quiz: [],
        answers: [],
        results: [0,1,2]
    },

    methods: {
    	loadQuiz: function (){
    		this.$http.get('api/quiz').then(response => {
    			this.quiz = response.body;

    			this.loader = false;
    		});
    	}
    },
    
    mounted: function (){
    	this.loadQuiz();
    }
});
