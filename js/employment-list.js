export default {
    props:['jobs'],
    template: `
    <dl class="jobs">
        <template v-for="(job,index) in jobs" :key="job.id">
            <div class="item">
                <dt>{{job.company}}</dt>
                <br>
                <dd>{{job.date}}</dd>
                <br>
                <dd>{{job.position}}</dd>
                <br>
                <dd>{{job.description}}</dd>
                <br>
            </div>
        </template>
    </dl>`
}