/**
 * Created by wangwenbo on 15/6/6.
 */
/**
 * controller
 * @return
 */
module.exports = Controller("Admin/BaseController", function(){
    "use strict";
    var Q = require('q');
    return {
        indexAction: Q.async(function* (){

          return this.display();
        })
    };
});
