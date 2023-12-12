const url = './models/certs.json'
import CertList from './cert-list.js';

const certapp = Vue.createApp({
    components: {CertList},
    data() {
        return {
            title: 'My Certifications',
            tagline: "Here are some of the things that I am proud to be certified in:",
            certs: [],
            content: { certs: true, addForm: false, editForm: false },
            cert: { id: 0, name: '', obtained: '', company: '' },
        }
    },
    methods: {
        showProjects() {
            this.onContent('certs');
        },
        fetchData() {
            fetch(url)
                .then(res => res.json())
                .then(data => this.certs = data)
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

certapp.mount('#app')