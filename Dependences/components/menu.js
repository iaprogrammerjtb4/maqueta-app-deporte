let menu = {
    template:`
            <section class="btn-group">
                <button type="button" class="btn-primary" data-toggle="modal" data-target="#newRoutine">Create new</button>        
                <button class="btn btn-info" data-toggle="modal" data-target="#searchRoutine">Search routine</button>
                <button class="btn btn-secondary" data-toggle="modal" data-target="#listRoutine">Views alls routines done</button>
            </section>
    
    `,    
    data: function(){
        return {   
            menus:[
                    {
                        title:"Create new",
                        class:"btn btn-primary",
                        dataTarget:"#newRoutine"
                    },
                    {
                        title:"Search routine",
                        class:"btn btn-info",
                        dataTarget:"#searchRoutine"
                    },
                    {
                        title:"Views alls routines done",
                        class:"btn btn-secondary",
                        dataTarget:"#listRoutine"
                    }
                ]
        }
    }
}
/**template:`
        <div v-for="value in menus" class="btn-group">
            <button type="button" :class="value.class" data-toggle="modal" :data-target="value.dataTarget">{{value.title}}</button>             
        </div>
      `, */