const url = './models/works.json'
import WorkList from './work-list.js';

const workapp = Vue.createApp({
    components: {WorkList},
    data() {
        return {
            title: 'My Works',
            tagline: "Though my portfolio is small, it is most definitely a work in progress. Here are some of my comleted works:",
            works: [],
            content: { works: true, addForm: false, editForm: false },
            work: { id: 0, title: '', role: '', description: '' },
        }
    },
    methods: {
        showProjects() {
            this.onContent('works');
        },
        fetchData() {
            fetch(url)
                .then(res => res.json())
                .then(data => this.works = data)
                .catch(err => this.handleError(err))
        },
        handleError(err) {
            console.log(err);
        }
    },
    mounted() {
        this.fetchData()
    }
})

workapp.mount('#app')