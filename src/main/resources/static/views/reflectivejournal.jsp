<data ui-view>
<header id="header" data-current-skin={{mactrl.currentSkin}} data-ng-include="'template/header.html'" data-ng-controller="headerCtrl as hctrl"></header>

   <section id="main" data-layout="layout-1">
   
   <aside id="sidebar" data-ng-include="'views/adminmenu.jsp'" data-ng-class="{ 'toggled': mactrl.sidebarToggle.left === true }"></aside>
   
      <section id="content">
      	 <div class="container">
      	 
         	<div class="block-header">
      			
         	</div>
         	
         	<div class="col-sm-4">
               <div class="card">
                  <div class="card-header bgm-bluegray m-b-20">
                     <h2>Add Reflective Journal <small>Phasellus condimentum ipsum id auctor</small></h2>               
                        <button ui-sref="reflectivejournal.addReflectiveJournal" class="btn bgm-blue btn-float waves-effect"><i class="zmdi zmdi-arrow-right"></i></button>
                  </div>
                  <div class="card-body card-padding">
                      Cras leo sem, egestas a accumsan eget, euismod at nunc. Praesent vel mi blandit, tempus ex gravida, accumsan dui. Sed sed aliquam augue. Nullam vel suscipit purus, eu facilisis ante. Mauris nec commodo felis. 
                  </div>
              </div>
            </div>
            
            <div class="col-sm-4">
               <div class="card">
                  <div class="card-header bgm-bluegray m-b-20">
                     <h2>Show Reflective Journal <small>Phasellus condimentum ipsum id auctor</small></h2>               
                        <button ui-sref="reflectivejournal.showReflectiveJournal" class="btn bgm-blue btn-float waves-effect"><i class="zmdi zmdi-arrow-right"></i></button>
                  </div>
                  <div class="card-body card-padding">
                      Cras leo sem, egestas a accumsan eget, euismod at nunc. Praesent vel mi blandit, tempus ex gravida, accumsan dui. Sed sed aliquam augue. Nullam vel suscipit purus, eu facilisis ante. Mauris nec commodo felis. 
                  </div>
              </div>
            </div>
            
            <div class="col-sm-4">
               <div class="card">
                  <div class="card-header bgm-bluegray m-b-20">
                     <h2>Grading <small>Phasellus condimentum ipsum id auctor</small></h2>               
                        <button ui-sref="reflectivejournal.reflectiveJournalGrading" class="btn bgm-blue btn-float waves-effect"><i class="zmdi zmdi-arrow-right"></i></button>
                  </div>
                  <div class="card-body card-padding">
                      Cras leo sem, egestas a accumsan eget, euismod at nunc. Praesent vel mi blandit, tempus ex gravida, accumsan dui. Sed sed aliquam augue. Nullam vel suscipit purus, eu facilisis ante. Mauris nec commodo felis. 
                  </div>
              </div>
            </div>
            
            
         	
      	 </div>
   	 </section>
   </section>
</data>
