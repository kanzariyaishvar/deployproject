  var count_1 = 0;
  var count_2 = 0;
  var count_3 = 0;

  var price1 = 28;
  var price2 = 24;
  var price3 = 40;


  document.getElementById('p3').innerHTML = price3;
  document.getElementById('p2').innerHTML = price2;
  document.getElementById('p1').innerHTML = price1;

  var qp1 = 0;
  var qp2 = 0;
  var qp3 = 0;

  document.getElementById('qp1').innerHTML = qp1;
  document.getElementById('qp2').innerHTML = qp2;
  document.getElementById('qp3').innerHTML = qp3;


  // ----------------------------------------------------------------
  function add_1(a) {
    if (a == 'plusbox1') {
      if (count_1 < 10) {

        count_1++;
      }
      document.getElementById(a).innerHTML = count_1;
      qp1 = cal(count_1, price1);
      document.getElementById('qp1').innerHTML = qp1;

      Total();
    }
    else if (a == 'plusbox2') {
      if (count_2 < 10) {

        count_2++;
      }
      document.getElementById(a).innerHTML = count_2;
      qp2 = cal(count_2, price2);
      document.getElementById('qp2').innerHTML = qp2;
      Total();
    }
    else if (a == 'plusbox3') {
      if (count_3 < 10) {

        count_3++;
      }
      document.getElementById(a).innerHTML = count_3;
      qp3 = cal(count_3, price3);
      document.getElementById('qp3').innerHTML = qp3;

      Total();;

    }
  }

  // ----------------------------------------------------------------


  function sub(a) {

    if (a == 'plusbox1') {
      if (count_1 > 0) {

        count_1--;
      }
      document.getElementById(a).innerHTML = count_1;
      qp1 = cal(count_1, price1);
      document.getElementById('qp1').innerHTML = qp1;
      Total();
    }
    else if (a == 'plusbox2') {
      if (count_2 > 0) {

        count_2--;
      }
      document.getElementById(a).innerHTML = count_2;
      qp2 = cal(count_2, price2);
      document.getElementById('qp2').innerHTML = qp2;
      Total();
    }
    else if (a == 'plusbox3') {
      if (count_3 > 0) {

        count_3--;
      }
      document.getElementById(a).innerHTML = count_3;
      qp3 = cal(count_3, price3);
      document.getElementById('qp3').innerHTML = qp3;
      Total();
    }
  }


  // ----------------------------------------------------------------


  function cal(q, p) {
    return q * p;
  }

  // ----------------------------------------------------------------

  var total_price_1 = 0;
  document.getElementById('totle_p').innerHTML = total_price_1;

  // ----------------------------------------------------------------


  function totalp(qprice) {
    ans = ans + qprice;
    document.getElementById('totle_p').innerHTML = ans;
  }

  function Total() {
    var total_price = qp1 + qp2 + qp3;
    document.getElementById('totle_p').innerHTML = total_price;
  }

  // $(document).ready(function () {
  //   qp1 = cal(count_1, price1);
  //   document.getElementById('qp1').innerHTML = qp1;
  //   // qp2 = cal(count_2, price2);
  //   // document.getElementById('qp2').innerHTML = qp2;
  //   // qp3 = cal(count_3, price3);
  //   // document.getElementById('qp3').innerHTML = qp3;
  //   Total();
  // });