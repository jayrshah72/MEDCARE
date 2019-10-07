<style>
.heading_style {
font-size: 13pt;
padding: 5px;
color: #000000;
}

span {
margin-left: 10px;
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
     						<div class="col-lg-4">
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
            				
            				<div class="col-lg-4">
     							<select chosen data-placeholder="Select a Course..." class="w-100" >
     								<option value="">Select Session</option>
                        			<option value="United States">Session 1</option>
                        			<option value="United Kingdom">Session 2</option>
                    			</select>
            				</div>
            				
            				<div class="col-lg-4">
     							<select chosen data-placeholder="Select a Course..." class="w-100" >
     								<option value="">Select Unit</option>
                        			<option value="United States">Unit 1: Introduction to Transcription </option>
                        			<option value="United Kingdom">Unit 2: The Transcription Process</option>
                        			<option value="Afghanistan">Unit 3: Quality Control</option>
                        			<option value="Aland Islands">Unit 4: Convention,Mechanics and Pitfalls of Transcription</option>
                        			<option value="Albania">Unit 5: Spanish and English Texting</option>
                        			<option value="Algeria">Unit 6: Dialects</option>
                        			<option value="Algeria">Unit 7: Corridos</option>
                        			<option value="Algeria">Unit 8: Phonological,Syntactical,Morphological and Laxical Challenges in Spanish Transcription</option>
                    			</select>
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