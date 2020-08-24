<template>
	<div id="gmap">
        
		<div class="container text-center overflow-hidden pt-100"> 
			<!-- row  -->
			<div class="row">
				<!-- Section title  -->
				<div class="section-title-content col-sm-12 text-center">
					<h1 class="section-title">
						Find us on <span class="title-span">Google map</span>
					</h1>

					<p class="section-p">
						If you got any trouble to find us, here is our
						<strong>Google Map</strong> location. You can also find
						by searh our name in Google map app. Come and enjoy
					</p>
				</div>
				<!--/. Section title  -->
			</div>
			<!--/. row  -->
			<div class="row">
				<div class="col-sm-12 pt-100 mb-100">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12274.249070817985!2d90.409553718907!3d23.84859072018039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c68497f240fd%3A0x1656f8935ef85f50!2sAirport%20Restaurant!5e0!3m2!1sen!2sbd!4v1598224426902!5m2!1sen!2sbd" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
					<!--/. Google Map Embeded  -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Gmap"
	};
</script>

<style>
    .clearfix{
        clear:both;
        height: auto;
    }
    #gmap{  
		top: auto; 
		background-color:whitesmoke; 
    }
</style>
