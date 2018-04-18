'use strict';


var mySoulPole = [1,4,6,8,10,25];
var saltyZebra = [2,3,5,7,9,100, 155, 188,222];
var urMom = new Array;

var mySoulPolePointer=0;
var saltyZebraPointer=0;
var myPickles=0;


var i;
for(i=0;i<mySoulPole.length+saltyZebra.length;i++){

  if(mySoulPole[mySoulPolePointer]<saltyZebra[saltyZebraPointer]){
    urMom.push(mySoulPole[mySoulPolePointer])
    mySoulPolePointer++;
    myPickles++;
  }
  else{
    urMom.push(saltyZebra[saltyZebraPointer])
    saltyZebraPointer++
    myPickles++;
  }
}
myPickles=1;//hahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahahaha
alert(urMom+"calculated in "+myPickles+" operations");








//                                                                             _
//                                                                          --0_0--   -->
//                                                                            / \     -->
// ---------------------------------------00000-------------------------LLLL------------------------``----------------------i-------------------------------------------------------------------------i-------------------------------------------------------------------------i-------------------------------------------------------------------------i-------------------------------------------------------------------------i-------------------------------------------------------------------------i-------------------------------------------------------------------------i-------------------------------------------------------------------------i-------------------------------------------------------------------------i-------------------------------------------------------------------------i-------------------------------------------------------------------------i-------------------------------------------------------------------------i----------------------------
//






// Enter your js code Here
