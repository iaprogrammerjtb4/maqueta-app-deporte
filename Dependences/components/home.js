Vue.component('home',{
    template:`  <section class="container">
                    <Header/>
                    <Menu/>
                    <div class="row">
                        <Now/>
                        <Next/>
                    </div>
                    <Modal/>
                </section>
                `
    ,
    data(){},
    components:{
        'Menu':menu,
        'Header':header,
        'Now':now,
        'Next':next,
        'Modal':modal        
    }
})