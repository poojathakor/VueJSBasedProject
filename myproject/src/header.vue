<template>
    <div class="header">
    	<section id="header" class="py-2">
		<div class="container">
			<div>
				 <b-navbar toggleable="lg">
				    <b-navbar-brand href="/"><img src="./assets/images/iconscout-logo-white.svg" alt=""> </b-navbar-brand>
				     <form class="search" action="/" method="get" @submit.prevent="submitsearch">
							<div class="input-field">
								<input type="text" id="key" name="key" class="autocomplete  p-2" placeholder="Search anything..." v-model="key" required="">
								<button type="submit"><img src="./assets/images/searchicon.png"/></button>
							</div>
						</form>
				    <b-navbar-toggle target="nav_collapse" />

				    <b-collapse is-nav id="nav_collapse">
				      <b-navbar-nav class="ml-auto">
					        <b-nav-item href="#">Sign In</b-nav-item>
					        <b-nav-item href="#">Sign Up</b-nav-item>
					      
				      </b-navbar-nav>
				    </b-collapse>
				  </b-navbar>
				</div>

			<!-- <div class="">
				<div class="col-md-2 col-sm-12 col-xs-2">
					<div class="logo">
						<a href="/"><img src="./assets/images/iconscout-logo-white.svg" alt=""> </a>
					</div>
				</div>
				<div class="col-md-5 col-sm-12">
					<form class="search" action="/" method="get" @submit.prevent="submitsearch">
						<div class="input-field">
							<input type="text" id="key" name="key" class="autocomplete  p-2" placeholder="Search anything..." v-model="key" required="">
							<button type="submit"><img src="./assets/images/searchicon.png"/></button>
						</div>
					</form>
				</div>
				<div class="col-md-5 col-sm-12">
					<div>
						<ul class="list-inline d-flex align-items-center justify-content-end mb-0">
							<li class="mx-2"><a href="register.html">My Scout</a> </li>
							<li class="mx-2"><a href="login.html">Sign In</a> </li>
							<li class="mx-2"><a href="db-listing-add.html"><i class="fa fa-plus" aria-hidden="true"></i> Add Listing</a> </li>
						</ul>
					</div>
				</div>
			</div> -->
			<div v-if="locationSetup">
				<div class="row mt-3" >
					<div class="col-sm-6 col-lg-4 d-flex my-1">
						<div class="main-option-details">
							<input type="radio" name="asset"  id="icon" v-model="asset" value="icon" v-on:change="submitsearch">
							<label class="option-info" for="icon">
							        <span class="check-box"></span>
							        <h6 class="option-title">
							            Icon
							        </h6>
							 </label>
						</div>
						<div class="main-option-details">
							<input type="radio" name="asset" id="illustration" v-model="asset" value="illustration" v-on:change="submitsearch">
							<label class="option-info" for="illustration">
							        <span class="check-box"></span>
							        <h6 class="option-title">
							            Illustration
							        </h6>
							 </label>
						</div>
						<div class="main-option-details">
							<input type="radio" name="asset" id="photo" v-model="asset" value="photo" v-on:change="submitsearch">
							<label class="option-info" for="photo">
							        <span class="check-box"></span>
							        <h6 class="option-title">
							            Photo
							        </h6>
							 </label>
						</div>

					</div>
					<div class="col-sm-6 col-lg-4 d-flex my-1">
						<div class="main-option-details">
							<input type="radio" name="sort"  id="latest" v-model="sortby" value="latest" v-on:change="submitsearch">
							<label class="option-info" for="latest">
							        <span class="check-box"></span>
							        <h6 class="option-title">
							            Latest
							        </h6>
							 </label>
						</div>

						<div class="main-option-details">
							<input type="radio" name="sort" id="popular" v-model="sortby" value="popular" v-on:change="submitsearch">
							<label class="option-info" for="popular">
							        <span class="check-box"></span>
							        <h6 class="option-title">
							            Popular
							        </h6>
							 </label>
						</div>

						<div class="main-option-details">
							<input type="radio" name="sort" id="relevant" v-model="sortby" value="relevant" v-on:change="submitsearch">
							<label class="option-info" for="relevant">
							        <span class="check-box"></span>
							        <h6 class="option-title">
							            Relevant
							        </h6>
							 </label>
						</div>

					</div>
					<div class="col-sm-6 col-lg-4 d-flex my-1">

						<div class="main-option-details">
						<input type="radio" name="price"  id="free" v-model="price" value="free" v-on:change="submitsearch">
						<label class="option-info" for="free">
							        <span class="check-box"></span>
							        <h6 class="option-title">
							            Free
							        </h6>
							 </label>
						</div>
						<div class="main-option-details">
						<input type="radio" name="price" id="premium" v-model="price" value="premium" v-on:change="submitsearch">
						<label class="option-info" for="premium">
							        <span class="check-box"></span>
							        <h6 class="option-title">
							            Premium
							        </h6>
							 </label>
						</div>

						<div class="main-option-details">
						<input type="radio" name="price" id="all" v-model="price" value="all" v-on:change="submitsearch">
						<label class="option-info" for="all">
							        <span class="check-box"></span>
							        <h6 class="option-title">
							            All
							        </h6>
							 </label>
						</div>
					</div>
				</div>

			</div>
		</div>
		
	</section>
	 <div v-if="locationSetup">
	 	<div class="container">
			 <div class="searchreasult p-3">
			 	<div class="row" >

			 		<div class="col-sm-12 col-lg-4">
			 			<div>
			 			<div class="filter-head d-flex justify-content-between align-content-center mb-2">
			 				<label>Style</label> 
			 				<b-button v-b-toggle.style class="m-1">+</b-button>
			 			</div>
			 			<b-collapse visible id="style">
			 			<div>
			 				<div class="option-details">
				 				<input type="checkbox" name="colored-outline" v-model="style" value="colored-outline" id="colored-outline" v-on:change="submitsearch"/>  
				 				<label class="option-info" for="colored-outline">
									<span class="check-box"></span>
									<h6 class="option-title">
								       Colored Outline
								    </h6>
								</label>
							</div>
							<div class="option-details">
				 				<input type="checkbox" name="doodle" v-model="style" value="doodle" id="doodle" v-on:change="submitsearch"/> 
				 				<label class="option-info" for="doodle">
									<span class="check-box"></span>
									<h6 class="option-title">
								        Doodle
								    </h6>
								</label>
							</div>
							<div class="option-details">
				 				<input type="checkbox" name="dualtone" v-model="style" value="dualtone" id="dualtone" v-on:change="submitsearch"/> 
				 				<label class="option-info" for="dualtone">
									<span class="check-box"></span>
									<h6 class="option-title">
								        Dualtone
								    </h6>
								</label>
							</div>
							<div class="option-details">
				 				<input type="checkbox" name="flat" v-model="style" value="flat" id="flat" v-on:change="submitsearch"/> 
				 				<label class="option-info" for="flat">
									<span class="check-box"></span>
									<h6 class="option-title">
								        Flat
								    </h6>
								</label>
							</div>
							<div class="option-details">
				 				<input type="checkbox" name="glyph" v-model="style" value="glyph" id="glyph" v-on:change="submitsearch"/> 
				 				<label class="option-info" for="glyph">
									<span class="check-box"></span>
									<h6 class="option-title">
								        Glyph
								    </h6>
								</label>
							</div>
							<div class="option-details">
				 				<input type="checkbox" name="gradient" v-model="style" value="gradient" id="gradient" v-on:change="submitsearch"/>  
				 				<label class="option-info" for="gradient">
									<span class="check-box"></span>
									<h6 class="option-title">
								        Gradient
								    </h6>
								</label>
							</div>
							<div class="option-details">
				 				<input type="checkbox" name="isometric" v-model="style" value="isometric" id="isometric" v-on:change="submitsearch"/>  
				 				<label class="option-info" for="isometric">
									<span class="check-box"></span>
									<h6 class="option-title">
								        Isometric
								    </h6>
								</label>
							</div>
							<div class="option-details">
				 				<input type="checkbox" name="line" v-model="style" value="line" id="line" v-on:change="submitsearch"/>  
				 				<label class="option-info" for="line">
									<span class="check-box"></span>
									<h6 class="option-title">
								        Line
								    </h6>
								</label>
							</div>
							<div class="option-details">
				 				<input type="checkbox" name="rounded" v-model="style" value="rounded" id="rounded" v-on:change="submitsearch"/>   
				 				<label class="option-info" for="rounded">
									<span class="check-box"></span>
									<h6 class="option-title">
								        Rounded
								    </h6>
								</label>
							</div>
							<div class="option-details">
				 				<input type="checkbox" name="sticker" v-model="style" value="sticker" id="sticker" v-on:change="submitsearch"/>   
				 				<label class="option-info" for="sticker">
									<span class="check-box"></span>
									<h6 class="option-title">
								        Sticker
								    </h6>
								</label>
							</div>
			 			</div>
			 			</b-collapse>
			 		</div>
			 			<div>
			 			<div class="filter-head d-flex justify-content-between align-content-center mb-2">
			 				<label>Color</label>
				 			<b-button v-b-toggle.color class="m-1">+</b-button>
				 		</div>
				 		<b-collapse  id="color">
				 			<div class="color">
				 				<div class="main-option-details">
									<input type="radio" name="color"  id="#e51c23" v-model="color" value="e51c23" v-on:change="submitsearch">
										<label class="option-info" for="#e51c23">
									        <span class="check-box"></span>
									        <h6 class="option-title">
									            #e51c23
									        </h6>
									 </label>
								</div>

								<div class="main-option-details">
									<input type="radio" name="color" id="#e91e63" v-model="color" value="e91e63" v-on:change="submitsearch">
									<label class="option-info" for="#e91e63">
									        <span class="check-box"></span>
									        <h6 class="option-title">
									            #e91e63
								        </h6>
								 </label>
							</div>

							<div class="main-option-details">
								<input type="radio" name="color" id="#795548" v-model="color" value="795548" v-on:change="submitsearch">
								<label class="option-info" for="#795548">
								        <span class="check-box"></span>
								        <h6 class="option-title">
								           	#795548
								        </h6>
								 </label>
							</div>
						</div>
					</b-collapse>
				</div>
					<div  v-if='asset == "icon"'>
						<div>
							<div class="filter-head d-flex justify-content-between align-content-center mb-2">
								<label>Dimension</label>
					 			<b-button v-b-toggle.dimension class="m-1">+</b-button>
					 		</div>
				 			<b-collapse  id="dimension">
					 			<div class="dimension">
									<div class="main-option-details">
										<input type="radio" name="dimension"  id="16" v-model="dimension" value="16" v-on:change="submitsearch">
										<label class="option-info" for="16">
									        <span class="check-box"></span>
									        <h6 class="option-title">
									            16
									        </h6>
										 </label>
									</div>

									<div class="main-option-details">
									<input type="radio" name="dimension" id="24" v-model="dimension" value="24" v-on:change="submitsearch">
									<label class="option-info" for="24">
									        <span class="check-box"></span>
									        <h6 class="option-title">
									            24
									        </h6>
										 </label>
									</div>


									<div class="main-option-details">
									<input type="radio" name="dimension" id="32" v-model="dimension" value="32" v-on:change="submitsearch">
									<label class="option-info" for="32">
									        <span class="check-box"></span>
									        <h6 class="option-title">
									            32
									        </h6>
										 </label>
									</div>


									<div class="main-option-details">
									<input type="radio" name="dimension" id="48" v-model="dimension" value="48" v-on:change="submitsearch">
									<label class="option-info" for="48">
									        <span class="check-box"></span>
									        <h6 class="option-title">
									            48
									        </h6>
										 </label>
									</div>


									<div class="main-option-details">
									<input type="radio" name="dimension" id="64" v-model="dimension" value="64" v-on:change="submitsearch">
									<label class="option-info" for="64">
									        <span class="check-box"></span>
									        <h6 class="option-title">
									            64
									        </h6>
										 </label>
									</div>
									<div class="main-option-details">
									<input type="radio" name="dimension" id="96" v-model="dimension" value="96" v-on:change="submitsearch">
									<label class="option-info" for="96">
									        <span class="check-box"></span>
									        <h6 class="option-title">
									            96
									        </h6>
										 </label>
									</div>


									<div class="main-option-details">
									<input type="radio" name="dimension" id="128" v-model="dimension" value="128" v-on:change="submitsearch">
									<label class="option-info" for="128">
									        <span class="check-box"></span>
									        <h6 class="option-title">
									            128
									        </h6>
										 </label>
									</div>


									<div class="main-option-details">
									<input type="radio" name="dimension" id="192" v-model="dimension" value="192" v-on:change="submitsearch">
									<label class="option-info" for="16">
									        <span class="check-box"></span>
									        <h6 class="option-title">
									            192
									        </h6>
										 </label>
									</div>


									<div class="main-option-details">
									<input type="radio" name="dimension" id="256" v-model="dimension" value="256" v-on:change="submitsearch">
									<label class="option-info" for="256">
									        <span class="check-box"></span>
									        <h6 class="option-title">
									            256
									        </h6>
										 </label>
									</div>


									<div class="main-option-details">
									<input type="radio" name="dimension" id="512" v-model="dimension" value="512" v-on:change="submitsearch">
									<label class="option-info" for="512">
									        <span class="check-box"></span>
									        <h6 class="option-title">
									            512
									        </h6>
										 </label>
									</div>

								</div>
							</b-collapse>
						</div>
					</div>
						<div  v-if='asset != "icon"'>
							<label>Orientation</label>
							<b-button v-b-toggle.orientation class="m-1">+</b-button>
				 			<b-collapse  id="orientation">
							<div>
								<div class="option-details">
									<input type="checkbox" name="horizontal"  id="horizontal" v-model="orientation" value="horizontal" v-on:change="submitsearch" />
									<label class="option-info" for="horizontal">
										<span class="check-box"></span>
											<h6 class="option-title">
												Horizontal
											</h6>
									</label>
								</div>
								<div class="option-details">
									<input type="checkbox" name="vertical" id="vertical" v-model="orientation" value="vertical" v-on:change="submitsearch">
									<label class="option-info" for="vertical">
										<span class="check-box"></span>
											<h6 class="option-title">
												Vertical
											</h6>
									</label>
								</div>

								<div class="option-details">
									<input type="checkbox" name="square" id="square" v-model="orientation" value="square" v-on:change="submitsearch">
									<label class="option-info" for="square">
										<span class="check-box"></span>
											<h6 class="option-title">
												Square
											</h6>
									</label>
								</div>

								<div class="option-details">
									<input type="checkbox" name="horizontal-panorama" id="horizontal-panorama" v-model="orientation" value="horizontal-panorama" v-on:change="submitsearch">
									<label class="option-info" for="horizontal-panorama">
										<span class="check-box"></span>
											<h6 class="option-title">
												Horizontal Panorama
											</h6>
									</label>
								</div>
								
								<div class="option-details">
									<input type="checkbox" name="vertical-panorama" id="vertical-panorama" v-model="orientation" value="vertical-panorama" v-on:change="submitsearch">
									<label class="option-info" for="vertical-panorama">
										<span class="check-box"></span>
											<h6 class="option-title">
												Vertical Panorama
											</h6>
									</label>
								</div>

								<div class="option-details">
								<input type="checkbox" name="cylindrical-panorama" id="cylindrical-panorama" v-model="orientation" value="cylindrical-panorama" v-on:change="submitsearch">
								<label class="option-info" for="cylindrical-panorama">
										<span class="check-box"></span>
											<h6 class="option-title">
												360° Panorama (Cylindrical Panorama)
											</h6>
									</label>
								</div>

								<div class="option-details">
								<input type="checkbox" name="spherical-panorama" id="spherical-panorama" v-model="orientation" value="spherical-panorama" v-on:change="submitsearch">
								<label class="option-info" for="spherical-panorama">
										<span class="check-box"></span>
											<h6 class="option-title">
												Spherical Panorama
											</h6>
									</label>
								</div>

							</div>
						</b-collapse>
						</div>
			 		</div>
			 		<div class="col-sm-12 col-lg-8">
				    	<div class="row show-images" v-if='asset == "icon"'>
					    	<div v-for="(item,i) in items"  v-if="item.img_url != null" class="col-sm-3 col-md-2 col-12 my-1">
								<!-- <h1 v-text="item.name"></h1>
					    		<p v-text="item.desc"></p> -->
					    		<b-button v-b-modal="item.img_url">
					    			<img :src="item.img_url" class="w-100 h-100" />
					    		</b-button>
					    		<b-modal :id="item.img_url">
					    			<h1 v-text="item.name"></h1>
					    			<p v-text="item.desc"></p>
					    		</b-modal>	
					    	</div>

					    </div>
					    <div class="row show-images" v-else>
					    	<div v-for="(item,i) in items"  v-if="item.img_url != null" class="col-sm-6 col-md-4 col-12 my-1">
					    		<b-button v-b-modal="item.img_url">
					    			<img :src="item.img_url" class="w-100 h-100" />
					    		</b-button>
					    		<b-modal :id="item.img_url">
					    			<h1>{{item.name}}</h1>
					    			<p>{{item.desc}}</p>
					    		</b-modal>	
					    	</div>
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
    		orientation: [],
    		// title_of_item :[],
    		// height_of_item :[],
    		// desc_of_item: []
    	}
    },
    methods:{
    	submitsearch(){
    		
     		let i = 0,j=0;
    		let key = this.key;
    		
    		window.location.href = "/#/search";
    		this.locationSetup = true;
    		this.items = [];
    		console.log(this.items);
    		// this.title_of_item = [];
    		// this.height_of_item=[];
    		// this.desc_of_item = [];
    		// debugger;
    		let asset = this.asset;
    		let sortby = this.sortby;
    		let price = this.price;
    		// console.log(asset);
    		let style = this.style;
    		let appendary= '';
    		let orientationary = '';
    		let color = this.color;
    		let dimension = this.dimension;
    		let orientation = this.orientation;
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
    		// console.log(this.items, "Hi =====");
    		console.log('https://api.iconscout.com/v2/search?product_type=item&query='+key+'&asset='+asset+'&sort='+sortby+'&icon_grid='+dimension+'&color='+color+'&per_page=&price='+price+appendary+orientationary+'');
    		axios

		      .get('https://api.iconscout.com/v2/search?product_type=item&query='+key+'&asset='+asset+'&sort='+sortby+'&icon_grid='+dimension+'&color='+color+'&per_page=&price='+price+appendary+orientationary+'')
		      .then(response => {
		        this.info = response.data.bpi
		        // console.log(response);
		        for(i = 0;i < response.data.response.items.data.length ; i++){
		        	if(asset == 'icon')
		        	{
		        		this.items.push({img_url:response.data.response.items.data[i].urls.png_128, name:response.data.response.items.data[i].name , desc:response.data.response.items.data[i].license.description , height:response.data.response.items.data[i].license.height});
		        		
		        		// console.log(this.items);
		        		// console.log(this.items, "pooja =====");
		        	}
		        	else if(asset == 'photo' || asset == 'illustration'){
		        		this.items.push({img_url:response.data.response.items.data[i].urls.thumb, name:response.data.response.items.data[i].name,desc:response.data.response.items.data[i].license.description,height:response.data.response.items.data[i].license.height});
		        	
		        		// this.items.push(response.data.response.items.data[i].urls.thumb);
		        		// this.title_of_item.push(response.data.response.items.data[i].name);
		        		// this.desc_of_item.push(response.data.response.items.data[i].license.description);
		        		// this.height_of_item.push(response.data.response.items.data[i].license.height);
		        		// console.log(this.items);
		        	}
		        }
		        // console.log(this.items);
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