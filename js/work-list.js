export default {
    props:['works'],
    template: `
    <dl class="works">
        <template v-for="(work,index) in works" :key="work.id">
            <div class="item">
                <dt>{{work.title}}</dt>
                <br>
                <dd>{{work.role}}</dd>
                <br>
                <dd>{{work.description}}</dd>
            </div>
        </template>
    </dl>`
  }