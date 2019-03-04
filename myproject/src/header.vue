<template>
    <div class="header">
    	<section id="header" class="py-3">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-md-2 col-sm-2 col-xs-2">
					<div class="logo">
						<a href="/"><img src="./assets/images/iconscout-logo-white.svg" alt=""> </a>
					</div>
				</div>
				<div class="col-md-5 col-sm-5">
					<form class="search" action="/" method="get" @submit.prevent="submitsearch">
						<div class="input-field">
							<input type="text" id="key" name="key" class="autocomplete  p-2" placeholder="Search anything..." v-model="key" required="">
							<button type="submit"><img src="./assets/images/searchicon.png"/></button>
						</div>
					</form>
				</div>
				<div class="col-md-5 col-sm-5">
					<div>
						<ul class="list-inline d-flex align-items-center justify-content-end mb-0">
							<li class="mx-2"><a href="register.html">My Scout</a> </li>
							<li class="mx-2"><a href="login.html">Sign In</a> </li>
							<li class="mx-2"><a href="db-listing-add.html"><i class="fa fa-plus" aria-hidden="true"></i> Add Listing</a> </li>
						</ul>
					</div>
				</div>
			</div>
			<div v-if="locationSetup">
				<div class="row">
					<div class="col-sm-4">
						<input type="radio" name="asset"  id="icon" v-model="asset" value="icon" v-on:change="submitsearch">Icon
						<input type="radio" name="asset" id="illustration" v-model="asset" value="illustration" v-on:change="submitsearch">Illustration
						<input type="radio" name="asset" id="photo" v-model="asset" value="photo" v-on:change="submitsearch">Photo
					</div>
					<div class="col-sm-4">
						<input type="radio" name="sort"  id="latest" v-model="sortby" value="latest" v-on:change="submitsearch">Latest
						<input type="radio" name="sort" id="popular" v-model="sortby" value="popular" v-on:change="submitsearch">Popular
						<input type="radio" name="sort" id="relevant" v-model="sortby" value="relevant" v-on:change="submitsearch">Relevant
					</div>
					<div class="col-sm-4">
						<input type="radio" name="price"  id="free" v-model="price" value="free" v-on:change="submitsearch">Free
						<input type="radio" name="price" id="premium" v-model="price" value="premium" v-on:change="submitsearch">Premium
						<input type="radio" name="price" id="all" v-model="price" value="all" v-on:change="submitsearch">All
					</div>
				</div>

			</div>
		</div>
		
	</section>
	 <div v-if="locationSetup">
	 	<div class="container">
			 <div class="searchreasult p-3">
			 	<div class="row" >

			 		<div class="col-sm-4">

			 			<label>Style</label>
			 			<div>
				 			<input type="checkbox" name="colored-outline" v-model="style" value="colored-outline" id="colored-outline" v-on:change="submitsearch"/> Colored Outline
				 			<input type="checkbox" name="doodle" v-model="style" value="doodle" id="doodle" v-on:change="submitsearch"/> Doodle
				 			<input type="checkbox" name="dualtone" v-model="style" value="dualtone" id="dualtone" v-on:change="submitsearch"/> Dualtone
				 			<input type="checkbox" name="flat" v-model="style" value="flat" id="flat" v-on:change="submitsearch"/> Flat
				 			<input type="checkbox" name="glyph" v-model="style" value="glyph" id="glyph" v-on:change="submitsearch"/> Glyph
				 			<input type="checkbox" name="gradient" v-model="style" value="gradient" id="gradient" v-on:change="submitsearch"/>  Gradient
				 			<input type="checkbox" name="isometric" v-model="style" value="isometric" id="isometric" v-on:change="submitsearch"/>  Isometric
				 			<input type="checkbox" name="line" v-model="style" value="line" id="line" v-on:change="submitsearch"/>  Line
				 			<input type="checkbox" name="rounded" v-model="style" value="rounded" id="rounded" v-on:change="submitsearch"/>   Rounded
				 			<input type="checkbox" name="sticker" v-model="style" value="sticker" id="sticker" v-on:change="submitsearch"/>   Sticker
			 			</div>
			 			
			 			<label>Color</label>
			 			<div>
						<input type="radio" name="color"  id="#e51c23" v-model="color" value="e51c23" v-on:change="submitsearch">#e51c23
						<input type="radio" name="color" id="#e91e63" v-model="color" value="e91e63" v-on:change="submitsearch">#e91e63
						<input type="radio" name="color" id="#795548" v-model="color" value="795548" v-on:change="submitsearch">#795548
						</div>
					<div  v-if='asset == "icon"'>
						<label>Dimension</label>
			 			<div>
						<input type="radio" name="dimension"  id="16" v-model="dimension" value="16" v-on:change="submitsearch">16
						<input type="radio" name="dimension" id="24" v-model="dimension" value="24" v-on:change="submitsearch">24
						<input type="radio" name="dimension" id="32" v-model="dimension" value="32" v-on:change="submitsearch">32
						<input type="radio" name="dimension" id="48" v-model="dimension" value="48" v-on:change="submitsearch">48
						<input type="radio" name="dimension" id="64" v-model="dimension" value="64" v-on:change="submitsearch">64
						<input type="radio" name="dimension" id="96" v-model="dimension" value="96" v-on:change="submitsearch">96
						<input type="radio" name="dimension" id="128" v-model="dimension" value="128" v-on:change="submitsearch">128
						<input type="radio" name="dimension" id="192" v-model="dimension" value="192" v-on:change="submitsearch">192
						<input type="radio" name="dimension" id="256" v-model="dimension" value="256" v-on:change="submitsearch">256
						<input type="radio" name="dimension" id="512" v-model="dimension" value="512" v-on:change="submitsearch">512
						</div>
					</div>
						<div  v-if='asset != "icon"'>
							<label>Dimension</label>
							<div>
								<input type="checkbox" name="horizontal"  id="horizontal" v-model="orientation" value="horizontal" v-on:change="submitsearch" />Horizontal
								<input type="checkbox" name="vertical" id="vertical" v-model="orientation" value="" v-on:change="submitsearch">Vertical
								<input type="checkbox" name="square" id="square" v-model="orientation" value="square" v-on:change="submitsearch">Square
								<input type="checkbox" name="horizontal-panorama" id="horizontal-panorama" v-model="orientation" value="horizontal-panorama" v-on:change="submitsearch">Horizontal Panorama
								<input type="checkbox" name="vertical-panorama" id="vertical-panorama" v-model="orientation" value="vertical-panorama" v-on:change="submitsearch">Vertical Panorama
								<input type="checkbox" name="cylindrical-panorama" id="cylindrical-panorama" v-model="orientation" value="cylindrical-panorama" v-on:change="submitsearch"> 360° Panorama (Cylindrical Panorama)
								<input type="checkbox" name="spherical-panorama" id="spherical-panorama" v-model="orientation" value="spherical-panorama" v-on:change="submitsearch">Spherical Panorama
							</div>
						</div>
			 		</div>
			 		<div class="col-sm-8">
				    	<div class="row" v-if='asset == "icon"'>
					    	<div v-for="item in items" class="col-sm-2 col-12 my-1"><img :src="item" class="w-100 h-100" /></div>
					    </div>
					    <div class="row" v-else>
					    	<div v-for="item in items" class="col-sm-4 col-12 my-1"><img :src="item" class="w-100 h-100" /></div>
					    </div>
				    </div>
			    </div>
			</div>
		</div>
    </div>
  </div>
