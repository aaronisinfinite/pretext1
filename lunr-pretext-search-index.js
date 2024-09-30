var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  under construction. go here for now.   copyright  "
},
{
  "id": "ch1-1",
  "level": "1",
  "url": "ch1-1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Exercises",
  "body": " Exercises    Cute result  Prove that    A hint is given here.   A short answer is given here.   A detailed solution is given here.   "
},
{
  "id": "ch1-1-2",
  "level": "2",
  "url": "ch1-1.html#ch1-1-2",
  "type": "Checkpoint",
  "number": "1.1.1",
  "title": "Cute result.",
  "body": "Cute result  Prove that    A hint is given here.   A short answer is given here.   A detailed solution is given here.  "
},
{
  "id": "ch2-1",
  "level": "1",
  "url": "ch2-1.html",
  "type": "Section",
  "number": "2.1",
  "title": "matlab\/octave",
  "body": " matlab\/octave  here are sage cells using matlab\/octave syntax. they are as if in a notebook     "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " this is colophon.  This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
