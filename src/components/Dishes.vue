<template>
	<div id="dishes" class="section">
		<div class="container">
			<div class="row">
				<div class="section-title-content col-sm-12 text-center">
					<h1 class="section-title">
						The <span class="title-span">Taste</span> From Space
					</h1>

					<p class="section-p">
						We ensure you
						<strong>Fresh Halal & Hygienic</strong> food. Just taste
						the falovor of paradise of all our special menus. If you
						don't satisfied then don't pay. We know what you like to
						eat. Just come once !!
					</p>
					<img
						class="img-fluid mt-5"
						:src="
							require('../assets/images/sec-icon/section-title-icon.png')
						"
						alt="coffee cup"
					/>
				</div>
			</div>

			<div class="row pt-100">
                <!-- single featured items -->
				<div class="col-md-4 col-sm-6 col-12 text-center" v-for="item in featuredItems" :key="item.id">                    
					<div class="featured-item">
						<img
							class="img-fluid mt-5"
							:src="
								require(`@/assets/images/dishes/${item.img}`)
							"
							alt="Stack House"
						/>
						<h5 class="title">{{ item.title }}</h5>
						<h3 class="price">Tk. {{ item.price }}</h3>
					</div>
				</div>
                <!--/. single featured items --> 
                <div class="col-sm-12 col-12 text-center mt-50">
                    <a href="#menu" data-scroll class="btn btn-custom btn-primary-border">View all menu 
                        <span><MdArrowRoundForwardIcon w="20px" h="14px"/></span>
                    </a>
                </div>
                
			</div>

		</div>
	</div>
</template>

<script>
import MdArrowRoundForwardIcon from 'vue-ionicons/dist/md-arrow-round-forward.vue'

	export default {
        name: "Dishes",
        
        components: {
            MdArrowRoundForwardIcon,
		},
		data(){
			return{
				featuredItems:[
					{id: 1, img: '1.jpg', title: 'Mashroom Noddles', price: '250'},
					{id: 2, img: '2.jpg', title: 'Egg Noddles', price: '350'},
					{id: 3, img: '3.jpg', title: 'Beef Noddles', price: '550'},
				]
			}
		}
		
	};
</script>
