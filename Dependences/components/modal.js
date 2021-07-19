let modal = {
    template:`
    
        <div v-for="modal in modals" class="modal" :id="modal.id">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">          
                    <h3 class="text-title text-center text-primary">{{modal.title}}</h3>
                    <button class="close" data-dismiss="modal">&times;</button>            
                </div>
                <div class="modal-body">
                            
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>    
    `,
    data(){
        return{
            modals:[
                {
                    title:"Find routine",
                    id: "searchRoutine",
                    content:""
                },
                {
                    title:"New rutine register",
                    id: "newRoutine",
                    content:""
                },{
                    title:"Done",
                    id: "listRoutine",
                    content:""
                }
            ]
        }
    }
}