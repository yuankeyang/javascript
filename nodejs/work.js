var x,y,q;
function gcd(r0,r1){
  if(r1==0){
    x=1;y=0;q=r0;
    return;
  }
  gcd(r1,r0%r1);
  var temp=x;
  y=temp-r0/r1*y;
}
gcd(243,198);
console.log(x);
