function walk(node) {	// panicsteve stole this function from here:
						// http://is.gd/mwZp7E
	var child, next;
	
	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

	switch ( node.nodeType )  {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) {
	var v = textNode.nodeValue;

	var phraseDictRegex = new Map ([
		[/(the) (cloud)/g, "my butt"],
		[/(cloud) (computing)/g, "butt computing"],
		[/(blockchain)/g, "buttchain"],
		[/(artificial) (intelligence)/g, "artificial butt"],
		[/(internet) (of) (things)/g, "internet of thongs"],
		[/(quantum) (computing)/g, "quantum farting"],
		[/(The) (cloud)/g, "My butt"],
		[/(Cloud) (computing)/g, "Butt computing"],
		[/(Blockchain)/g, "Buttchain"],
		[/(Artificial) (intelligence)/g, "Artificial butt"],
		[/(Internet) (of) (things)/g, "Internet of thongs"],
		[/(Quantum) (computing)/g, "Quantum farting"]
	]);

	const iter1=phraseDictRegex.keys();
	const iter2=phraseDictRegex.values();

	for(var i=0;i<phraseDictRegex.size;i++)
		v=v.replace(iter1.next().value,iter2.next().value);

	textNode.nodeValue = v;
}

walk(document.body);

//TODO use more elegant way to account for capitalization
