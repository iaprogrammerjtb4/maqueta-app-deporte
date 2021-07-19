let next = {
    template:`
    <div class="col-sm-6 col-12">
        <div class="mt-5 mb-5">
        <h3 class="text-center text-info">Next...</h3>
        <ul v-for="ru in rutines" class="list-group">
            <li class="list-group-item"><div class="spinner-border text-muted"></div> {{ru.name}}</li>    
        </ul>
        </div>
    </div>
    `,
    data(){
        return{
            title:"Next...",
            rutines:[
                {
                    id:1,
                    name:"Routine bisepts"
                },
                {
                    id:2,
                    name:"Routine bisepts"
                },
                {
                    id:3,
                    name:"Routine bisepts"
                },
                {
                    id:4,
                    name:"Routine bisepts"
                },
                {
                    id:5,
                    name:"Routine bisepts"
                }
            ]
        }
    },
}