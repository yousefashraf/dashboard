
var navbar = $('.navbar');

var x = navbar.innerHeight();

$('body').css("padding-top" , x)



$('.sidebar').css('max-height', $(window).height());

//$('.sidebar').addClass('collapse');



////////////////
$(document).ready( function () {
// Select wrong element
// Error as #demo is the `div` element
$('#demo').dataTable()
 
// Selector too broad.
// Error as `.display` is applied to both the div and the table
$('.display').dataTable();

});



/*drawing charts by morris*/
var year_data = [
    {"period": "2012", "licensed": 3407, "sorned": 660},
    {"period": "2011", "licensed": 3351, "sorned": 629},
    {"period": "2010", "licensed": 3269, "sorned": 618},
    {"period": "2009", "licensed": 3246, "sorned": 661},
    {"period": "2008", "licensed": 3257, "sorned": 667},
    {"period": "2007", "licensed": 3248, "sorned": 627},
    {"period": "2006", "licensed": 3171, "sorned": 660},
    {"period": "2005", "licensed": 3171, "sorned": 676},
    {"period": "2004", "licensed": 3201, "sorned": 656},
    {"period": "2003", "licensed": 3215, "sorned": 622}
];
Morris.Line({
    element: 'graph-12',
    data: year_data,
    xkey: 'period',
    ykeys: ['licensed', 'sorned'],
    labels: ['Licensed', 'SORN'],
    resize:true,
    hideHover: true
});

Morris.Area({
    element: 'graph-11',
    behaveLikeLine: true,
    data: year_data,
    xkey: 'period',
    ykeys: ['licensed', 'sorned'],
    labels: ['Licensed', 'SORN'],
    resize:true,
    hideHover: true
});

Morris.Bar({
  element: 'graph-21',
    data: year_data,
    xkey: 'period',
    ykeys: ['licensed', 'sorned'],
    labels: ['Licensed', 'SORN'],
    resize:true,
    hideHover: true
});

Morris.Bar({
  element: 'graph-22',
    data: year_data,
    xkey: 'period',
    ykeys: ['licensed', 'sorned'],
    labels: ['Licensed', 'SORN'],
    stacked: true,
    resize:true,
    hideHover: true
});

Morris.Donut({
data: [
{value: 70, label: 'foo'},
{value: 15, label: 'bar'},
{value: 10, label: 'baz'},
{value: 5, label: 'A really really long label'}
],
  element: 'graph-23',
    resize:true,
    hideHover: true
});

/*//////////////////////////////////////////*/














