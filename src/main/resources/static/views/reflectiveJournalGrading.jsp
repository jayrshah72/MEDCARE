<header id="header" data-current-skin={{mactrl.currentSkin}} data-ng-include="'template/header.html'" data-ng-controller="headerCtrl as hctrl"></header>

   <section id="main" data-layout="layout-1">
   
   		<aside id="sidebar" data-ng-include="'views/adminmenu.jsp'" data-ng-class="{ 'toggled': mactrl.sidebarToggle.left === true }"></aside>
   
      	<section id="content">
      	 	<div class="container">
      	 
         		<div class="block-header">
      			<button ui-sref="reflectivejournal" class="btn btn-default btn-icon-text waves-effect"><i class="zmdi zmdi-arrow-back"></i> Back</button>
         		</div>
         		
         		<div class="card">
         			<div class="card-body card-padding">
         			    							
     					<div class="row">
     						<div class="col-lg-6">
     							<select chosen data-placeholder="Select a Course..." class="w-100" >
     								<option value="">Select Course</option>
                        			<option value="United States">Transcription Course</option>
                        			<option value="United Kingdom">Monitoring Course (Old)</option>
                        			<option value="Afghanistan">Translation Course(Old)</option>
                        			<option value="Aland Islands">Monitoring Course</option>
                        			<option value="Albania">Translation Course</option>
                        			<option value="Algeria">English Grammar Writing Process</option>
                    			</select>
            				</div>
     					</div>
     					
     						   					
         				<div class="row text-center" style="margin-top:20px">
                			<div class="col-lg-12">
                				<button class="btn btn-primary">Go</button>
                			</div>
            			</div>
         		</div>	
         	</div>
        </section>
   </section>