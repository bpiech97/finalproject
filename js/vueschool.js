const url = './models/education.json'
import SchoolsList from './school-list.js';

const app = Vue.createApp({
    components: {SchoolsList},
    data() {
        return {
            title: 'Education',
            tagline: "Still learning and still growing, here are the institutions that helped me become the programmer I am today:",
            schools: [],
            content: { schools: true, addForm: false, editForm: false },
            school: { id: 0, school: '', class: '', degree: '', major: '' },
        }
    },
    methods: {
        showSchools() {
            this.onContent('schools');
        },
        fetchData() {
            fetch(url)
                .then(res => res.json())
                .then(data => this.schools = data)
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

app.mount('#app');