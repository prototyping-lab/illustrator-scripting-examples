
// Cross blending in a pairwise fashion between all selected items ...

// Array helper
Array.prototype['pairwise'] = function (func) {
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = i; j < this.length - 1; j++) {
            func([this[i], this[j+1]]);
        }
    }
};

// Wrap everything into a function, that we can easily escape from
(() => {

    // get the document
    let doc = getDocument();
    if(!doc) return;

    // copy the current selection
    let selection = getSelection();
    if(!selection) return;
  
    // set blend options manually
    app.executeMenuCommand( "Path Blend Options" );

    // blend pairs
    blendPairs(selection);

    // remove original shapes
    remove(selection);

  })();

  // return the active document
  function getDocument() {
    if (app.documents.length === 0) {
        error("Please open a document and select at least two items");
        return false;
    }
    return app.activeDocument;
  }

  // do some sanity checks & return the current selection
  function getSelection() {

    const selection = app.activeDocument.selection.slice();

    // Assert we have at least two selected items
    $.writeln("You selected " + selection.length + " shapes");
    if (selection.length == 0) {
      error("No Item selected\nPlease select at least two items.");
      return false;
    }
    if (selection.length == 1) {
      error("You only selected one item", "Please select at least two items.");
      return false;
    }
    return selection;
  }

  // compose error message
  function error( ... msg : string[] ) {
    alert(["ERROR:", ... msg ].join("\n"));
  }

  // put all items into a group
  function createGroup( items ) {
    let doc = app.activeDocument;
    let group = doc.groupItems.add();
    group.name = "My Group";
    group.move( doc, ElementPlacement.PLACEATEND );
    for (let item of items) {
        //item.duplicate().moveToBeginning(group);
        item.moveToBeginning(group);
    }
  }

  // remove items from the document
  function remove( items) {
    for(let item of items) {
        item.remove();
    }
  }

  // pairwise blend interpolation
  function blendPairs( items ) {

    items.pairwise( ([item1, item2] : PathItem[] ) => {

        // duplicate items
        let i1 = item1.duplicate(item1.parent, ElementPlacement.PLACEATEND);
        let i2 = item2.duplicate(item2.parent, ElementPlacement.PLACEATEND);

        // blend duplicated items
        app.activeDocument.selection = [i1, i2];
        // $.writeln(`Selection: ${app.activeDocument.selection}`);
        // $.writeln(`${item1.position} --- ${item2.position}`);
       
        app.executeMenuCommand( "Path Blend Make" );
        app.executeMenuCommand( "Path Blend Expand");
        app.executeMenuCommand( "ungroup");

    })

  }

  