</template>

<script>
	import axios from 'axios';
export default {
    data(){
    	return{
    		key : '',
    		items: [],
    		info: '',
    		locationSetup : false,
    		asset:'icon',
    		sortby: 'latest',
    		price: 'all',
    		style:[],
    		color: '',
    		dimension: '',
    		orientation: []
    	}
    },
    methods:{
    	submitsearch(){
    		// console.log(this.key);
    		var i = 0,j=0;
    		var key = this.key;
    		window.location.href = "/#/search";
    		this.locationSetup = true;
    		this.items = [];
    		var asset = this.asset;
    		var sortby = this.sortby;
    		var price = this.price;
    		// console.log(asset);
    		var style = this.style;
    		var appendary= '';
    		var orientationary = '';
    		var color = this.color;
    		var dimension = this.dimension;
    		var orientation = this.orientation;
    		// console.log(style);
    		if(style.length > 0){
    			style.forEach(function(element) {
					appendary += '&style[]='+element;
					
				});
    			// console.log(appendary); 
    		}
    		if(orientation.length > 0){
    			orientation.forEach(function(element) {
					orientationary += '&orientation[]='+element;
					
				});
    			console.log(orientationary); 
    		}
    		console.log('https://api.iconscout.com/v2/search?product_type=item&query='+key+'&asset='+asset+'&sort='+sortby+'&icon_grid='+dimension+'&color='+color+'&per_page=&price='+price+appendary+orientationary+'');
    		axios

		      .get('https://api.iconscout.com/v2/search?product_type=item&query='+key+'&asset='+asset+'&sort='+sortby+'&icon_grid='+dimension+'&color='+color+'&per_page=&price='+price+appendary+orientationary+'')
		      .then(response => {
		        this.info = response.data.bpi
		        // console.log(response);
		        for(i = 0;i < response.data.response.items.data.length ; i++){
		        	if(asset == 'icon')
		        	{
		        		this.items.push(response.data.response.items.data[i].urls.png_128);
		        		// console.log(this.items);
		        	}
		        	else if(asset == 'photo' || asset == 'illustration'){
		        		this.items.push(response.data.response.items.data[i].urls.thumb);
		        		// console.log(this.items);
		        	}
		        }
		      })
		      .catch(error => {
		        console.log(error)
		        this.errored = true
		      })
		      .finally(() => this.loading = false)
    	}
    }
}
</script>