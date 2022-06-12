Link : https://www.youtube.com/watch?v=xKsdnnOXvAs&list=PL_NVFNExoAxclqXo9fLAeP0G2Qp56Fu8C
1) make a folder inside app
install bootstrap
   npm install bootstrap --save and add   "node_modulee/bootstrap/dist/css/bootstrap.min.css", in angular.json

2) use of row and column
3) using of zoominf effect --------------
    .card:hover img{
      transform: scale(1.2,1.2);
      transition-duration: 500ms;
      transition-timing-function: ease-out;
    }

Link for icon: https://fontawesome.com/icons

Add a folder name data
use     HttpClientModule  in app.module for use of service
app ke bahar ke folder ko angular.json ke asset me define karna padta hai

Create a service in app for exchange data between two component
  ng g  service housing
  register in app.module providers
