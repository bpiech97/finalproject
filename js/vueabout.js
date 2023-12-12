const url = './models/employment.json'
import JobsList from './employment-list.js';


const app = Vue.createApp({
    components: {JobsList},
    data() {
        return {
            title: 'Employment History',
            jobs: [],
            content: { jobs: true, addForm: false, editForm: false },
            work: { id: 0, company: '', date: '', position: '', description: '' },
        }
    },
    methods: {
        showJobs() {
            this.onContent('jobs');
        },
        fetchData() {
            fetch(url)
                .then(res => res.json())
                .then(data => this.jobs = data)
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

app.mount('#app')

