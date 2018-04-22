/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('quiz-component', require('./components/QuizComponent.vue'));

const app = new Vue({
    el: '#app',
    data: {
    	quiz: [
            {
                id: '0',
                title: 'Pergunta 1',
                options: [
                	{
                		text: 'Resposta 1',
                		value: 1,
                		img: 'https://scontent.fbau2-1.fna.fbcdn.net/v/t1.0-9/15697953_10210915585473280_7782816361164175614_n.jpg?_nc_cat=0&oh=e5f9966c8e64461eac274710f0e535fb&oe=5B505EB3',
                	},
                	{
                		text: 'Resposta 2',
                		value: 2,
                		img: 'https://scontent.fbau2-1.fna.fbcdn.net/v/t1.0-9/15697953_10210915585473280_7782816361164175614_n.jpg?_nc_cat=0&oh=e5f9966c8e64461eac274710f0e535fb&oe=5B505EB3',
                	},
                	{
                		text: 'Resposta 3',
                		value: 3,
                		img: 'https://scontent.fbau2-1.fna.fbcdn.net/v/t1.0-9/15697953_10210915585473280_7782816361164175614_n.jpg?_nc_cat=0&oh=e5f9966c8e64461eac274710f0e535fb&oe=5B505EB3',
                	},
                ]

            },
            {
                id: '1',
                title: 'Pergunta 2',
                options: [
                	{
                		text: 'Resposta 1',
                		value: 1,
                		img: 'https://scontent.fbau2-1.fna.fbcdn.net/v/t1.0-9/15697953_10210915585473280_7782816361164175614_n.jpg?_nc_cat=0&oh=e5f9966c8e64461eac274710f0e535fb&oe=5B505EB3',
                	},
                	{
                		text: 'Resposta 2',
                		value: 2,
                		img: 'https://scontent.fbau2-1.fna.fbcdn.net/v/t1.0-9/15697953_10210915585473280_7782816361164175614_n.jpg?_nc_cat=0&oh=e5f9966c8e64461eac274710f0e535fb&oe=5B505EB3',
                	},
                	{
                		text: 'Resposta 3',
                		value: 3,
                		img: 'https://scontent.fbau2-1.fna.fbcdn.net/v/t1.0-9/15697953_10210915585473280_7782816361164175614_n.jpg?_nc_cat=0&oh=e5f9966c8e64461eac274710f0e535fb&oe=5B505EB3',
                	},
                ]
            },
            {
                id: '2',
                title: 'Pergunta 2',
                options: [
                	{
                		text: 'Resposta 1',
                		value: 1,
                		img: 'https://scontent.fbau2-1.fna.fbcdn.net/v/t1.0-9/15697953_10210915585473280_7782816361164175614_n.jpg?_nc_cat=0&oh=e5f9966c8e64461eac274710f0e535fb&oe=5B505EB3',
                	},
                	{
                		text: 'Resposta 2',
                		value: 2,
                		img: 'https://scontent.fbau2-1.fna.fbcdn.net/v/t1.0-9/15697953_10210915585473280_7782816361164175614_n.jpg?_nc_cat=0&oh=e5f9966c8e64461eac274710f0e535fb&oe=5B505EB3',
                	},
                	{
                		text: 'Resposta 3',
                		value: 3,
                		img: 'https://scontent.fbau2-1.fna.fbcdn.net/v/t1.0-9/15697953_10210915585473280_7782816361164175614_n.jpg?_nc_cat=0&oh=e5f9966c8e64461eac274710f0e535fb&oe=5B505EB3',
                	},
                ]
            },
            {
                id: '3',
                title: 'Pergunta 2',
                options: [
                	{
                		text: 'Resposta 1',
                		value: 1,
                		img: 'https://scontent.fbau2-1.fna.fbcdn.net/v/t1.0-9/15697953_10210915585473280_7782816361164175614_n.jpg?_nc_cat=0&oh=e5f9966c8e64461eac274710f0e535fb&oe=5B505EB3',
                	},
                	{
                		text: 'Resposta 2',
                		value: 2,
                		img: 'https://scontent.fbau2-1.fna.fbcdn.net/v/t1.0-9/15697953_10210915585473280_7782816361164175614_n.jpg?_nc_cat=0&oh=e5f9966c8e64461eac274710f0e535fb&oe=5B505EB3',
                	},
                	{
                		text: 'Resposta 3',
                		value: 3,
                		img: 'https://scontent.fbau2-1.fna.fbcdn.net/v/t1.0-9/15697953_10210915585473280_7782816361164175614_n.jpg?_nc_cat=0&oh=e5f9966c8e64461eac274710f0e535fb&oe=5B505EB3',
                	},
                ]
            }
        ],
        answers: [],
        results: [0,1,2]
    }
});
