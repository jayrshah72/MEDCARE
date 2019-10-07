<style>
.heading_style {
font-size: 13pt;
padding: 5px;
color: #000000;
}

.input_text {
padding-left: 10px !important;
}
</style>

<header id="header" data-current-skin={{mactrl.currentSkin}} data-ng-include="'template/header.html'" data-ng-controller="headerCtrl as hctrl"></header>

   <section id="main" data-layout="layout-1">
   
   <aside id="sidebar" data-ng-include="'views/adminmenu.jsp'" data-ng-class="{ 'toggled': mactrl.sidebarToggle.left === true }"></aside>
   
      <section id="content">
      	 <div class="container">
      	 
         	<div class="block-header">
      			
         	</div>
         	
         
          <div class="card">
         			<div class="card-body card-padding">    					
     					<div class="row">
     						<div class="col-lg-6">
         						<div class="form-group fg-float m-b-30">
                					<div class="fg-line">
                    					<input type="text" class="input-lg form-control fg-input">
                    					<label class="fg-label">Student Name</label>
                					</div>
            					</div>
         					</div>
         					
         					<div class="col-lg-6">
         						<div class="form-group fg-float m-b-30">
                					<div class="fg-line">
                    					<input type="text" class="input-lg form-control fg-input">
                    					<label class="fg-label">Student Login ID</label>
                					</div>
            					</div>
         					</div>
     					</div>
     					
     					<div class="row">
     						<div class="col-lg-6">
         						<div class="form-group fg-float m-b-30">
                					<div class="fg-line">
                    					<input type="text" class="input-lg form-control fg-input">
                    					<label class="fg-label">Email ID</label>
                					</div>
            					</div>
         					</div>
         					
         					<div class="col-lg-6">
         						<div class="form-group fg-float m-b-30">
                					<div class="fg-line">
                    					<input type="text" class="input-lg form-control fg-input">
                    					<label class="fg-label">Password</label>
                					</div>
            					</div>
         					</div>
     					</div>
     						
     										   					
         				<div class="row text-center" style="margin-top:20px">
                			<div class="col-lg-12">
                				<button class="btn btn-primary">Submit</button>
                			</div>
            			</div>
         		</div>	
         	</div>
               	
      	 </div>
   	 </section>
   </section>
