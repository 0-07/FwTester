var links = document.getElementsByClassName( 'fastattack' );
for ( var i = 0; i < links.length; i++ ) {
    var link = links[i];

    var newlink = document.createElement( 'a' );

    newlink.href = link.href.replace( 'action=attacknpc', 'action=chasenpc' );

    newlink.textContent = 'Verjagen';

    var nextNode = link.nextSibling;
    link.parentNode.insertBefore( newlink, nextNode );

    var delim = document.createTextNode( ' - ' );
    link.parentNode.insertBefore( delim, newlink );

}