export default {
    props:['certs'],
    template:`
    <table class="certs">
        <template v-for="(cert,index) in certs" :key="cert.id">
            <div class="item">
                <tr>
                <th>Certification / License</th>
                <th>Company</th>
                <th>Date Obtained</th>
                </tr>
                <br>
                <tr>
                <td>{{cert.name}}</td>
                <td>{{cert.company}}</td>
                <td>{{cert.obtained}}</td>
                </tr>
                <br>
            </div>
        </template>
  </table>`
}