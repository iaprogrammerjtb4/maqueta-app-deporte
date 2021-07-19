let now = {
    template:`
        <div class="col-sm-6 col-12">
            <div class="mt-5 mb-5">
                <h3 class="text-center text-info">{{title}}</h3>
                <div class="card" style="width:100%;">
                    <img :src="linkImg" alt="monday" class="card-img-top" style="width:100%; opacity: 0.4;" />
                    <div class="card-body">
                        <h4 class="card-title">{{titleRutine}}</h4>
                        <p class="card-text">{{descriptionRutine}}</p>              
                    </div>
                    <button class="btn btn-info">Take photo evidence</button>
                </div>
            </div>
        </div>
    `,
    data(){
        return{
            title:"Now...",
            linkImg:"https://miro.medium.com/max/2800/1*XufkfhkZ4oztZp_g53GNPQ.jpeg",
            titleRutine:"Rutine legs",
            descriptionRutine:"Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Omnis facilis ut delectus dolorum officiis soluta in culpa rem! Sunt quasi asperiores, molestias. Amet unde reprehenderit odio nihil in, aliquid voluptatum."
        }
    }
}