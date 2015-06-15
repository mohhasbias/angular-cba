/**
 * Created by rumaisyah on 6/15/2015.
 */

angular.module('SparkMobileApp')
  .run(attachFastClick);

function attachFastClick(){
  FastClick.attach(document.body);
}