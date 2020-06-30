var dsspmua = "";
var giohang = {};

function addGioHang(xID, xName, xPrice) {
    var hangthem = giohang[xID];

    console.log(hangthem);

    if (hangthem) {
        hangthem["soluong"] += 1
    } else {
        hangthem = { "ten" : xName, "gia" : xPrice, "soluong" : 1};
    }
    giohang[xID] = hangthem;

    console.log(hangthem);

}

function themvao(xID, xName, xPrice) {
    //alert(xID + "  " + xName);
    var x = document.getElementById("giohangTab");
    var ds = document.getElementById("dssp");

    /// ADD
    addGioHang(xID, xName, xPrice);

    /// show list
    var xkeys = Object.keys(giohang);
    var showlist = "";
    dsspmua = "";

    for(j=0; j<xkeys.length; j++)
    {
        dsspmua += xkeys[j] + "_" + giohang[ xkeys[j] ]["soluong"] + "_";
        showlist += "<tr> <td> " 
            + giohang[ xkeys[j] ]["ten"] 
            + " </td> <td> "  + giohang[ xkeys[j] ]["soluong"] + " </td> <td> "
            + giohang[ xkeys[j] ]["gia"] + " </td></tr>";
    };


    x.innerHTML = showlist;
    ds.value = dsspmua;
}
    
