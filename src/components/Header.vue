<template>
	<div id="header">
		<header>
			<div class="container">
				<nav class="navbar navbar-expand-lg navbar-light bg-light text-black">
					<a class="navbar-brand" href="/">
                        <img class="img-fluid" :src="require('../assets/images/restaurant-logo.png')" alt="Stack House" /> 
                    </a>
					<button
						class="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarTogglerDemo02"
						aria-controls="navbarTogglerDemo02"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>

					<div
						class="collapse navbar-collapse"
						id="navbarTogglerDemo02"
					>
						<ul class="navbar-nav ml-auto mt-2 mt-lg-0">
							<li class="nav-item active" v-for="item in navItem" :key="item.li">
								<a class="nav-link" :href="`#${item.id}`">{{ item.li }}</a>
							</li> 
							<li class="nav-item pt-2">
                               <MdSearchIcon w="30px" h="30px"/>                             
							</li>
                            <!-- Search-box -->
                            <!-- <form class="form-inline my-2 my-lg-0">
									<input
										class="form-control mr-sm-2"
										type="search"
										placeholder="Search"
									/>
								</form> -->
						</ul>
					</div>
				</nav>
			</div>
		</header>
	</div>
</template>

<script>
import MdSearchIcon from 'vue-ionicons/dist/md-search.vue'

	export default {
        name: "Header",
        
        components:{
            MdSearchIcon
        },

		data() {
			return {
				navItem: [
					{ li: "home", id: "home" },
					{ li: "about", id: "about" },
					{ li: "menu", id: "menu" },
					{ li: "gallery", id: "gallery" },
					{ li: "reservation", id: "reservation" },
					{ li: "contact", id: "contact" },
				],
			};
		},
	};
</script>

<style scoped></style>
