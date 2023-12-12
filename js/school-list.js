export default {
    props:['schools'],
    template: `
    <dl class="schools">
        <template v-for="(school,index) in schools" :key="school.id">
            <div class="item">
                <dt>{{school.school}}</dt>
                <br>
                <dd>{{school.class}}</dd>
                <br>
                <dd>{{school.degree}}</dd>
                <br>
                <dd>{{school.major}}</dd>
                <br>
            </div>
        </template>
    </dl>`
}