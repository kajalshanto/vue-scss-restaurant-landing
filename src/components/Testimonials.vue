<template>
	<!-- Make a div wrapped slider,set height and width -->
	<div id="testimonials">
		<div class="container">
			<div class="row">
				<!-- Section title  -->
				<div class="col-sm-12 text-center pt-100">
					<h1 class="section-title">
						valuable
						<span class="title-span">Customer's</span> reviews
					</h1>
				</div>
				<!--/. Section title  -->
				<div class="col-md-10 offset-md-1 col-sm-12">
					<div class="testimonials">
						<div class="testimonial">
							<!-- Using the slider component -->
							<slider ref="slider" :options="options" id="slider">
								<!-- slideritem wrapped package with the components you need -->
								<slideritem
									v-for="(item, index) in someList"
									:key="index"
									class="single_item"
								>
									<img
										class="img-fluid client_image"
										:src="
											require(`@/assets/images/clients/${item.img}`)
										"
										alt="clients image"
									/>
									<h5 class="name">{{ item.name }}</h5>
									<h6 class="job_title">{{ item.title }}</h6>
									<p class="what_says">
										{{ item.says }}
									</p>
								</slideritem>

								<!-- Customizable loading -->
								<div slot="loading">loading...</div>
							</slider>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	// import slider components
	import { slider, slideritem } from "vue-concise-slider";
	export default {
		name: "Testimonials",

		components: {
			slider,
			slideritem,
		},

		data() {
			return {
				//data list [array]
				someList: [
					{
						img: "client-1.jpg",
						name: "Robert Moghabey",
						title: "Manager, Ferrari Cars",
						says:
							"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore vitae cupiditate eligendi quisquam quo eum ipsa nemo minima amet, magni obcaecati provident sunt Sed, et enim!",
					},
					{
						img: "client-2.jpg",
						name: "Marzana Swarnanly",
						title: "CEO, App Factory",
						says:
							"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore vitae cupiditate eligendi quisquam quo eum ipsa nemo minima amet, magni obcaecati provident sunt deserunt, iste consequatur error enim autem.",
					},
					{
						img: "client-3.jpg",
						name: "Minhaz Faisal",
						title: "Lead Mentor & CEO, Shikbe Shobai",
						says:
							"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore vitae cupiditate eligendi quisquam quo eum ipsa nemo minima amet, magni obcaecati provident sunt deserunt, iste consequatur error enim autem. Sed, et enim!",
					},
					{
						img: "client-4.jpg",
						name: "Sanjana Mitra",
						title: "Actrees, Khaliwood",
						says:
							"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore vitae cupiditate eligendi quisquam quo eum ipsa nemo minima amet, magni obcaecati provident sunt deserunt, iste consequatur error enim autem. Sed, et enim!",
					},
					{
						img: "client-5.jpg",
						name: "Kabir Sighn",
						title: "Psychiatrist Specialist",
						says:
							"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore vitae cupiditate eligendi quisquam quo eum ipsa nemo minima amet",
					},
				],
				//Slider configuration [obj]
				options: {
					currentPage: 0,
					autoplay: "2500",
					loop: true,
				},
			};
		},
	};
</script>
<style scoped>
	.slider-container {
		white-space: unset;
	}
	.slider-item {
		padding: 60px 50px;
		width: 100%;
		display: table-row;
		border-radius: 8px;
	}
</style>
